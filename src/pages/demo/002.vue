<script setup lang="ts">
useTitle('第二章 · 瓶中纸船')
</script>

<template>
  <div bg="#d3ddbd" wh-full>
    <div class="bowl">
      <div class="water">
        <div class="water-inner" />
      </div>
      <div class="water-top" />
      <div class="flag" />
      <div class="boat" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.bowl {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #cde5e1;
  border: 3px solid #fff;
  border-radius: 50%;

  /* 瓶口 */
  &::before {
    content: "";
    position: absolute;
    top: 9px;
    left: 50%;
    width: 90px;
    height: 30px;
    border: 3px solid #fff;
    border-radius: 50%;
    transform: translateX(-50%);
  }

  /* 阴影 */
  &::after {
    content: "";
    position: absolute;
    bottom: -25px;
    left: 50%;
    width: 120px;
    height: 40px;
    background-color: rgba(0, 0, 0, .15);
    border-radius: 50%;
    transform: translateX(-50%);
  }
}

.water {
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 8px solid transparent;
  border-radius: 50%;

  .water-inner {
    width: 100%;
    height: 100%;
    background-color: rgb(20, 152, 240);
    border-radius: 50%;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    transform: translateY(50%);
    animation: water-shake 1s infinite ease-in;
  }
}

/* 水面 */
.water-top {
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% - 16px);
  height: 50px;
  background-color: rgb(92, 177, 235);
  border-radius: 50%;
  animation: water-top-shake 1s infinite ease-in;
}

.boat {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 20px;
  background-color: #fff;
  transform: translateX(-50%) translateY(-100%);
  animation: boat-shake 1s infinite ease-in;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border: 10px solid transparent;
    border-top: 10px solid #fff;
    border-right: 10px solid #fff;
    border-top-left-radius: 2px;
    transform: translateX(-100%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border: 10px solid transparent;
    border-top: 10px solid #fff;
    border-left: 10px solid #fff;
    border-top-right-radius: 2px;
    transform: translateX(100%);
  }
}

.flag {
  position: absolute;
  top: 28%;
  left: 50%;
  width: 2px;
  height: 36px;
  background-color: orchid;
  animation: flag-shake 1s .5s infinite ease-in;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border: 10px solid transparent;
    border-bottom: 10px solid orchid;
    border-left: 10px solid orchid;
    transform: translateX(100%);
  }
}

@keyframes water-shake {
  0% {
    transform: translateY(50%) skewY(0deg);
  }

  25% {
    transform: translateY(50%) skewY(4deg);
  }

  50% {
    transform: translateY(50%) skewY(0deg);
  }

  75% {
    transform: translateY(50%) skewY(-4deg);
  }

  100% {
    transform: translateY(50%) skewY(0deg);
  }
}

@keyframes water-top-shake {
  0% {
    transform: translateX(-50%) translateY(-50%) skewY(0deg);
  }

  25% {
    transform: translateX(-50%) translateY(-50%) skewY(4deg);
  }

  50% {
    transform: translateX(-50%) translateY(-50%) skewY(0deg);
  }

  75% {
    transform: translateX(-50%) translateY(-50%) skewY(-4deg);
  }

  100% {
    transform: translateX(-50%) translateY(-50%) skewY(0deg);
  }
}

@keyframes boat-shake {
  0% {
    transform: translateX(-50%) translateY(-50%) skewY(0deg);
  }

  25% {
    transform: translateX(-50%) translateY(-55%) skewY(6deg);
  }

  50% {
    transform: translateX(-50%) translateY(-50%) skewY(0deg);
  }

  75% {
    transform: translateX(-50%) translateY(-55%) skewY(-6deg);
  }

  100% {
    transform: translateX(-50%) translateY(-50%) skewY(0deg);
  }
}

@keyframes flag-shake {
  0% {
    transform: skewY(0deg);
  }

  25% {
    transform: skewY(-6deg) translateY(-2%);
  }

  50% {
    transform: skewY(0deg);
  }

  75% {
    transform: skewY(6deg) translateY(-2%);
  }

  100% {
    transform: skewY(0deg);
  }
}
</style>

