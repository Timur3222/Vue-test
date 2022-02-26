<template>
  <div class="category">
    <h1>{{this.$route.params.title}}</h1>
    <div class="food-list">
      <food-item
        v-for="item of foodItems"
        :key="item.item_id"
        :foodImgUrl="item.photo"
        :title="item.item_name"
        :description="item.item_description"
        :price="item.prices[0].price"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import FoodItem from '@/components/FoodItem.vue';

export default {
  components: {
    FoodItem
  },

  data() {
    return {
      foodItems: []
    }
  },
  methods: {
    async getFoodItems() {
      try {
        const response = await axios.get(
          'https://vsem-edu-oblako.ru' +
          '/singlemerchant' +
          '/api' +
          '/loadItemByCategory?' +
          `json=true&merchant_keys=929990d3b27944af404a5eb3ee1ec4f6&lang=ru&cat_id=${this.$route.params.id}`
      );
      this.foodItems = response.data.details.data;
      } catch (error) {
        alert('Ошибка загрузки списка товаров');
      }
    }
  },
  mounted() {
    this.getFoodItems();
  },
}
</script>

<style scoped lang="scss">
  .category {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 20px 0;
    min-height: 100vh;
    background: #f6f6f6;
  }

  .food-list {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    width: 1090px;
  }
</style>