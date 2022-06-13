<template>
  <div class="container">
    <div class="head">
      <h2>Добавление товара</h2>
      <select class="select" v-model="select" @change="addSelectLocalStorage">
        <option class="selected" value="all">По умолчанию</option>
        <option class="selected" value="min">Минимальная цена</option>
        <option class="selected" value="max">Максимальная цена</option>
        <option class="selected" value="name">По названию</option>
      </select>
    </div>

    <div class="app-inner">
      <side-form></side-form>
      <main-content></main-content>
    </div>
  </div>
</template>

<script>
import SideForm from "@/components/SideForm";
import MainContent from "@/components/MainContent";
export default {
  name: "App",
  components: {
    SideForm,
    MainContent,
  },
  data() {
    return {
      select: this.$store.getters.returnFilter,
    };
  },
  methods: {
    addSelectLocalStorage() {
      this.$store.commit({
        type: "selected",
        value: this.select,
      });
      localStorage.setItem("select", JSON.stringify(this.select));
    },
  },
  mounted() {
    const a = JSON.parse(localStorage.getItem("select"));
    if (a) {
      this.select = a;
    }
  },
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
}
*,
*::after,
*::before {
  box-sizing: inherit;
}

body {
  margin: 0;
  background-color: rgb(250, 249, 247);
  font-family: "Source Sans Pro", sans-serif;
}

.container {
  width: 1440px;
  padding: 0 30px;
}

.app-inner {
  display: flex;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-right: 15px;
}
.select {
  display: inline-block;
  background: #fffefb;
  text-align: center;
  appearance: none;
  background: url("./assets/arrow-down.png") no-repeat right;
  background-position-x: calc(100% - 14px);
  background-position-y: calc(100% - 14px);

  padding: 10px 25px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 1px solid rgba(180, 180, 180, 1);
  color: rgba(180, 180, 180, 1);
}
</style>
