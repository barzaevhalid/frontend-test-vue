<template>
  <div class="card">
    <div class="card-inner">
      <img class="img-card" src="./../assets/card.png" alt="card" />
      <img class="img" src="./../assets/image.png" alt="img" />
      <div class="desc-wrap">
        <div class="title">Наименование товара</div>
        <div class="description">
          Довольно-таки интересное описание товара в несколько строк.
          Довольно-таки интересное описание товара в несколько строк
        </div>
        <div class="price">10 000 руб.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentCard",
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
