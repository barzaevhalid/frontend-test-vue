<template>
  <div class="container">
    <div class="head">
      <h2>Добавление товара</h2>
      <select class="select">
        <option class="selected">По умолчанию</option>
        <option class="selected">Минимальная цена</option>
        <option class="selected">Мксимальная цена</option>
        <option class="selected">По названию</option>
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
