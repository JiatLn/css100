<script setup lang="ts">
const itemList = [
  {
    name: '三国演义',
    desc: '青山依旧在，几度夕阳红。白发渔樵江渚上，惯瞧秋月春风。一壶浊酒喜相逢。古今多少事，都付笑谈中。',
    id: 0,
  },
  {
    name: '西游记',
    desc: '功完八九还加九，行满三千及大千。',
    id: 1,
  },
  {
    name: '红楼梦',
    desc: '风月情长，终究梦一场。红楼梦一场，又如人生一出戏。梦迷梦醒，戏里戏外，梦里就是荒唐，戏外就是荒凉。',
    id: 2,
  },
  {
    name: '水浒传',
    desc: '天地显罡煞之精，人境合杰灵之美。',
    id: 3,
  },
]

const acitveId = ref<number | null>(null)

onMounted(() => {
  setTimeout(() => {
    acitveId.value = 0
  }, 600)
})

const onHover = (idx: number) => {
  acitveId.value = idx
}
</script>

<template>
  <div wh-full>
    <ul flex="~ gap-10px nowrap">
      <li v-for="item in itemList" :key="item.id" class="item" :class="{ active: acitveId === item.id }" overflow-hidden @mouseenter="onHover(item.id)">
        <span class="title">{{ item.name }}</span>
        <div v-show="acitveId === item.id" class="desc">
          {{ item.desc }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.item {
  position: relative;
  display: flex;
  width: 100px;
  height: 240px;
  padding: 16px;
  list-style: none;
  background-color: deepskyblue;
  border-radius: 8px;
  transition: .6s ease-in-out;
  cursor: pointer;
  opacity: .5;

  &.active {
    width: 400px;
    opacity: 1;

    .desc {
      animation: typing 4s .6s forwards;
    }
  }

  .title {
    margin-right: 16px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: .2em;
    writing-mode: vertical-rl;
  }

  .desc {
    position: absolute;
    right: 40px;
    overflow: hidden;
    width: 0;
    margin: 16px 20px 24px;
    color: white;
    font-family: "宋体";
    letter-spacing: .1em;
    writing-mode: vertical-rl;
  }
}

@keyframes typing {
  0% {
    width: 0;
  }

  100% {
    width: 200px;
  }
}
</style>
