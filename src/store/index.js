import { createStore } from 'vuex'

export default createStore({
  state: {
    click_count: 0,
    score:0,
    lang:"en",
    txt:{
      fr:{
        title:"Etudiant en CMI informatique",
        description:"Etudiant en 3ème année à L'Université Savoie Mont Blanc, je suis à l'écoute, toujours curieux et créatif.",
        discoverBtn:"Découvrir",
        score:["Bravo !","Génial !","Incroyable !","Excellent !","Magnifique !","Fantastique !","Superbe !","Incroyable !","Chômage ?"],

      },
      en:{
        title:"Computer sciences student",
        description:"Student in 3rd year at the Université Savoie Mont Blanc, I'm a good listener, always curious and creative.",
        discoverBtn:"Discover",
        score:["Good job !","Great !","Amazing !","Excellent !","Wonderful !","Fantastic !","Superb !","Incredible !","Unemployed ?"],
      }
    },
    projects:[
      {
        id:7,
        photo:"devcompass.jpg",
        link:"https://panel.heargo.dev",
        fr:{
          title:"Dev Compass",
          date:"2023",
          description:"Projet personnel, un site qui contient un panel de ressources et d'outils pour les développeurs web.",
          labels:["VueJS","Appwrite","Outil","FullStack","Projet personnel"],
        },
        en:{
          title:"Dev Compass",
          date:"2023",
          description:"Personal project, a website that contains a panel of resources and tools for web developers.",
          labels:["VueJS","Appwrite","Tool","FullStack","Personal project"],
        }
      },
      {
        id:6,
        photo:"burstyourbubble.png",
        link:"https://burstyourbubble.heargo.dev",
        fr:{
          title:"Éclate ta bulle",
          date:"2022",
          description:"Projet personnel, un site pour consulter des articles hors de sa bulle de préférence et de convictions.",
          labels:["VueJS","Projet personnel","Design","Conception"],
        },
        en:{
          title:"Burst Your Bubble",
          date:"2022",
          description:"Personal project, a website to consult articles outside of your bubble of preference and convictions.",
          labels:["VueJS","Personnal project","Design","Conception"],
        }
      },
      {
        id:5,
        photo:"etyva.png",
        link:"https://docs.google.com/presentation/d/1tRIjlll_FDFjRgX97BM8dPnYHrTV2g2btfBeuGNzXuw/edit?usp=sharing",
        fr:{
          title:"ET'YVA",
          date:"2022",
          description:"Projet universitaire en groupe, Plateforme de covoiturage pour les étudiants du service des sports de l'USMB.",
          labels:["VueJS","Projet universitaire","Design","Front-end","Méthode agile"],
        },
        en:{
          title:"ET'YVA",
          date:"2022",
          description:"University group project, creation of a carpooling platform for students registered in the USMB sports department.",
          labels:["VueJS","School project","Design","Front-end","Agile method"],
        }
      },
      {
        id:4,
        photo:"palettes.jpg",
        link:"https://palettes.heargo.dev/",
        fr:{
          title:"Palettes previews",
          date:"2022",
          description:"Développement d'un outils sur navigateur permettant de visualiser des palettes de couleurs dans une page web fictive.",
          labels:["VueJS","Projet personnel","Design"],
        },
        en:{
          title:"Palettes previews",
          date:"2022",
          description:"Development of a tool to preview color palettes in a fake web page.",
          labels:["VueJS","Personal project","Design"],
        }
      },
      {
        id:3,
        photo:"jourune.jpg",
        link:"https://jourune.fr/",
        fr:{
          title:"Jourune",
          date:"2021",
          description:"Conception, développement et mise en production d'un site de poésie/blog pour Nathalie Kandro.",
          labels:["Conception","Production","FullStack"],
        },
        en:{
          title:"Jourune",
          date:"2021",
          description:"Design, development and production of a poetry/blog website for Nathalie Kandro.",
          labels:["Design","Production","FullStack"],
        }
      },
      {
        id:2,
        photo:"okydoky.jpg",
        link:"https://docs.google.com/presentation/d/1i40ji1CQChk3njpeW6vigG9gxsOq2lIkMgyx_OPcaps/edit?usp=sharing",
        fr:{
          title:"Okydoky",
          date:"2021",
          description:"Conception et au développement d'un site web de partage de fichiers autour de communautés.",
          labels:["Projet universitaire","Frontend","Licence 2","Conception"],
        },
        en:{
          title:"Okydoky",
          date:"2021",
          description:"Design and development of a file sharing website around communities.",
          labels:["School project","Frontend","2nd year","Conception"],
        }
      },
      {
        id:1,
        photo:"lostcolor.jpg",
        link:"https://github.com/Heargo/LostColor",
        fr:{
          title:"Lost Color",
          date:"2020-2021",
          description:"Conception et au développement d'un de jeux tir et d'exploration avec pygame.",
          labels:["Projet universitaire","Game Dev","Licence 2","Python"],
        },
        en:{
          title:"Lost Color",
          date:"2020-2021",
          description:"Design and development of a shooting and exploration game with pygame.",
          labels:["School project","Game Dev","2nd year","Python"],
        }
      },
      {
        id:0,
        photo:"visi.png",
        link:"https://www.lama.univ-savoie.fr/mediawiki/index.php/G%C3%A9n%C3%A9ration_fractale_de_terrains",
        fr:{
          title:"Generation fractale de terrain",
          date:"2020",
          description:"Développement d'une application python permetant de generer des terrains aléatoirement en 2d et 3D.",
          labels:["Projet universitaire","Licence 1","Python","Génération procédurale"],
        },
        en:{
          title:"Fractal terrain generation",
          date:"2020",
          description:"Development of a python application to generate random 2d and 3d terrains.",
          labels:["School project","1st year","Python","Procedural generation"],
        }
      }
    ],
    
  },
  mutations: {
    increment (state) {
      state.click_count++
    }
  },
  actions: {
  },
  modules: {
  }
})
