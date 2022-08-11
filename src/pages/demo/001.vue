<script setup lang="ts">
useTitle('第一章 · 风花雪月')

function getV() {
  return 5 * (Math.random() - 0.5)
}
function getP() {
  return 5 * (Math.random() - 0.5)
}

const divRef = ref<HTMLDivElement | null>()
// the flakes
const MAX_FLAKES = 299
const flakes = new Array(MAX_FLAKES)

class Flake {
  node: HTMLHeadingElement
  vec: Record<'x' | 'y', number>
  pos: Record<'x' | 'y', number> | null
  scale: number
  constructor() {
    this.node = document.createElement('h1')
    this.node.innerHTML = Math.random() > 0.5 ? '🌸' : '❄️'
    this.vec = {
      x: getV(),
      y: getV(),
    }
    this.pos = {
      x: getP(),
      y: getP(),
    }
    this.scale = 1 + Math.random()
    this.scale = Math.max(0, this.scale - (0.03 * 60))
    if ((this.pos.x * this.pos.x + this.pos.y * this.pos.y) < 8000) {
      this._render()
    }
  }

  _render() {
    if (!this.pos)
      return
    const transform = `translate3d(${this.pos.x * 6}px,${this.pos.y}px,0) scale(${this.scale})`
    this.node.style.transform = transform
  }

  update() {
    if (!this.pos) {
      this.pos = { x: 0, y: 0 }
      this.vec = { x: getV(), y: getV() }
      this.scale = 2 + Math.random()
    }
    this.vec.y += 0.05

    this.pos.x += this.vec.x
    this.pos.y += this.vec.y
    this.scale = Math.max(0, this.scale - 0.035)

    this._render()

    if ((this.pos.x * this.pos.x + this.pos.y * this.pos.y) > 100000) {
      this.pos = null
    }
  }

  getNode() { return this.node }
}

onMounted(() => {
  if (!divRef.value)
    return

  // setup flakes
  for (let i = 0; i < MAX_FLAKES; i++) {
    const flake = new Flake()
    const node = flake.getNode()
    divRef.value.appendChild(node)
    flakes[i] = flake
  }
  // start ticking
  tick()
})

// the flake creator
function tick() {
  // update flakes
  for (let i = 0; i < MAX_FLAKES; i++) {
    const flake = flakes[i]
    flake.update()
  }
  // next tick
  requestAnimationFrame(tick)
}
</script>

<template>
  <div wh-full bg="#110c1e" overflow-hidden relative>
    <div ref="divRef" />
    <div absolute class="moon" right="20%" w-60px h-60px bg="yellow-200" rounded-full />
  </div>
</template>

<style scoped lang="less">
.moon {
  animation: moon 6s forwards;
  filter: blur(3px);
}

@keyframes moon {
  from {
    top: 50%;
    transform: scale(.8);
    opacity: 0;
  }

  to {
    top: 20%;
    opacity: .99;
  }
}
</style>

