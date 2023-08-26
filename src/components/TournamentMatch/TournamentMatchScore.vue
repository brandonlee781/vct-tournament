<script setup lang="ts">

type TournamentMatchScoreProps = {
  left: number
  right: number
  background?: boolean
}
const props = defineProps<TournamentMatchScoreProps>()
</script>

<template>
  <div
    class="scores text-white text-sm flex items-center"
    :class="background && 'px-2 py-1 bg-[#161616]/60'"
  >
    <span class="font-semibold" :class="[left > right ? 'winner text-green-500' : 'loser text-red-500']">{{ left }}</span>
    <span class="font-semibold -mt-1"> - </span>
    <span class="font-semibold" :class="[left < right ? 'winner text-green-500' : 'loser text-red-500']">{{ right }}</span>
  </div>
</template>

<style scoped>
.winner {
  margin-top: -1px;
}
</style>
