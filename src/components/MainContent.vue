<template>
  <div class="content">
    <content-card></content-card>
    <content-card></content-card>
    <content-card></content-card>
    <content-card></content-card>
    <content-card></content-card>
    <content-card></content-card>
  </div>
</template>

<script>
import ContentCard from "@/components/ContentCard";

export default {
  components: {
    ContentCard,
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
