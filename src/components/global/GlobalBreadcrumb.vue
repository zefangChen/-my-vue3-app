<template>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item>
      <home-outlined />
    </a-breadcrumb-item>
    <a-breadcrumb-item>Home</a-breadcrumb-item>
    <a-breadcrumb-item>List</a-breadcrumb-item>
    <a-breadcrumb-item>App</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
import { defineComponent } from 'vue';
import { HomeOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  name: "GlobalBreadcrumb",
  components: {
    HomeOutlined,
  },
})
</script>

<style scoped>

</style>
