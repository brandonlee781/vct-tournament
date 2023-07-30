<script setup lang="ts">
import type { TeamId } from '@/types';

type TeamGroupProps = {
  teams: TeamId[]
  name: string
  cols?: number
}
const props = defineProps<TeamGroupProps>()

const wrapperClass = computed(() => {
  if (props.cols) {
    return 'grid gap-2'
  }
  return 'flex flex-row flex-nowrap gap-2'
})

const teamClass = computed(() => {
  if (props.cols) {
    return 'w-full md:w-28 lg:w-32 xl:w-40'
  }
  return ''
})

const teamStyle = computed(() => {
  if (props.cols) {
    return { }
  }
  return { width: `calc(${(1/props.teams.length) * 100}%)`}
})
</script>

<template>
  <div>
    <div class="h-6 bg-[#c5b173] flex items-center justify-center">
      <span class="text-black text-center font-extrabold leading-3 uppercase">
        {{ name }}
      </span>
    </div>
    <div :class="wrapperClass" :style="{ gridTemplateColumns: `repeat(${cols}, 1fr)` }">
        <TeamGroupTeam
          v-for="team in teams"
          :key="team"
          :team="team"
          :class="teamClass"
          :style="teamStyle"
        />
    </div>
  </div>
</template>

<style scoped>
</style>
