<template lang="html">
  <div>
      <Top></Top>
      <Book></Book>
      <Bottom></Bottom>
  </div>
</template>

<script type="text/ecmascript-6">
import Top from "../Public/top.vue"
import Bottom from "../Public/bottom.vue"
import Book from "./book.vue"
  export default {
      components:{
          Book,
          Top,
          Bottom
      }
  }
</script>

<style lang="scss">

</style>
