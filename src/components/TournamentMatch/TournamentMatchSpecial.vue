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

const scores = computed(() => {
  return props.matches?.[0].teams?.map(t => t?.score) ?? []
})
</script>

<template>
  <div
    class="wrapper flex flex-col items-center justify-center h-[224px] py-2"
    :style="{ backgroundColor: specialColor?.bg || '#161616', color: specialColor?.text || '#000' }"
  >

    <div class="grid grid-cols-[1fr,16px,1fr] gap-x-4 items-center justify-items-center pt-1 pb-3 relative">
      <div class="col-span-3 font-bold text-3xl text-center">
        {{ match.placeholders?.[0].text }}
      </div>
      <TeamIcon v-if="match.teams?.[0]" :team-id="match.teams[0].id" v-bind="match.teams[0]" :light="!specialColor?.dark"></TeamIcon>
      <span v-if="match.teams?.[0] && match.teams[1]" class="font-bold">VS</span>
      <TeamIcon v-if="match.teams?.[1]" :team-id="match.teams[1].id" v-bind="match.teams[1]" :light="!specialColor?.dark"></TeamIcon>

      <div v-if="scores.length && scores[0] && scores[1]" class="scores text-white text-sm absolute bottom-0 flex items-center">
        <span class="font-semibold" :class="[scores[0] > scores[1] ? 'text-green-700' : 'text-red-500']">{{ scores[0] }}</span>
        <span class="font-semibold"> - </span>
        <span class="font-semibold" :class="[scores[0] < scores[1] ? 'text-green-700' : 'text-red-500']">{{ scores[1] }}</span>
      </div>
    </div>

    <div class="grid grid-cols-[1fr,16px,1fr] gap-x-4 items-center justify-items-center pt-1 pb-3 relative">
      <template v-if="match.placeholders && match.placeholders.length > 1">
        <div class="col-span-3 font-bold text-3xl text-center">
          {{ match.placeholders?.[1].text }}
        </div>
        <TeamIcon v-if="match.teams?.[2]" :team-id="match.teams[2].id" v-bind="match.teams[2]" :light="!specialColor?.dark"></TeamIcon>
        <span v-if="match.teams?.[2] && match.teams[3]" class="font-bold">VS</span>
        <TeamIcon v-if="match.teams?.[3]" :team-id="match.teams[3].id" v-bind="match.teams[3]" :light="!specialColor?.dark"></TeamIcon>

        <div v-if="scores.length > 2 && scores[2] && scores[3]" class="scores text-white text-sm absolute bottom-0 flex items-center">
          <span class="font-semibold" :class="[scores[2] > scores[3] ? 'text-green-700' : 'text-red-500']">{{ scores[2] }}</span>
          <span class="font-semibold"> - </span>
          <span class="font-semibold" :class="[scores[2] < scores[3] ? 'text-green-700' : 'text-red-500']">{{ scores[3] }}</span>
        </div>
      </template>
    </div>

    <span class="font-bold">
      {{ !special ? matchTime : '' }}
    </span>
  </div>
</template>

<style scoped>
.wrapper {
  width: calc(100vw - 64px - 8px);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 87% 100%, 0 100%)
}
@media(min-width:960px) {
  .wrapper {
    width: 30rem;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%)
  }
}
</style>
