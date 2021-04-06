<template>
  <a-layout-header class="header">
    <div class = "flex">
      <div class="logo"></div>
      <div>
        <a-button type="text" @click="toggleMenu">{{collapseFlag?'折叠':'展开'}}</a-button>
      </div>
      <a-menu
          theme="dark"
          mode="horizontal"
          v-model:selectedKeys="selectedKeys"
          :style="{ lineHeight: '64px' }"
      >
        <a-menu-item v-for="item in navList" :key="item.id+''">{{ item.name }}</a-menu-item>
      </a-menu>
    </div>
    <div class="user-info">
      用户名
    </div>
  </a-layout-header>
</template>
<script>
import {
  defineComponent,
  reactive,
  toRefs,
  watch,
  unref,
  computed, onMounted
} from 'vue'
import { useRouter} from "vue-router";
import {useStore} from 'vuex'
import {nav} from '@/mock/coverMenu'

export default defineComponent({
  name: 'GlobalHeader',
  setup() {
    const router = useRouter();
    const store = useStore()
    const {state:{app}} = store
    let data = reactive({
      navList: [],  // 头部导航
      selectedKeys: ['1'],  // 头部默认选中
    })
    let collapseFlag = computed(()=>{
      return app.collapseFlag
    })

    let toggleMenu = ()=>{
      debugger
      store.commit('setCollapseFlag', !app.collapseFlag)
    }

    watch(()=>router,(newRouter)=>{
      let {currentRoute} = newRouter
      if(unref(currentRoute).path === '/radar/cover/blockOne') {
        data.navList = [...nav]
      }
    },{immediate : true})

    onMounted(()=>{
      // console.log(app.collapseFlag)
    })

    return {
      toggleMenu,
      collapseFlag,
      ...toRefs(data),
    }
  }
})
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-content: center;
  justify-content: space-between;
  .flex{
    display: flex;
  }
  .logo {
    float: left;
    width: 210px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }

  .user-info {
    color: #ffffff;
    min-width: 100px;
    padding-right: 20px;
  }

}

.ant-layout-header{
  padding: 0;
}


</style>
