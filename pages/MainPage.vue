<template>
  <div class="categories">
    <h1>Меню</h1>
    <div class="cat-list">
      <food-category
        v-for="category of categories"
        :key="category.cat_id"
        :title="category.category_name"
        :imgUrl="category.photo_url"
        :category="category"
      />     
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import FoodCategory from '@/components/FoodCategory.vue';

export default {
  name: 'IndexPage',

  components: {
    FoodCategory
  },
  
  data() {
    return {
      categories: []
    }
  },

  methods: {
    async getCategories() {
      try {
        const response = await axios.get(
          'https://vsem-edu-oblako.ru' +
          '/singlemerchant' +
          '/api/loadCategory?' +
          'json=true&merchant_keys=929990d3b27944af404a5eb3ee1ec4f6&lang=ru'
        );
        this.categories = response.data.details.data;
      } catch (error) {
        alert('Ошибка при загрузке категорий');
      }
    }
  },

  mounted() {
    this.getCategories();
  },
  
}
</script>

<style lang='scss'>
  .categories {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    height: 100vh;
    padding-top: 20px;
    background: #f6f6f6;
  }

  .cat-list {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    width: 1290px;
  }
</style>
