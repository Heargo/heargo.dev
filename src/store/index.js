import { createStore } from "vuex";

export default createStore({
  state: {
    click_count: 0,
    score: 0,
    lang: "en",
    txt: {
      fr: {
        title: "Etudiant Master 2, CMI informatique",
        description:
          "Etudiant en 2ème année de Master à L'Université Savoie Mont Blanc, je suis à l'écoute, toujours curieux et créatif.",
        discoverBtn: "Découvrir",
        score: [
          "Bravo !",
          "Génial !",
          "Incroyable !",
          "Excellent !",
          "Magnifique !",
          "Fantastique !",
          "Superbe !",
          "Incroyable !",
          "Chômage ?",
        ],
        sendMessage: "Envoyer",
        contactMe: "Contactez-moi",
        deadLink: {
          title: "Où est passé le projet ?",
          exit: "Retourner explorer",
          description:
            "Le projet n'est plus disponible, soit parce que la ou les personne.s concernée.s l'ont rendu privé, soit parce que la plateforme hébergeant le projet n'est plus accessible.",
          contactInfo:
            "Si vous êtes intéressé par le projet, n'hésitez pas à me contacter !",
        },
      },
      en: {
        title: "Computer sciences student",
        description:
          "Student in 2nd year of Master at the Université Savoie Mont Blanc, I'm a good listener, always curious and creative.",
        discoverBtn: "Discover",
        score: [
          "Good job !",
          "Great !",
          "Amazing !",
          "Excellent !",
          "Wonderful !",
          "Fantastic !",
          "Superb !",
          "Incredible !",
          "Unemployed ?",
        ],
        sendMessage: "Send",
        contactMe: "Contact me",
        deadLink: {
          title: "Where's the project ?",
          exit: "Go back to explore",
          description:
            "The project is no longer available, either because the individual(s) involved have made it private, or because the platform hosting the project is no longer accessible.",
          contactInfo:
            "If you are interested in the project, don't hesitate to contact me !",
        },
      },
    },
    projects: [
      {
        id: 9,
        photo: "starter-kit.png",
        link: "https://github.com/starter-kits-usmb",
        deadLink: false,
        fr: {
          title: "Starter kit",
          date: "2023",
          description:
            "Projet open-source, Un ensemble de starter-kit pour bien démarrer les projets !",
          labels: ["Angular", "Vue 3", "Nest", "Design", "Open-source"],
        },
        en: {
          title: "Starter kit",
          date: "2023",
          description:
            "Open-source project, A set of starter-kits to start projects off right!",
          labels: ["Angular", "Vue 3", "Nest", "Design", "Open-source"],
        },
      },
      {
        id: 8,
        photo: "rpgmanager.png",
        link: "https://rpg.heargo.dev",
        deadLink: false,
        fr: {
          title: "RPG Manager",
          date: "2023",
          description:
            "Projet personnel, une plateform web pour assiter les MJ et les joueurs lors de vos parties de JDR.",
          labels: [
            "Angular",
            "Appwrite",
            "FullStack",
            "Design",
            "Projet personnel",
          ],
        },
        en: {
          title: "RPG Manager",
          date: "2023",
          description:
            "Personal project, a website that will help GM and players during your RP sessions.",
          labels: [
            "Angular",
            "Appwrite",
            "FullStack",
            "Design",
            "Personal project",
          ],
        },
      },
      {
        id: 7,
        photo: "devcompass.jpg",
        link: "https://panel.heargo.dev",
        deadLink: false,
        fr: {
          title: "Dev Compass",
          date: "2023",
          description:
            "Projet personnel, un site qui contient un panel de ressources et d'outils pour les développeurs web.",
          labels: [
            "VueJS",
            "Appwrite",
            "Outil",
            "FullStack",
            "Projet personnel",
          ],
        },
        en: {
          title: "Dev Compass",
          date: "2023",
          description:
            "Personal project, a website that contains a panel of resources and tools for web developers.",
          labels: [
            "VueJS",
            "Appwrite",
            "Tool",
            "FullStack",
            "Personal project",
          ],
        },
      },
      {
        id: 6,
        photo: "burstyourbubble.png",
        link: "https://burstyourbubble.heargo.dev",
        deadLink: false,
        fr: {
          title: "Éclate ta bulle",
          date: "2022",
          description:
            "Projet personnel, un site pour consulter des articles hors de sa bulle de préférence et de convictions.",
          labels: ["VueJS", "Projet personnel", "Design", "Conception"],
        },
        en: {
          title: "Burst Your Bubble",
          date: "2022",
          description:
            "Personal project, a website to consult articles outside of your bubble of preference and convictions.",
          labels: ["VueJS", "Personnal project", "Design", "Conception"],
        },
      },
      {
        id: 5,
        photo: "etyva.png",
        link: "https://docs.google.com/presentation/d/1tRIjlll_FDFjRgX97BM8dPnYHrTV2g2btfBeuGNzXuw/edit?usp=sharing",
        deadLink: true,
        fr: {
          title: "ET'YVA",
          date: "2022",
          description:
            "Projet universitaire en groupe, Plateforme de covoiturage pour les étudiants du service des sports de l'USMB.",
          labels: [
            "VueJS",
            "Projet universitaire",
            "Design",
            "Front-end",
            "Méthode agile",
          ],
        },
        en: {
          title: "ET'YVA",
          date: "2022",
          description:
            "University group project, creation of a carpooling platform for students registered in the USMB sports department.",
          labels: [
            "VueJS",
            "School project",
            "Design",
            "Front-end",
            "Agile method",
          ],
        },
      },
      {
        id: 4,
        photo: "palettes.jpg",
        link: "https://palettes.heargo.dev/",
        deadLink: false,
        fr: {
          title: "Palettes previews",
          date: "2022",
          description:
            "Développement d'un outils sur navigateur permettant de visualiser des palettes de couleurs dans une page web fictive.",
          labels: ["VueJS", "Projet personnel", "Design"],
        },
        en: {
          title: "Palettes previews",
          date: "2022",
          description:
            "Development of a tool to preview color palettes in a fake web page.",
          labels: ["VueJS", "Personal project", "Design"],
        },
      },
      {
        id: 3,
        photo: "jourune.jpg",
        link: "https://jourune.fr/",
        deadLink: true,
        fr: {
          title: "Jourune",
          date: "2021",
          description:
            "Conception, développement et mise en production d'un site de poésie/blog pour Nathalie Kandro.",
          labels: ["Conception", "Production", "FullStack", "PHP"],
        },
        en: {
          title: "Jourune",
          date: "2021",
          description:
            "Design, development and production of a poetry/blog website for Nathalie Kandro.",
          labels: ["Design", "Production", "FullStack", "PHP"],
        },
      },
      {
        id: 2,
        photo: "okydoky.jpg",
        link: "https://docs.google.com/presentation/d/1i40ji1CQChk3njpeW6vigG9gxsOq2lIkMgyx_OPcaps/edit?usp=sharing",
        deadLink: true,
        fr: {
          title: "Okydoky",
          date: "2021",
          description:
            "Conception et au développement d'un site web de partage de fichiers autour de communautés.",
          labels: [
            "Projet universitaire",
            "Frontend",
            "Licence 2",
            "Conception",
            "PHP",
          ],
        },
        en: {
          title: "Okydoky",
          date: "2021",
          description:
            "Design and development of a file sharing website around communities.",
          labels: [
            "School project",
            "Frontend",
            "2nd year",
            "Conception",
            "PHP",
          ],
        },
      },
      {
        id: 1,
        photo: "lostcolor.jpg",
        link: "https://github.com/Heargo/LostColor",
        deadLink: false,
        fr: {
          title: "Lost Color",
          date: "2020-2021",
          description:
            "Conception et au développement d'un de jeux tir et d'exploration avec pygame.",
          labels: ["Projet universitaire", "Game Dev", "Licence 2", "Python"],
        },
        en: {
          title: "Lost Color",
          date: "2020-2021",
          description:
            "Design and development of a shooting and exploration game with pygame.",
          labels: ["School project", "Game Dev", "2nd year", "Python"],
        },
      },
      {
        id: 0,
        photo: "visi.png",
        link: "https://github.com/Heargo/VISI201_G-n-ration_terrains",
        deadLink: false,
        fr: {
          title: "Generation fractale de terrain",
          date: "2020",
          description:
            "Développement d'une application python permetant de generer des terrains aléatoirement en 2d et 3D.",
          labels: [
            "Projet universitaire",
            "Licence 1",
            "Python",
            "Génération procédurale",
          ],
        },
        en: {
          title: "Fractal terrain generation",
          date: "2020",
          description:
            "Development of a python application to generate random 2d and 3d terrains.",
          labels: [
            "School project",
            "1st year",
            "Python",
            "Procedural generation",
          ],
        },
      },
    ],
  },
  mutations: {
    increment(state) {
      state.click_count++;
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    scrollToId({ commit }, id) {
      const el = document.getElementById(id);
      console.log("scroll to", id, el);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
  },
  modules: {},
});
