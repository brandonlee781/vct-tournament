<script setup lang="ts">
import type { TournamentMatch } from '@/types'
import { format } from 'date-fns'
const props = defineProps<TournamentMatch>()

const matchTime = computed(() => {
  return format(props.time, 'hh:mm aa')
})

const winnerLoser = computed(() => {
  return !!props.placeholders?.some(item => item.winner || item.loser)
})

const scores = computed(() => {
  if (props.teams && props.teams.length && props.teams[0].score !== undefined && props.teams[1].score !== undefined) {
    return {
      left: { num: props.teams[0].score, win: props.teams[0].score > props.teams[1].score },
      right: { num: props.teams[1].score, win: props.teams[1].score > props.teams[0].score },
    }
  }
  return null
})
</script>

<template>
  <div class="flex flex-col items-center w-60 h-[104px] bg-[#161616] relative">
    <span class="font-bold text-white">{{ matchTime }}</span>
    <div v-if="teams?.length" class="grid grid-cols-[1fr,16px,1fr] gap-4 items-center justify-items-center pt-1 pb-3">
      <TeamIcon :team-id="teams[0].id" v-bind="teams[0]"></TeamIcon>
      <span class="font-bold text-white">VS</span>
      <TeamIcon :team-id="teams[1].id" v-bind="teams[1]"></TeamIcon>
    </div>

    <div v-else-if="placeholders?.length && winnerLoser" class="grid grid-cols-[1fr,16px,1fr] gap-x-2 items-center justify-items-center pb-2">
      <div class="flex flex-col text-center">
        <span v-if="placeholders[0].winner" class="text-xs font-bold text-white">WINNER OF</span>
        <span v-else-if="placeholders[0].loser" class="text-xs font-bold text-white">LOSER OF</span>
  
        <span class="col-start-1 row-start-2 text-4xl font-bold text-white">{{ placeholders[0].text }}</span>
      </div>
      <span class="font-bold text-white row-span-2">VS</span>

      <div class="flex flex-col text-center">
        <span v-if="placeholders[0].winner" class="text-xs font-bold text-white">WINNER OF</span>
        <span v-else-if="placeholders[0].loser" class="text-xs font-bold text-white">LOSER OF</span>
        <span class="col-start-3 row-start-2 text-4xl font-bold text-white">{{ placeholders[1].text }}</span>
      </div>
    </div>
    <div v-else-if="placeholders?.length" class="flex flex-col items-center pb-2">
      <template v-for="(p, index) in placeholders" :key="index">
        <span class="text-2xl font-bold text-white text-center uppercase">{{ p.text }}</span>
        <span class="font-bold text-white text-center uppercase">{{ p.subtext }}</span>
      </template>
    </div>

    <div v-if="scores" class="scores text-white text-sm absolute bottom-5 flex items-center">
      <span class="leading-1" :class="[scores.left.win ? 'text-green-700' : 'text-red-500']">{{ scores.left.num }}</span>
      <span class="leading-1"> - </span>
      <span class="leading-1" :class="[scores.right.win ? 'text-green-700' : 'text-red-500']">{{ scores.right.num }}</span>
    </div>
    <div class="w-full h-4 leading-4 uppercase text-center text-black font-bold bg-[#c5b173]">
      {{ subtitle }}
    </div>
  </div>
</template>

<style scoped>
</style>
