<template>
<NuxtLink :to="{name: 'catalog',
    params: {
      code: category.category_code,
      id: category.cat_id,
      title: category.category_name
    }
  }"
>
  <div class="category">
    <img :src="imgUrl" :alt="title" class="cat-img">
    <strong class="title">{{ title }}</strong>
  </div>
</NuxtLink>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    },
    category: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang='scss'>
  .category {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 300px;
    height: 300px;
    padding: 10px;
    border: 1px solid #bebebe;
    border-radius: 30px;
    font-size: 20px;
    background: white;
    &:hover {
      cursor: pointer;
    }
  }

  .cat-img {
    height: 200px;
    width: fit-content;
  }

  a {
    text-decoration: none;
    color: black;
    :active {
      color: black;
    }
  }
</style>