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
        fr:{
          title:"Project 1",
          date:"2019",
          description:"blabla",
        },
        en:{
          title:"Project 1",
          date:"2019",
          description:"blabla",
        }
      },
      {
        fr:{
          title:"Project 1",
          date:"2019",
          description:"blabla",
        },
        en:{
          title:"Project 1",
          date:"2019",
          description:"blabla",
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
