<script setup lang="ts">
import type { TournamentMatch } from '@/types'
import { format } from 'date-fns'
const props = defineProps<TournamentMatch>()

const matchTime = computed(() => {
  return format(props.time, 'hh:mm aa')
})
</script>

<template>
  <div class="flex flex-col items-center w-60 bg-[#161616]">
    <span class="font-bold text-white">{{ matchTime }}</span>
    <div v-if="teams?.length" class="grid grid-cols-[1fr,16px,1fr] gap-4 items-center justify-items-center pt-1 pb-3">
      <TeamIcon :team-id="teams[0].id" v-bind="teams[0]"></TeamIcon>
      <span class="font-bold text-white">VS</span>
      <TeamIcon :team-id="teams[1].id" v-bind="teams[1]"></TeamIcon>
    </div>

    <div v-if="placeholders?.length" class="grid grid-cols-[1fr,16px,1fr] gap-x-2 items-center justify-items-center pb-2">
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
    <div class="w-full h-4 leading-4 uppercase text-center text-black font-bold bg-[#c5b173]">
      {{ subtitle }}
    </div>
  </div>
</template>

<style scoped>
</style>
