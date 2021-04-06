<template>
  <a-layout-sider width="250" style="background: #fff">
    <a-menu
        mode="inline"
        v-model:selectedKeys="selectedKeys2"
        v-model:openKeys="openKeys"
        :style="{ height: '100%', borderRight: 0 }"
    >
      <a-sub-menu v-for="item in sideMenuList"  :key="item.id + ''">
        <template #title>
              <span>
                <user-outlined/>
                {{ item.name }}
              </span>
        </template>
        <a-menu-item v-for="child in item.children" :key="child.id + ''">{{ child.name }}</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import {defineComponent, ref, unref, watch, reactive, toRefs} from 'vue'
import { useRouter} from "vue-router";
import {menuList} from '@/mock/coverMenu'

export default defineComponent({
  name: "GlobalSide",
  setup() {
    const router = useRouter();

    let data = reactive({
      sideMenuList: [],
      selectedKeys2: ref(['112']),  //当前选中的菜单项 key 数组
      collapsed: ref(false),
      openKeys: ref(['111']),  // 当前展开的菜单项
    })

    watch(()=>router,(newRouter)=>{
      let {currentRoute} = newRouter
      if(unref(currentRoute).path === '/radar/cover/blockOne') {
        data.sideMenuList = [...menuList]
      }
    },{immediate : true})

    return {
      ...toRefs(data)
    };
  },
})
</script>

<style scoped>

</style>
