<template lang="html">
  <div>
      <Top></Top>
      <Test></Test>
      <Bottom></Bottom>
  </div>
</template>

<script type="text/ecmascript-6">
import Top from "../Public/top.vue"
import Bottom from "../Public/bottom.vue"
import Test from "./test.vue"
  export default {
      components:{
          Test,
          Top,
          Bottom
      }
  }
</script>

<style lang="scss">

</style>
