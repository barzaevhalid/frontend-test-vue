<template>
  <div class="card">
    <div class="card-inner">
      <img
        class="img-card"
        src="./../assets/card.png"
        alt="card"
        @click="removeItem"
      />
      <img class="img" :src="imgLink" alt="Нет картинки" />
      <div class="desc-wrap">
        <div class="title">{{ name }}</div>
        <div class="description">
          {{ productStory }}
        </div>
        <div class="price">{{ price }}: руб.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentCard",
  props: {
    id: Number,
    name: String,
    imgLink: String,
    productStory: String,
    price: String,
  },
  methods: {
    removeItem() {
      this.$store.commit("removeProduct", this.id);
    },
  },
};
</script>

<style scoped>
.card {
  width: 330px;
  background: #fffefb;
  border-radius: 4px;
  color: #3f3f3f;
  cursor: pointer;
  position: relative;
}
.card:hover {
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
}
.img {
  height: 200px;
  width: 100%;
}
.img-card {
  position: absolute;
  display: none;
  right: -14px;
  top: -10px;
}
.card:hover .img-card {
  display: block;
}
.desc-wrap {
  padding: 15px 15px 25px;
}
.title {
  font-size: 24px;
  font-weight: 600;
}
.description {
  margin-top: 15px;
  font-size: 16px;
}
.price {
  margin-top: 30px;
  font-size: 24px;
}
</style>
