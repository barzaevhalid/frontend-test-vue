import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      products: [],
      filter: "",
    };
  },
  getters: {
    returnFilter(state) {
      return state.filter;
    },
    products(state) {
      switch (state.filter) {
        case "":
          return state.products;
        case "min": {
          const filteredMin = state.products.sort((a, b) => a.price - b.price);
          return filteredMin;
        }
        case "max": {
          const filteredMax = state.products.sort((a, b) => b.price - a.price);
          return filteredMax;
        }
        case "name": {
          const filteredName = state.products.sort((a, b) =>
            a.name > b.name ? 1 : -1
          );
          return filteredName;
        }
      }
    },
  },
  mutations: {
    updateProducts(state, payload) {
      state.products = payload;
    },
    addProduct(state, payload) {
      state.products.push(payload.value);
      console.log(state);
    },
    removeProduct(state, payload) {
      state.products = state.products.filter((item) => item.id !== payload);
    },
    filter(state, payload) {
      state.filter = payload;
    },
    selected(state, payload) {
      state.filter = payload.value;
      console.log(state);
    },
  },
  actions: {},
  modules: {},
});
