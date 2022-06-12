<template>
  <div class="content">
    <content-card
      v-for="product in products"
      :id="product.id"
      :name="product.name"
      :imgLink="product.imgLink"
      :productStory="product.productStory"
      :price="product.price"
      :key="product.id"
    ></content-card>
  </div>
</template>

<script>
import ContentCard from "@/components/ContentCard";

export default {
  components: {
    ContentCard,
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  updated() {
    localStorage.setItem("store", JSON.stringify(this.$store.getters.products));
  },
  created() {
    const p = JSON.parse(localStorage.getItem("store"));
    if (p) {
      this.$store.commit("updateProducts", p);
    }
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
</style>
