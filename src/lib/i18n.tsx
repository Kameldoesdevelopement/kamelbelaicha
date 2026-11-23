import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type Lang = "en" | "fr";

const en = {
  "nav.home": "Home", "nav.projects": "Projects", "nav.about": "About", "nav.contact": "Contact",
  "nav.switch": "Passer en français",
  "footer.archived": "[ archived ]",
  "hero.role": "web developer / digital archaeologist", "hero.aboutLink": "→ about", "hero.aboutAria": "About Kamel Belaicha",
  "hero.tagline": "building things that remember", "hero.scroll": "scroll ↓", "hero.archived": "archived · 2026",
  "home.featured": "featured work", "home.bbAlt": "Library shelves filled with old books", "home.bbCat": "001 — e-commerce",
  "home.bbDesc": "An online bookstore experience — curated reads and a browsing flow like wandering real aisles.",
  "home.viewProject": "→ view project", "home.botanicalAlt": "Archived botanical specimens", "home.more": "[ more projects ]",
  "home.enterArchive": "enter the project archive →", "home.about": "about", "home.computerAlt": "A vintage computer and retro technology",
  "home.aboutText1": "I'm a web developer who builds digital experiences with care and intention. Every project is an archive — a snapshot of craft, code, and curiosity. I believe the web should feel like a ",
  "home.place": "place", "home.aboutText2": ", not just a platform. Something worth ", "home.haunting": "haunting", "home.readMore": "read more →",
  "projects.label": "index / projects", "projects.title": "Projects",
  "projects.intro": "A collection of things I've built. Each one archived here as a record of process and craft.",
  "projects.expanding": "[ archive expanding ]", "projects.expandingText": "More projects will be catalogued here as they emerge from the workshop.",
  "projects.live": "live", "projects.visit": "visit", "projects.visitAria": "Visit {title} project",
  "projects.bb.cat": "e-commerce", "projects.bb.desc": "An online bookstore experience — curated reads, warm design, and a browsing flow that feels like wandering the aisles of a real shop.",
  "projects.ummto.cat": "student platform", "projects.ummto.desc": "A sharing platform created for the UMMTO community, bringing useful student resources together in one accessible place.",
  "projects.tiny.cat": "educational game", "projects.tiny.desc": "A playful learning experience for toddlers, designed around simple interactions, discovery, and age-appropriate activities.",
  "preview.browse": "Browse the archive", "preview.notes": "Semester notes", "preview.shared": "Shared resources", "preview.learn": "tap, learn, discover",
  "about.label": "index / about", "about.title": "About", "about.portraitAlt": "Portrait of Kamel Belaicha",
  "about.name": "name", "about.role": "role", "about.roleValue": "Full-Stack Web Developer", "about.focus": "focus",
  "about.focus1": "Full-Stack Development", "about.focus2": "Responsive Interfaces", "about.focus3": "APIs & Databases", "about.tools": "tools",
  "about.p1": "I'm Kamel, a passionate full-stack web developer. I first became interested in development because I wanted to understand how the websites I used every day were built.",
  "about.p2": "I earned my bachelor's degree from Université Mouloud Mammeri de Tizi-Ouzou, and continued learning through technical books, online courses, and hands-on projects. That mix of formal study and independent practice has shaped the way I solve problems.",
  "about.p3": "Today, I enjoy working across the full stack, from thoughtful interfaces to the systems behind them. I care about writing clear code, learning from each project, and creating digital experiences that are useful, reliable, and enjoyable to use.",
  "about.present": "present", "about.presentText": "Building practical, thoughtful web applications",
  "about.education": "education", "about.educationText": "Bachelor's degree · Université Mouloud Mammeri de Tizi-Ouzou",
  "contact.label": "index / contact", "contact.title": "Contact",
  "contact.intro": "I'm open to professional opportunities, project collaborations, and conversations about web development. If you would like to discuss working together, please feel free to get in touch.",
  "contact.email": "email", "contact.phone": "phone", "contact.availability": "availability", "contact.inbox": "inbox:", "contact.open": "open",
  "contact.response": "response time:", "contact.timezone": "timezone:",
  "notfound.text": "Oops! Page not found", "notfound.back": "Return to Home",
};

type Key = keyof typeof en;

const fr: Record<Key, string> = {
  "nav.home": "Accueil", "nav.projects": "Projets", "nav.about": "À propos", "nav.contact": "Contact",
  "nav.switch": "Switch to English",
  "footer.archived": "[ archivé ]",
  "hero.role": "développeur web / archéologue numérique", "hero.aboutLink": "→ à propos", "hero.aboutAria": "À propos de Kamel Belaicha",
  "hero.tagline": "je construis des choses qui se souviennent", "hero.scroll": "défiler ↓", "hero.archived": "archivé · 2026",
  "home.featured": "projet à la une", "home.bbAlt": "Étagères de bibliothèque remplies de vieux livres", "home.bbCat": "001 — e-commerce",
  "home.bbDesc": "Une librairie en ligne — des lectures choisies avec soin et une navigation qui rappelle une flânerie entre de vrais rayons.",
  "home.viewProject": "→ voir le projet", "home.botanicalAlt": "Spécimens botaniques archivés", "home.more": "[ plus de projets ]",
  "home.enterArchive": "entrer dans l'archive des projets →", "home.about": "à propos", "home.computerAlt": "Un ordinateur vintage et du matériel rétro",
  "home.aboutText1": "Je suis un développeur web qui crée des expériences numériques avec soin et intention. Chaque projet est une archive — un instantané de savoir-faire, de code et de curiosité. Je crois que le web devrait ressembler à un ",
  "home.place": "lieu", "home.aboutText2": ", pas seulement à une plateforme. Un endroit qui mérite d'être ", "home.haunting": "hanté", "home.readMore": "en savoir plus →",
  "projects.label": "index / projets", "projects.title": "Projets",
  "projects.intro": "Une collection de ce que j'ai construit. Chaque projet est archivé ici comme une trace du processus et du savoir-faire.",
  "projects.expanding": "[ archive en expansion ]", "projects.expandingText": "D'autres projets seront catalogués ici à mesure qu'ils sortiront de l'atelier.",
  "projects.live": "en ligne", "projects.visit": "visiter", "projects.visitAria": "Visiter le projet {title}",
  "projects.bb.cat": "e-commerce", "projects.bb.desc": "Une librairie en ligne — des lectures choisies, un design chaleureux et une navigation qui donne l'impression de flâner dans les rayons d'une vraie boutique.",
  "projects.ummto.cat": "plateforme étudiante", "projects.ummto.desc": "Une plateforme de partage créée pour la communauté de l'UMMTO, qui rassemble des ressources utiles aux étudiants en un seul endroit accessible.",
  "projects.tiny.cat": "jeu éducatif", "projects.tiny.desc": "Une expérience d'apprentissage ludique pour les tout-petits, pensée autour d'interactions simples, de découvertes et d'activités adaptées à leur âge.",
  "preview.browse": "Parcourir l'archive", "preview.notes": "Notes du semestre", "preview.shared": "Ressources partagées", "preview.learn": "touche, apprends, découvre",
  "about.label": "index / à propos", "about.title": "À propos", "about.portraitAlt": "Portrait de Kamel Belaicha",
  "about.name": "nom", "about.role": "rôle", "about.roleValue": "Développeur Web Full-Stack", "about.focus": "spécialités",
  "about.focus1": "Développement Full-Stack", "about.focus2": "Interfaces adaptatives", "about.focus3": "API & bases de données", "about.tools": "outils",
  "about.p1": "Je suis Kamel, un développeur web full-stack passionné. Je me suis intéressé au développement parce que je voulais comprendre comment étaient construits les sites que j'utilisais chaque jour.",
  "about.p2": "J'ai obtenu ma licence à l'Université Mouloud Mammeri de Tizi-Ouzou, puis j'ai continué à apprendre grâce à des livres techniques, des cours en ligne et des projets concrets. Ce mélange d'études et de pratique autonome a façonné ma manière de résoudre les problèmes.",
  "about.p3": "Aujourd'hui, j'aime travailler sur l'ensemble de la chaîne, des interfaces soignées jusqu'aux systèmes qui les font fonctionner. J'attache de l'importance à un code clair, à apprendre de chaque projet et à créer des expériences numériques utiles, fiables et agréables à utiliser.",
  "about.present": "aujourd'hui", "about.presentText": "Je construis des applications web pratiques et réfléchies",
  "about.education": "formation", "about.educationText": "Licence · Université Mouloud Mammeri de Tizi-Ouzou",
  "contact.label": "index / contact", "contact.title": "Contact",
  "contact.intro": "Je suis ouvert aux opportunités professionnelles, aux collaborations sur des projets et aux échanges autour du développement web. Si vous souhaitez travailler ensemble, n'hésitez pas à me contacter.",
  "contact.email": "e-mail", "contact.phone": "téléphone", "contact.availability": "disponibilité", "contact.inbox": "boîte de réception :", "contact.open": "ouverte",
  "contact.response": "délai de réponse :", "contact.timezone": "fuseau horaire :",
  "notfound.text": "Oups ! Page introuvable", "notfound.back": "Retour à l'accueil",
};

const dictionaries = { en, fr };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: Key, vars?: Record<string, string>) => string };
const LangContext = createContext<Ctx | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    return saved === "fr" || saved === "en" ? saved : "en";
  });
  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);
  const t = (k: Key, vars?: Record<string, string>) => {
    let s = dictionaries[lang][k];
    if (vars) for (const [n, v] of Object.entries(vars)) s = s.replace(`{${n}}`, v);
    return s;
  };
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
};
