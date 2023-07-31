<script setup lang="ts">
import type { TournamentDay } from '@/types';
import { format } from 'date-fns'

type TournamentDayHeaderProps = Pick<TournamentDay, 'date' | 'day' | 'endDate' | 'special'>
const props = defineProps<TournamentDayHeaderProps>()

const dayOfWeek = computed(() => format(props.date, 'EEEE'))
const formattedDate = computed(() => format(props.date, 'MMM d'))

const endDayOfWeek = computed(() => props.endDate ? format(props.endDate, 'EEEE') : null)
const formattedEndDate = computed(() => props.endDate ? format(props.endDate, 'MMM d') : null)
</script>

<template>
  <div
    class="header-wrapper flex items-center justify-center bg-[#c5b173] h-20 text-black"
    :class="[special && 'special']"
  >
    <template v-if="endDate">
      <span class="font-bold leading-4 tracking-tighter uppercase text-[16px]">
        {{ dayOfWeek }} {{ formattedDate }} - {{ endDayOfWeek }} {{ formattedEndDate }}
      </span>
    </template>
    <template v-else>
      <span class="font-bold leading-4 tracking-tighter uppercase text-[16px]">Day {{ day }} : {{ dayOfWeek }}</span>
      <span class="font-bold leading-4 tracking-tighter uppercase text-[16px]">
        {{ special ? ', ' : '' }}
        {{ formattedDate }}
      </span>
    </template>
  </div>
</template>

<style scoped>
.header-wrapper {
  flex-direction: column;
  width: 15rem;
}
.header-wrapper.special {
  flex-direction: row;
  width: calc(100vw - 64px - 8px);
}

@media (min-width: 960px) {
  .header-wrapper.special {
    width: 30rem;
  }
}
</style>
