// data.js - כל התוכן של האתר במקום אחד.
// עדכון טקסטים, פרטי קשר, תמונות וסרטונים נעשה כאן בלבד - בלי לגעת ב-script.js.

window.siteData = {
  business: {
    name: "אלעד שמחי - עבודות ביוב, עפר ואינסטלציה",
    description:
      "פתיחת סתימות, החלפת קווי ביוב, עבודות עפר ואינסטלציה בפתח תקווה ומרכז הארץ. שירות לוועדי בתים, עסקים ולקוחות פרטיים.",
    areaServed: ["פתח תקווה", "מרכז הארץ"],
    // כתובת האתר לאחר העלאה לאינטרנט (GitHub Pages או דומיין), למשל: "https://example.github.io/site/"
    // משאירים ריק עד שיש כתובת.
    siteUrl: "",
  },

  contact: {
    phoneDisplay: "050-886-1398",
    phoneE164: "+972508861398",
    whatsappE164: "972508861398",
    whatsappText: "היי אלעד, ראיתי את האתר ואשמח לקבל הצעת מחיר.",
  },

  galleries: {
    equipment: [
      {
        title: "מיני מחפר ובובקט",
        description: "עבודות חפירה מדויקות בשטח בנוי.",
        image: "assets/images/equipment/equipment-01.jpg",
      },
      {
        title: "ציוד שטיפה וניקוי קווים",
        description: "ביצועים גבוהים לטיפול מהיר בקווי ניקוז.",
        image: "assets/images/equipment/equipment-02.jpg",
      },
      {
        title: "כלי חיתוך וקידוח",
        description: "ציוד מקצועי לעבודה נקייה ומדויקת.",
        image: "assets/images/equipment/equipment-03.jpg",
      },
           {
        title: "צילום תת קרקעי לצינורות מתכת וביוב",
        description: "מצלמות מתקדמות לאיתור בעיות בצנרת.",
        image: "assets/images/equipment/equipment-04.jpg",
      },
      {
        title: "סלילת כבישים ושיקום שטח",
        description: "ציוד כבד לביצוע עבודות עפר ושיקום שטח.",
        image: "assets/images/equipment/equipment-05.jpg",
      },
    ],

    clients: [
      {
        title: "לקוח ארגוני #1",
        description: "פרויקט תחזוקת תשתיות שוטפת.",
        image: "assets/images/clients/client-01.jpg",
      },
      {
        title: "לקוח ארגוני #2",
        description: "שיתוף פעולה ארוך טווח.",
        image: "assets/images/clients/client-02.jpg",
      },
      {
        title: "לקוח ארגוני #3",
        description: "עבודה לפי לו\"ז צפוף וללא פשרות.",
        image: "assets/images/clients/client-03.jpg",
      },
    ],

    projects: [
      {
        title: "פרויקט ועד בית - ניקוז",
        description: "שדרוג תשתית ניקוז בבניין מגורים.",
        image: "assets/images/projects-house-committees/project-01.jpg",
      },
      {
        title: "פרויקט ועד בית - החלפת קו",
        description: "החלפת קו והחזרת שטח לקדמותו.",
        image: "assets/images/projects-house-committees/project-02.jpg",
      },
      {
        title: "סרטוני פרויקטים",
        description: "רוטשילד 37 החלפת קו ביוב ושיקום שטח.",
        video: "assets/videos/projects-house-committees/Rotchiled37.mp4",
        badge: "וידאו",
      },
    ],

    team: [
      {
        title: "אלעד שמחי",
        description: "ניהול פרויקטים וביצוע שטח",
        image: "assets/images/team/team-01.jpg",
      },
      {
        title: "צוות שטח",
        description: "צוות ביצוע עם ניסיון בפרויקטים מורכבים.",
        image: "assets/images/team/team-02.jpg",
      },
      {
        title: "אחראי בטיחות",
        description: "בקרה בשטח ושמירה על עבודה בטוחה.",
        image: "assets/images/team/team-03.jpg",
      },
    ],
  },
};
