<script setup lang="ts">
import type { TournamentDay } from '@/types'
import { useDaysStore } from '@/stores/days'

type TournamentDayProps = {
  day: TournamentDay
  index: number
}
defineProps<TournamentDayProps>()
const daysStore = useDaysStore()

const wrapper = ref<HTMLDivElement>()

onMounted(() => {
  if (wrapper.value) {
    daysStore.observer.observe(wrapper.value)
  }
})

onUnmounted(() => {
  if (wrapper.value) {
    daysStore.observer.unobserve(wrapper.value)
  }
})
</script>

<template>
  <div ref="wrapper" class="flex flex-col gap-4" :data-index="index">
    <TournamentDayHeader :date="day.date" :number="day.id" :special="day.special" :index="index" />
    <template v-for="match in day.matches" :key="match.id" >
      <TournamentMatch v-if="!day.special" v-bind="match" />
      <TournamentMatchSpecial v-else v-bind="day" />
    </template>
  </div>
</template>

<style scoped>
</style>
