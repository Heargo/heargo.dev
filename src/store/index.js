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
        fr:{
          title:"Project 1",
          date:"2019",
          description:"blabla",
          labels:["VueJS","Projet personnel"],
        },
        en:{
          title:"Project 1",
          date:"2019",
          description:"blabla",
          labels:["VueJS","Personal project"],
        }
      },
      {
        photo:"palettes.jpg",
        fr:{
          title:"Project 1",
          date:"2019",
          description:"blabla",
          labels:["VueJS","Projet personnel"],
        },
        en:{
          title:"Project 1",
          date:"2019",
          description:"blabla",
          labels:["VueJS","Personal project"],
        }
      }
    ],
    lang:"fr"
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
