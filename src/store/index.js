import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      products: [],
      filter: "all",
    };
  },
  getters: {
    returnFilter(state) {
      return state.filter;
    },
    products(state) {
      switch (state.filter) {
        case "all":
          return state.products;
        case "min": {
          const storeClone = [...state.products];
          return storeClone.sort((a, b) => a.price - b.price);
        }
        case "max": {
          const storeClone = [...state.products];
          return storeClone.sort((a, b) => b.price - a.price);
        }
        case "name": {
          const storeClone = [...state.products];
          return storeClone.sort((a, b) => (a.name > b.name ? 1 : -1));
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
