// app/design/page.tsx
import styles from "./page.module.css";

// Main design/overview page for the Ensemble concept
export default function DesignPage() {
  return (
    <main className={styles.page} dir="rtl">
      <div className={styles.invoice}>
        {/* Section 1: logo, main title, intro text, credits */}
        <section className={styles.section}>
          <div className={styles.logoWrapper}>
            {/* Logo image and app title */}
            <img
              src="/Israel_Museum_Logo.svg.png"
              alt="לוגו אנסמבל"
              className={styles.logoImage}
            />
            <h1 className={styles.mainTitle}>אנסמבל</h1>
          </div>

          {/* Intro paragraph – bold and larger via CSS */}
          <p className={styles.paragraph}>
            אפליקציית הכרויות בין אמנים ואוצרים מטעם מוזיאון ישראל. הפלטפורמה
            מייצרת חיבורים והזדמנויות חדשות על מנת להקל על תהליך האוצרות במוזיאון.
            אופציה נוספת שקיימת באפליקציה היא שיתופי פעולה בין אמנים.
          </p>

          {/* Credits block */}
          <div className={styles.creditsBlock}>
            <p className={styles.creditsLine}>
              <span className={styles.creditsTitle}>מתכנתים:</span>
              נוי ביתן, מעין מימון, שירה ברקוביץ, רפאל סבון.
            </p>
            <p className={styles.creditsLine}>
              <span className={styles.creditsTitle}>מעצבים:</span>
              טל לנגזם, שני דודוביץ, אגניו טגניה, מאי מינה.
            </p>
            <p className={styles.creditsLine}>
              <span className={styles.creditsTitle}>יועצים חיצוניים:</span>
              צוות המוזיאון, האוצר הבכיר של מוזיאון ישראל, עומר זיו ואורי סוכרי –
              מעצבי UX בכירים.
            </p>
          </div>
        </section>

        {/* Section 2: background, motivation, goals */}
        <section className={styles.section}>
          <div className={styles.shapeCircle} aria-hidden="true">
            <div className={styles.shapeCircleInner} />
          </div>
          <h2 className={styles.sectionTitle}>רקע, מניעים ומטרות</h2>
          <p className={styles.paragraph}>
            התהליך האוצרותי במוזיאון ישראל הוא תהליך ארוך ולעתים מייגע,
            אינטואיטיבי ומפוזר, שמתבסס בעיקר על היכרות אישית וקשרים. האוצרים במוזיאון
            נדרשים לעבור דרך מאגרי עבודות, אתרים שונים וחיפוש רחב כדי למצוא חיבורים
            בין אמנים ליצירות. במקביל, יוצרים רבים רוצים לחשוף את היצירות שלהם על
            מנת להגיע למוזיאון בהקשרים הרלוונטיים, אבל קשה להם להגיע לאוצרים וליצור
            איתם קשר.
          </p>
          <p className={styles.paragraph}>
            המטרה שלנו היא להשיג חיבור בין יוצרים לאוצרים פעילים, על בסיס חומר חזותי
            והתאמה אישית. האפליקציה מטעם מוזיאון ישראל, ייעודית ונגישה במיוחד לאנשי
            אמנות ועיצוב על מנת לאפשר הזדמנויות ושיתופי פעולה.
          </p>
        </section>

        {/* Section 3: target audience & usage context */}
        <section className={styles.section}>
          <div className={styles.shapeFunnel} aria-hidden="true">
            <div className={styles.funnelTriangle} />
            <div className={styles.funnelStem} />
          </div>
          <h2 className={styles.sectionTitle}>קהל היעד וקונטקסט השימוש</h2>

          <ul className={styles.list}>
            <li>
              המוצר ישרת את האוצרים והאוצרות לשימוש תקופתי בעת עבודה על הכנת
              תערוכות, ואת האמנים ישרת גם לשימוש יומיומי בחיפוש אחר פלטפורמה להצגת
              העבודות שלהם ולשיתופי פעולה.
            </li>
            <li>אוצרים ואוצרות של מוזיאון ישראל ומוסדות נוספים.</li>
            <li>
              אמנים ויוצרים פעילים: אמנים, בוגרי בתי ספר לאמנות, סטודנטים לאומנות,
              יוצרים חזותיים עצמאיים ועוד.
            </li>
          </ul>

          <p className={styles.paragraph}>
            <strong>מגבלות או דרישות נוספות:</strong> תמיכה טכנית בהעלאת קבצים כבדים
            כמו וידיאו באיכות טובה, נגישות מיוחדת למשתמשים מבוגרים, יצירת הסבר על
            מושגים בעולם האוצרות על מנת להפוך את החוויה של האמנים לקלה יותר.
          </p>
        </section>

        {/* Section 4: phone mockup + main feature list */}
        <section className={`${styles.section} ${styles.phoneSection}`}>
          <div className={styles.phoneGradient}>
            <img
              src="ensemble-phone.png"
              alt="מסך האפליקציה אנסמבל"
              className={styles.phoneImage}
            />
          </div>
          <h2 className={styles.sectionTitle}>מה אנחנו בונים?</h2>
          <p className={styles.paragraph}>
            אנחנו בונים פלטפורמה אינטראקטיבית מבוססת סווייפים שמייצרת חיבורים
            אומנותיים בין אמנים לאוצרים. פיצ׳רים עיקריים:
          </p>
          <ul className={styles.list}>
            <li>
              פרופיל משתמש (אמן / אוצר) – כולל עבודות, תיאור קצר ותגיות נושאיות.
            </li>
            <li>
              פיד מבוסס על אלגוריתם התאמה – האפליקציה מציגה עבודות בהתאם לתחומי
              עניין ונושאים נבחרים.
            </li>
            <li>
              סוויפים (Match System) – ימינה = אהבתי / רלוונטי, שמאלה = לא מתאים.
            </li>
            <li>
              מאצ׳ הדדי – אם גם הצד השני מאשר, נפתחת אפשרות לצ׳אט או יצירת קשר:
              אומן מול אומן – שני הצדדים יכולים לפתוח שיחה לאחר המאצ׳; אומן מול
              אוצר – רק האוצר יכול לפתוח שיחה, למטרה מקצועית.
            </li>
            <li>
              עמוד לייקים – אוצרים יכולים לאגור פרופילים רלוונטיים למרחב עבודה
              חזותי.
            </li>
            <li>
              העדפות – המשתמש יכול להוסיף תיוגים בפרופיל שלו, וכך המחפשים יוכלו
              לבצע סינון מתקדם לפי גיל, תחום אומנותי ועוד.
            </li>
          </ul>
        </section>

        {/* Section 5: what we are NOT building */}
        <section className={styles.section}>
          <div className={styles.shapeBowtie} aria-hidden="true">
            <div className={styles.bowtieLeft} />
            <div className={styles.bowtieRight} />
          </div>
          <h2 className={styles.sectionTitle}>מה אנחנו לא בונים?</h2>
          <p className={styles.paragraph}>
            אנחנו לא רשת חברתית פתוחה או פיד ציבורי (אין עוקבים או פוסטים). בנוסף,
            האפליקציה אינה פלטפורמת מכירה של אמנות. האפליקציה היא כלי עבודה עבור
            בעלי המקצוע הרלוונטיים בלבד, ולא לצפייה פסיבית באמנות. האפליקציה לא
            מציגה מאגר קבוע של עבודות מטעם מוזיאון ישראל – העבודות המוצגות הן
            עבודות מטעמם של המשתמשים בלבד.
          </p>
        </section>

        {/* Section 6: technical constraints, problems, risks, open questions */}
        <section className={styles.section}>
          <div className={styles.shapeDiamond} aria-hidden="true" />
          <h2 className={styles.sectionTitle}>דרישות או מגבלות טכניות</h2>
          <ul className={styles.list}>
            <li>
              ניהול תוכן: נדרש ממשק ניהול למוזיאון או לצוות האפליקציה לאישור תכנים.
            </li>
            <li>
              אבטחת מידע: יש להגן על זכויות יוצרים ועל נתונים אישיים, למשל באמצעות
              ויתור זכויות בעת ההרשמה או מנגנונים שמקשים על הורדת תמונות.
            </li>
          </ul>

          <h2 className={styles.sectionTitle}>בעיות</h2>
          <p className={styles.paragraph}>
            פרסום והפצת הפלטפורמה – קושי בגיוס אמנים ואוצרים שיאמצו את המערכת
            בשלב הראשון. סוגיית זכויות יוצרים והעלאת עבודות רגישות.
          </p>

          <h2 className={styles.sectionTitle}>סכנות</h2>
          <p className={styles.paragraph}>
            חוסר איזון בין כמות האוצרים לכמות האמנים. דרך התמודדות: שיתוף פעולה עם
            מוזיאון ישראל כשותף השקה אמין, ובניית חוויית שימוש שמדגישה ערך מקצועי –
            לא רק מאצ׳ים, אלא גם תהליך עבודה אמיתי.
          </p>

          <h2 className={styles.sectionTitle}>שאלות פתוחות</h2>
          <p className={styles.paragraph}>
            איך בדיוק ייראה התהליך שאחרי מאצ׳? (צ׳אט בלבד או גם כלים לעבודה
            משותפת?) איך נמדוד הצלחה – לפי כמות חיבורים שנוצרו או לפי פרויקטים
            שהתגבשו? האם יידרש מודל כלכלי כלשהו (מנוי, תמיכה מוסדית וכו׳)?
          </p>
        </section>

        {/* Footer credit for the visual designer */}
        <p className={styles.designerCredit}>
          העיצוב נוצר על ידי המעצב טל לנגזם.
        </p>
      </div>
    </main>
  );
}
