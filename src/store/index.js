import { createStore } from 'vuex'

const today = new Date();

export default createStore({
  state: {
    age: '',
    today: new Date(today.getFullYear(), today.getMonth(), today.getDate()), 
    tommorow: new Date(today.getFullYear(), today.getMonth(), today.getDate()+1)
  },
  mutations: {
    ADD_AGE(state, date) {
      let birth = new Date(date.year, date.month, date.day);
      let birthnow = new Date(state.today.getFullYear(), date.month, date.day);
      let age = state.today.getFullYear() - birth.getFullYear();
      if (today < birthnow) {
        age = age-1;
      }
      state.age = age;
    }
  },
  actions: {
  },
  modules: {
  }
})
