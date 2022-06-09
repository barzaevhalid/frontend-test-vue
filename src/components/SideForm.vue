<template>
  <div class="side-form-inner">
    <form class="side-form" @submit="onSubmit">
      <app-input
        type="text"
        placeholder="Наименование товара"
        name="name"
        label="Наименование товара"
        v-model="productName"
      ></app-input>
      <div class="wrap">
        <label class="desc">Описание товара</label>
        <textarea
          class="data"
          placeholder="Введите описание товара"
          rows="5"
          name="desc"
          v-model="productStory"
        ></textarea>
      </div>
      <app-input
        type="text"
        placeholder="Введите ссылку"
        name="image"
        label="Ссылка на изображение товара"
        v-model="linkToProductImage"
      />
      <app-input
        type="number"
        placeholder="Введите цену товара"
        name="price"
        label="Цена товара"
        v-model="productPrice"
      />
      <button class="form-btn" type="submit">Добавить товар</button>
    </form>
  </div>
</template>

<script>
import AppInput from "@/components/AppInput";
export default {
  name: "SideForm",
  components: {
    AppInput,
  },
  data() {
    return {
      productName: "",
      productStory: "",
      linkToProductImage: "",
      productPrice: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (this.formIsValid()) {
        console.log(this.productName);
        console.log(this.productStory);
        console.log(this.linkToProductImage);
        console.log(this.productPrice);
      }
    },
    formIsValid() {
      let isValid = true;
      if (this.productName.length === 0) {
        isValid = false;
      }
      if (this.linkToProductImage.length === 0) {
        isValid = false;
      }
      if (this.productPrice.length === 0) {
        isValid = false;
      }
      return isValid;
    },
  },
};
</script>

<style scoped>
.side-form {
  width: 330px;
  background-color: #fffefb;
  padding: 25px;
  margin-right: 15px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}
.desc {
  font-weight: 400;
  font-size: 10px;
  color: #49485e;
  margin-bottom: 5px;
}
.data {
  padding: 10px 0 10px 15px;
  font-size: 12px;
  width: 100%;
}
.wrap {
  margin-top: 15px;
}
.form-btn {
  display: block;
  width: 100%;
  margin-top: 25px;
  background: #7bae73;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  font-family: "Inter";
  padding: 10px 0;
  border: none;
  cursor: pointer;
}
.form-btn:hover {
  cursor: pointer;
  opacity: 0.8;
}

.form-btn:active {
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}
</style>

font-family: "Inter", sans-serif;
