<template lang="html">
  <div>
      <Top></Top>
      <Music></Music>
      <Bottom></Bottom>
  </div>
</template>

<script type="text/ecmascript-6">
import Top from "../Public/top.vue"
import Bottom from "../Public/bottom.vue"
import Music from "./music.vue"
  export default {
      components:{
          Music,
          Top,
          Bottom
      }
  }
</script>

<style lang="scss">

</style>
