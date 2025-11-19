import styles from "./page.module.css";

const MET_BASE_URL =
  "https://collectionapi.metmuseum.org/public/collection/v1";

// TypeScript type for the art item we return from getArtData
type ArtItem = {
  id: number;
  title: string;
  artistDisplayName: string;
  departmentId: number;
  departmentDisplayName: string;
  objectDate: string;
  medium: string;
  imageUrl: string;
};

// Data fetching function exactly as required in the assignment.
// departmentId: which department to use (e.g. "11" for European Paintings)
// count: how many art objects to return
async function getArtData(
  departmentId: string,
  count: number
): Promise<ArtItem[]> {
  // 1) Get list of object IDs for the given department using the /objects endpoint
  const listResponse = await fetch(
    `${MET_BASE_URL}/objects?departmentIds=${departmentId}`
  );

  if (!listResponse.ok) {
    throw new Error("Failed to load objects list from the Met API.");
  }

  const listJson: { total?: number; objectIDs?: number[] } =
    await listResponse.json();
  const allIds = listJson.objectIDs ?? [];

  if (allIds.length === 0) {
    throw new Error("No objects found for this department.");
  }

  // 2) Shuffle the IDs so we get random objects
  const shuffledIds = [...allIds].sort(() => 0.5 - Math.random());

  const items: ArtItem[] = [];
  let index = 0;

  // 3) Fetch details for each object ID using the /objects/[objectID] endpoint
  //    Stop when we collected "count" valid items or ran out of IDs.
  while (items.length < count && index < shuffledIds.length) {
    const objectId = shuffledIds[index];
    index += 1;

    const objResponse = await fetch(`${MET_BASE_URL}/objects/${objectId}`);

    if (!objResponse.ok) {
      // skip this ID if the request failed
      continue;
    }

    const obj = await objResponse.json();

    // we prefer objects that actually have a small primary image
    if (!obj.primaryImageSmall) {
      continue;
    }

    items.push({
      id: obj.objectID,
      title: obj.title,
      artistDisplayName: obj.artistDisplayName,
      departmentId: obj.departmentId ?? Number(departmentId),
      departmentDisplayName: obj.department,
      objectDate: obj.objectDate,
      medium: obj.medium,
      imageUrl: obj.primaryImageSmall,
    });
  }

  return items;
}

// Helper function to get department display name from /departments endpoint
async function getDepartmentName(departmentId: string): Promise<string> {
  const resp = await fetch(`${MET_BASE_URL}/departments`);

  if (!resp.ok) {
    // fallback: just show the ID if departments endpoint fails
    return `Department ${departmentId}`;
  }

  const json: { departments: { departmentId: number; displayName: string }[] } =
    await resp.json();

  const match = json.departments.find(
    (d) => d.departmentId === Number(departmentId)
  );

  return match ? match.displayName : `Department ${departmentId}`;
}

// This page is a Server Component, so we can make it async
export default async function ArtPage() {
  // You can change this departmentId if you want another department
  const departmentId = "11"; // 11 = European Paintings, for example
  const count = 8; // how many art objects to show

  let artItems: ArtItem[] = [];
  let errorMessage = "";
  let departmentTitle = "";

  try {
    // Fetch art data array
    artItems = await getArtData(departmentId, count);
    // Fetch department display name (title) from /departments
    departmentTitle = await getDepartmentName(departmentId);
  } catch (err) {
    console.error(err);
    errorMessage =
      "Sorry, something went wrong while loading art data from the Met API. Please try again later.";
  }

  // Handle HTTP errors with a helpful message, as required in the assignment
  if (errorMessage) {
    return (
      <main className={styles.container}>
        <h1 className={styles.title}>Art gallery</h1>
        <p className={styles.error}>{errorMessage}</p>
      </main>
    );
  }

  if (artItems.length === 0) {
    return (
      <main className={styles.container}>
        <h1 className={styles.title}>Art gallery</h1>
        <p className={styles.error}>
          No suitable artworks were found for this department.
        </p>
      </main>
    );
  }

  // Title of the chosen department, taken from the API
  const departmentNameFromObjects =
    artItems[0]?.departmentDisplayName || departmentTitle || "Art department";

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Art from {departmentNameFromObjects}</h1>

      <div className={styles.grid}>
        {artItems.map((item) => (
          <article key={item.id} className={styles.card}>
            <img
              src={item.imageUrl}
              alt={item.title}
              className={styles.image}
            />

            <h2 className={styles.cardTitle}>{item.title}</h2>

            <p className={styles.artist}>
              {item.artistDisplayName || "Unknown artist"}
            </p>

            {/* At least 3 other properties from the API */}
            <p className={styles.meta}>
              <strong>Date:</strong> {item.objectDate || "N/A"}
            </p>
            <p className={styles.meta}>
              <strong>Medium:</strong> {item.medium || "N/A"}
            </p>
            <p className={styles.meta}>
              <strong>Department ID:</strong> {item.departmentId}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
