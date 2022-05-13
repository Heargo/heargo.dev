import { createStore } from 'vuex'

export default createStore({
  state: {
    click_count: 0,
    txt:{
      fr:{
        description:"Etudiant informatique Licence 3",
        discoverBtn:"Découvrir",
      },
      en:{
        description:"Computer Science Student 3rd year",
        discoverBtn:"Discover",
      }
    },
    projects:[
      {
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
        photo:"okydoky.jpg",
        link:"https://sb.sinux.sh/okydoky/",
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
        photo:"undercover.png",
        link:"https://sb.sinux.sh/undercover/",
        fr:{
          title:"Undercover",
          date:"2020",
          description:"Adaptation du jeu multijoueur undercover sur navigateur.",
          labels:["Projet universitaire","Fullstack","Licence 2","Web"],
        },
        en:{
          title:"Undercover",
          date:"2020",
          description:"Adaptation of the multiplayer undercover game on browser.",
          labels:["School project","Fullstack","2nd year","Web"],
        }
      },
      {
        photo:"visi.png",
        link:"https://www.lama.univ-savoie.fr/mediawiki/index.php/G%C3%A9n%C3%A9ration_fractale_de_terrains",
        fr:{
          title:"Generation fractale de terrain",
          date:"2020",
          description:"Développement d'une application python permetant de generer des terrains aléatoirement en 2d et 3D.",
          labels:["Projet universitaire","Fullstack","Licence 2","Web"],
        },
        en:{
          title:"Fragile terrain generation",
          date:"2020",
          description:"Development of a python application to generate random 2d and 3d terrains.",
          labels:["School project","Fullstack","2nd year","Web"],
        }
      }
    ],
    lang:"en"
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
