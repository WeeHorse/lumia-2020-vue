<template>
  <div class="product clearfix">
    <img :src="product.image" />
    <div class="content">
      <h2>{{product.name}}</h2>
      <p>{{product.description}}</p>
      <button @click="addToCart(product)">Köp för {{product.cost}} kr</button>
    </div>
  </div>
</template>

<script>
export default {
  // "props" är egna HTML-attribut som vi kan låta en annan komponent skicka in data med.
  props: ['product', 'addToCart']
}
</script>