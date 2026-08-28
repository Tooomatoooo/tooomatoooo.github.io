// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
const baseActions = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "paper-intangibles",
        title: "What Are Intangibles Worth? Production versus Market Power",
        description: "Job market paper",
        section: "Research",
        handler: () => {
          window.location.href = "/research/#intangibles";
        },
      },{id: "paper-subjective-risk-premia",
        title: "Institutional Investors' Subjective Risk Premia",
        description: "with Couts, Gonçalves, and Loudis",
        section: "Research",
        handler: () => {
          window.location.href = "/research/#subjective-risk-premia";
        },
      },{id: "paper-investment-based-costs-of-equity",
        title: "Investment-based Costs of Equity",
        description: "with Xue and Zhang",
        section: "Research",
        handler: () => {
          window.location.href = "/research/#investment-based-costs-of-equity";
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];const bonusActions = [{id: "bonus-bear",
        title: "🐻 Bear",
        description: "You found the bear.",
        section: "Bonus",
        terms: ["bear","bears",],
        handler: () => {window.location.href = "/bear/";},
      },{id: "bonus-cat",
        title: "🐈 Cat",
        description: "A wall of cat photos.",
        section: "Bonus",
        terms: ["cat","cats",],
        handler: () => {window.location.href = "/cat/";},
      },{id: "bonus-eight-oddities",
        title: "The Eight Oddities of Columbus",
        description: "八大怪 — the eight oddities of Columbus, illustrated.",
        section: "Bonus",
        terms: ["八大怪","eight oddities","oddities",],
        handler: () => {window.location.href = "/eight-oddities/";},
      },{id: "bonus-games",
        title: "🎲 Games",
        description: "Games. Takes you to Murdoku.",
        section: "Bonus",
        terms: ["games","game",],
        handler: () => {// Prefer a new tab, but fall back to navigating if a popup blocker
            // refuses it, so the result always goes somewhere.
            if (!window.open("https://murdoku.com/play/", "_blank")) {
              window.location.href = "https://murdoku.com/play/";
            }},
      },{id: "bonus-photography",
        title: "📷 Photography",
        description: "A wall of photographs.",
        section: "Bonus",
        terms: ["photography","photo","photos",],
        handler: () => {window.location.href = "/photography/";},
      },];

ninja.data = baseActions;

// A bonus page appears only once the query is one of its whole words, so
// partial typing ("c", "ca") never gives one away. Tracking the applied set by
// id keeps the reassignment from re-triggering this handler indefinitely.
let appliedBonusKey = "";

ninja.addEventListener("change", (event) => {
  const query = (event.detail.search || "").trim().toLowerCase();
  const matched = query
    ? bonusActions.filter((action) => action.terms.includes(query))
    : [];
  const key = matched.map((action) => action.id).join(",");

  if (key !== appliedBonusKey) {
    appliedBonusKey = key;
    ninja.data = matched.length ? baseActions.concat(matched) : baseActions;
  }
});
