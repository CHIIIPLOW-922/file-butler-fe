<template>
  <div id="app">
    <el-config-provider :locale="locale">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
const locale = zhCn
onMounted(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    if (savedTheme == "dark") {
        document.body.setAttribute('arco-theme', 'dark')
    } else {
        document.body.removeAttribute('arco-theme')
    }
})
</script>

<style lang="scss"></style>
