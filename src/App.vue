<script setup lang="ts">
import { useDaysStore } from './stores/days';
const daysStore = useDaysStore()
const { tournament } = useTournamentData()

const groupTab = ref<'qualified' | 'groups'>('groups')

const daysContainer = ref<HTMLDivElement>()
const scrollSideways = (evt: WheelEvent) => {
  if (daysContainer.value) {
    console.log(daysContainer.value.clientWidth)
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
</script>

<template>
  <header class="relative flex flex-nowrap items-center justify-end py-2 gap-2">
    <button class="block sm:hidden p-3 hover:bg-slate-200/30 rounded-full" @click="menuOpen = true">
      <i-mdi-menu />
    </button>
    <NavMenu class="hidden sm:flex" />
    <NavMenu ref="mobileMenu" v-show="menuOpen" class="sm:hidden absolute bg-[#161616] top-0 right-0 p-2" />
  </header>
  <main class="md:mt-8">
    <div class="font-extrabold text-center text-2xl md:text-3xl lg:text-5xl text-[#c5b173] pb-6">
      CHAMPIONS LOS ANGELES SCHEDULE
    </div>
    <div v-if="tournament?.days" class="flex flex-nowrap">
      <TimeReference />
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

    <div v-if="groupTab === 'qualified'" class="grid grid-cols-[3fr,1fr] md:grid-cols-[3fr,1fr,3fr,1fr] gap-2 justify-between mt-2 md:mt-0">
      <TeamGroup name="Americas" :teams="['evil_geniuses', 'loud', 'nrg']" />
      <TeamGroup name="Americas LCQ" :teams="['kru']" />
      <TeamGroup name="EMEA" :teams="['fnatic', 'fut', 'navi', 'team_liquid']" class="col-span-2" />
      <TeamGroup name="Pacific" :teams="['drx', 'paper_rex', 't1']" />
      <TeamGroup name="Pacific LCQ" :teams="['zeta_division']" />
      <TeamGroup name="China" :teams="['bilibili', 'edward_gaming', 'fpx']" />
      <TeamGroup name="EMEA LCQ" :teams="['giants']" />
    </div>
    <button v-if="groupTab === 'qualified'" @click="groupTab = 'groups'" class="mt-2 px-3 py-2 hover:bg-[#161616]/40 md:mt-0">
      Show Team Groups
    </button>
    <div v-if="groupTab === 'groups'" class="grid grid-cols-2 md:flex gap-2 justify-between">
      <TeamGroup name="Group A" :teams="['paper_rex', 'kru', 'edward_gaming', 'giants']" :cols="2" />
      <TeamGroup name="Group B" :teams="['evil_geniuses', 'fpx', 'fut', 't1']" :cols="2" />
      <TeamGroup name="Group C" :teams="['fnatic', 'zeta_division', 'nrg', 'bilibili']" :cols="2" />
      <TeamGroup name="Group D" :teams="['team_liquid', 'navi', 'drx', 'loud']" :cols="2" />
    </div>
    <button v-if="groupTab === 'groups'" @click="groupTab = 'qualified'" class="mt-2 px-3 py-2 hover:bg-[#161616]/40">
      Show Qualified Teams
    </button>
  </main>
</template>

<style scoped>
.days-container::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
</style>
