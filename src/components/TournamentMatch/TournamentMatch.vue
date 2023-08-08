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

const leftSide = computed(() => {
  if (props.teams?.[0]) {
    return { team: props.teams[0] }
  } else if (props.placeholders?.[0]) {
    return { placeholder: props.placeholders[0] }
  }
  return null
})

const rightSide = computed(() => {
  if (props.teams?.[1]) {
    return { team: props.teams[1] }
  } else if (props.placeholders?.[1]) {
    return { placeholder: props.placeholders[1] }
  }
  return null
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
    <div class="grid grid-cols-[1fr,16px,1fr] gap-4 items-center justify-items-center pt-1 pb-2">
      <TournamentMatchSide v-bind="leftSide" :winner-loser="winnerLoser" />

      <span v-if="leftSide && rightSide" class="font-bold text-white">VS</span>

      <TournamentMatchSide v-bind="rightSide" :winner-loser="winnerLoser" />
    </div>

    <div v-if="placeholders?.length && !winnerLoser" class="flex flex-col items-center pb-2">
      <template v-for="(p, index) in placeholders" :key="index">
        <span class="text-2xl font-bold text-white text-center uppercase">{{ p.text }}</span>
        <span class="font-bold text-white text-center uppercase">{{ p.subtext }}</span>
      </template>
    </div>
    
    <div v-if="scores" class="scores text-white text-sm absolute bottom-5 flex items-center">
      <span class="font-semibold" :class="[scores.left.win ? 'text-green-700' : 'text-red-500']">{{ scores.left.num }}</span>
      <span class="font-semibold"> - </span>
      <span class="font-semibold" :class="[scores.right.win ? 'text-green-700' : 'text-red-500']">{{ scores.right.num }}</span>
    </div>
    <div class="w-full h-4 leading-4 uppercase text-center text-black font-bold bg-[#c5b173]">
      {{ subtitle }}
    </div>
  </div>
</template>

<style scoped>
</style>
