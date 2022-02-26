<template>
  <div class="food-item">
    <img :src="foodImgUrl" :alt="foodImgUrl" class="food-img">
    <strong class="title">{{ title }}</strong>
    <span class="description">{{ description }}</span>
    <div class="bottom-block">
      <strong class="price">{{ price }} ₽</strong>
      <button type="button">Выбрать</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    foodImgUrl: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: false    
    },

    price: {
      type: String,
      required: true      
    }
  }
}
</script>

<style scoped lang='scss'>
  .food-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 250px;
    height: 380px;
    padding: 15px;
    border: 1px solid #bebebe;
    border-radius: 30px;
    background: white;
    button {
      width: 100px;
      &:hover {
        cursor: pointer;
      }
    }
    &:hover {
      cursor: pointer;
    }    
  }

  .food-img {
    width: 200px;
    height: fit-content;
  }

  .description {
    font-size: 12px;
  }

  .bottom-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-bottom: 0;
    margin-top: auto;
  }
</style>