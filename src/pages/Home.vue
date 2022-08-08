<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div h-fs w-full flex="c col">
    <h3 mb-2 text="24px gray-600" font-bold>
      CSS 100 days
    </h3>
    <div text="gray-400" cursor-pointer underline @click="router.push({ name: '1' })">
      第一章 · 风花雪月
    </div>
    <div text="gray-400" cursor-pointer underline @click="router.push({ name: '2' })">
      第二章 · 瓶中纸船
    </div>
    <div text="gray-400" cursor-pointer underline @click="router.push({ name: '3' })">
      第三章 · 窗户与云
    </div>
    <div text="gray-400" cursor-pointer underline @click="router.push({ name: '4' })">
      第四章 · 径向渐变
    </div>
  </div>
  <TheFooter />
</template>

<style lang="less" scoped>
</style>
