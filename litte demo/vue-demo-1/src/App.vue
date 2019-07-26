<template>
  <div class="red">
    <div v-if="a">x</div>
    <div v-else v-on:click="a=true">空</div>
  </div>
</template>

<script>
export default {
  data(){
    return {a:false};
  }
}
</script>

<style>
.red{
  color: red;
}
</style>
