<script setup lang="ts">
useTitle('第三章 · 窗户与云')
</script>

<template>
  <div bg="#fff4e8" wh-full>
    <div class="window" overflow-hidden>
      <div class="top" border="~ blue 4px" border-b="none" overflow-hidden />
      <div class="bottom" />
      <div class="cloud c1" />
      <div class="cloud c2" />
      <div class="cloud c3" />
      <div bg="transparent" absolute bottom-0 w-300px h-360px border="~ blue 4px" border-t-none overflow-hidden />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 窗户 */
.window {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 55%;
    z-index: 99;
    width: 300px;
    height: 2px;
    background-color: rgb(96, 165, 250);
    transform: translateY(-50%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 99;
    width: 2px;
    height: 500px;
    background-color: rgb(96, 165, 250);
    transform: translateX(-50%);
  }

  .top {
    position: relative;
    width: 300px;
    height: 300px;
    background-color: #d4e8f9;
    border-radius: 50% 50% 0 0;

    /* 横 */
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      width: 300px;
      height: 2px;
      background-color: rgb(96, 165, 250);
      transform: translateY(-50%);
    }
  }

  .bottom {
    position: relative;
    width: 300px;
    height: 200px;
    background-color: #d4e8f9;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      width: 300px;
      height: 2px;
      background-color: rgb(96, 165, 250);
      transform: translateY(-50%);
    }
  }

  .cloud {
    position: absolute;
    width: 90px;
    height: 32px;
    background-color: #fff;
    border-radius: 50% / 100% 100% 0 0;

    &::before {
      content: "";
      position: absolute;
      top: -4px;
      left: 12px;
      width: 32px;
      height: 32px;
      background-color: #fff;
      border-radius: 50%;
    }

    &::after {
      content: "";
      position: absolute;
      top: -10px;
      right: 12px;
      width: 36px;
      height: 36px;
      background-color: #fff;
      border-radius: 50%;
    }

    &.c1 {
      top: 200px;
      left: -200px;
      animation: cloud-move 30s -4s infinite forwards;
    }

    &.c2 {
      top: 320px;
      left: -200px;
      animation: cloud-move 30s infinite forwards;
    }

    &.c3 {
      top: 50px;
      left: 90px;
    }
  }
}

@keyframes cloud-move {
  0% {
    transform: translateX(-200px);
  }

  50% {
    transform: translateX(560px) scale(.6);
  }

  100% {
    transform: translateX(-200px);
  }
}
</style>
