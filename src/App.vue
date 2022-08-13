<template>
  <el-config-provider :locale="locale">
    <router-view #="{ Component }">
      <component :is="Component" />
    </router-view>
  </el-config-provider>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ElConfigProvider } from 'element-plus';
  import zhCn from 'element-plus/lib/locale/lang/zh-cn';

  export default defineComponent({
    name: 'App',
    components: {
      ElConfigProvider,
    },
    setup() {
      return {
        locale: zhCn,
      };
    },
  });
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
