<template>
  <div>
    <div @click="goBlock('/radar/cover/blockOne')" style="height: 300px; width: 300px; background: antiquewhite;margin: 20px;">模块1</div>
    <div @click="goBlock('/radar/cover2/blockTwo')" style="height: 300px; width: 300px; background: antiquewhite;margin: 20px;">模块2</div>
  </div>
</template>

<script>
import {defineComponent, reactive} from 'vue'
import { useRouter } from "vue-router";


export default defineComponent({
  name: "index",
  setup() {
    const router = useRouter();
    let goBlock = (path)=>{
      router.push(path)
    }

    return {
      goBlock
    }
  }
})
</script>

<style scoped>

</style>
