<script setup lang="ts">
import VCTLogo from '@/assets/logos/vct.svg'
import { useDaysStore } from './stores/days';
import { format, addDays } from 'date-fns';
const daysStore = useDaysStore()
const { tournament } = useTournamentData()

const groupTab = ref<'qualified' | 'groups'>('groups')

const daysContainer = ref<HTMLDivElement>()
const scrollSideways = (evt: WheelEvent) => {
  if (daysContainer.value) {
    daysContainer.value.scrollLeft += evt.deltaY * 3
  }
}
const mobileMenu = ref<HTMLElement>()
const menuOpen = ref(false)
onClickOutside(mobileMenu, () => {
  if (menuOpen.value) {
    menuOpen.value = false
  }
})
let first = new Date()
first.setUTCHours(19)
first.setUTCMinutes(0)
let second = new Date()
second.setUTCHours(22)
second.setUTCMinutes(0)
let third = addDays(new Date(), 1)
third.setUTCHours(1)
third.setUTCMinutes(0)
const times = [
  format(first, 'HH:mm'),
  format(second, 'HH:mm'),
  format(third, 'HH:mm')
]
</script>

<template>
  <header class="relative flex flex-nowrap items-center justify-between p-2 gap-2">
    <VCTLogo fill="#c5b173" height="36px" width="36px" />
    <div>
      <button class="block sm:hidden p-3 hover:bg-slate-200/30 rounded-full" @click="menuOpen = true">
        <i-mdi-menu />
      </button>
      <NavMenu class="hidden sm:flex" />
      <NavMenu ref="mobileMenu" v-show="menuOpen" class="sm:hidden absolute bg-[#161616] top-0 right-0 p-2" />
    </div>
  </header>
  <main class="md:mt-8">
    <div class="font-extrabold text-center text-2xl md:text-3xl lg:text-5xl text-[#c5b173] pb-6">
      CHAMPIONS LOS ANGELES SCHEDULE
    </div>
    <div v-if="tournament?.days" class="flex flex-nowrap">
      <TimeReference :times="times" />
      <ScheduleButton
        prev
        :disabled="!daysStore.hasPrevious"
        @click:top="() => daysStore.goToPrevious()"
        @click:bottom="() => daysStore.goToFirst()"
      />
      <div ref="daysContainer" class="flex flex-row flex-nowrap gap-4 overflow-x-scroll scroll-smooth snap-mandatory snap-y days-container" @wheel.prevent="scrollSideways">
        <TournamentDay v-for="(day, index) in tournament.days" :key="index" :day="day" :index="index" class="snap-end snap-always" />
      </div>

      <ScheduleButton
        next
        :disabled="!daysStore.hasNext"
        @click:top="() => daysStore.goToNext()"
        @click:bottom="() => daysStore.goToLast()"
      />
    </div>

    <QualifiedGroups v-if="groupTab === 'qualified'" @click="groupTab = 'groups'"></QualifiedGroups>
    <PlayGroups v-if="groupTab === 'groups'" @click="groupTab = 'qualified'"></PlayGroups>
    <ReloadPrompt />
  </main>
</template>

<style scoped>
.days-container::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
</style>
