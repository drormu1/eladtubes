# אתר תדמיתי - אלעד שמחי עבודות ביוב, עפר ואינסטלציה

אתר חד-דפי מהיר, ממוקד פניות, עם כפתורי וואטסאפ וטלפון בולטים.

## קבצים מרכזיים
- `index.html` - מבנה העמוד והסקשנים
- `styles.css` - עיצוב מלא ורספונסיבי
- `data.js` - **כל התוכן**: פרטי קשר + גלריות (זה הקובץ שעורכים)
- `script.js` - לוגיקה בלבד (לא נוגעים בו לעדכוני תוכן)

## עדכון פרטי קשר (מקום אחד בלבד)
פתחו את `data.js` וערכו את `contact`:

```js
window.siteData = {
  contact: {
    phoneDisplay: "050-886-1398",
    phoneE164: "+972508861398",
    whatsappE164: "972508861398",
    whatsappText: "היי אלעד, ראיתי את האתר ואשמח לקבל הצעת מחיר.",
  },
  // ...
};
```

הערות:
- `phoneE164` חייב לכלול קידומת בינלאומית, לדוגמה: `+972...`
- `whatsappE164` ללא פלוס, לדוגמה: `972...`

## מבנה מדיה (תמונות וסרטונים)
### תמונות
- `assets/images/home-hero/`
- `assets/images/equipment/`
- `assets/images/big-clients/`
- `assets/images/projects-house-committees/`
- `assets/images/team/`

### סרטונים
- `assets/videos/home-hero/`
- `assets/videos/projects-house-committees/`

## איך מוסיפים תוכן בגלריות
1. העלו תמונות/סרטונים לתיקיות המתאימות.
2. פתחו את `data.js`.
3. במערכים `galleries.equipment` / `clients` / `projects` / `team` עדכנו כותרת, תיאור ונתיב.
   - תמונה: שדה `image`. סרטון: שדה `video` (אפשר להוסיף `badge: "וידאו"`).

## תמונות דמו שכבר מחוברות
- הוזנו תמונות דמו חינמיות לתיקיות המדיה והן מוצגות באתר.
- רשימת מקורות נשמרה בקובץ: `assets/images/SOURCES.md`.

## אחסון חינמי מומלץ - GitHub Pages
1. יוצרים מאגר חדש ב-GitHub.
2. מעלים את כל הקבצים לפרויקט.
3. נכנסים ל-Settings > Pages.
4. בוחרים Deploy from a branch.
5. בוחרים branch `main` ותיקיית root.
6. שומרים ומקבלים קישור חי לאתר.

## קידום בגוגל (SEO)
מה שכבר מוכן באתר:
- כותרת ותיאור עם מילות מפתח מקומיות (פתח תקווה והמרכז) ב-`index.html`
- נתונים מובנים של עסק מקומי (Schema.org/Plumber) - מוזרקים אוטומטית מ-`data.js`
- תגיות שיתוף (Open Graph) לתצוגה יפה בוואטסאפ/פייסבוק
- `robots.txt` + `sitemap.xml`

### אחרי העלאת האתר לאינטרנט (חובה!)
כשיש כתובת אמיתית לאתר (GitHub Pages או דומיין):
1. לעדכן את `siteUrl` ב-`data.js` (בבלוק `business`).
2. להחליף את `REPLACE-WITH-YOUR-SITE-URL` ב-`robots.txt` וב-`sitemap.xml`.
3. להסיר את ההערה מסביב לשורות `og:url` ו-`og:image` ב-`index.html` ולעדכן שם את הכתובת.

## שלב שיווק בהמשך (Google)
לפי סדר עדיפות:
1. נרשמים ל-Google Business Profile (חינם, הכי חשוב לעסק מקומי) - google.com/business.
2. פותחים Google Search Console, מבצעים אימות אתר ושולחים את ה-sitemap.
3. מחברים Google Analytics 4.
4. רק בסוף, אם רוצים להאיץ: קמפיין Google Ads עם יעד פניות (טלפון/וואטסאפ).
