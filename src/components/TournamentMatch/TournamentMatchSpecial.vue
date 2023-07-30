<script setup lang="ts">
import type { TournamentDay } from '@/types'
import { format } from 'date-fns'
type TournamentMatchSpecialProps = TournamentDay
const props = defineProps<TournamentMatchSpecialProps>()

const match = computed(() => props.matches?.[0] ?? {})

const matchTime = computed(() => {
  if (!match.value.time) return null
  return format(match.value.time, 'hh:mm aa')
})
</script>

<template>
  <div
    class="wrapper flex flex-col items-center justify-between w-[30rem] h-[224px] py-2"
    :style="{ backgroundColor: specialColor?.bg || '#161616', color: specialColor?.text || '#000' }"
  >
      <div></div>

      <div class="grid grid-cols-[1fr,16px,1fr] gap-x-4 items-center justify-items-center pt-1 pb-3">
        <div class="col-span-3 font-bold text-3xl text-center">
          {{ match.placeholders?.[0].text }}
        </div>
        <TeamIcon v-if="match.teams[0]" :team-id="match.teams[0].id" v-bind="match.teams[0]" :light="!specialColor?.dark"></TeamIcon>
        <span v-if="match.teams[0] && match.teams[1]" class="font-bold">VS</span>
        <TeamIcon v-if="match.teams[1]" :team-id="match.teams[1].id" v-bind="match.teams[1]" :light="!specialColor?.dark"></TeamIcon>

        <template v-if="match.placeholders.length > 1">
          <div class="col-span-3 font-bold text-3xl text-center">
            {{ match.placeholders?.[1].text }}
          </div>
          <TeamIcon v-if="match.teams[2]" :team-id="match.teams[2].id" v-bind="match.teams[2]" :light="!specialColor?.dark"></TeamIcon>
          <span v-if="match.teams[2] && match.teams[3]" class="font-bold">VS</span>
          <TeamIcon v-if="match.teams[3]" :team-id="match.teams[3].id" v-bind="match.teams[3]" :light="!specialColor?.dark"></TeamIcon>
        </template>
      </div>

      <span class="font-bold">
        {{ matchTime }}
      </span>
  </div>
</template>

<style scoped>
.wrapper {
  clip-path: polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%)
}
</style>
