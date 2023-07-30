<script setup lang="ts">
import { format } from 'date-fns'

type TournamentDayHeaderProps = {
  index: number;
  number: number;
  special: boolean
  date: Date;
}
const props = defineProps<TournamentDayHeaderProps>()

const dayOfWeek = computed(() => format(props.date, 'EEEE'))
const formattedDate = computed(() => format(props.date, 'MMM d'))
</script>

<template>
  <div
    class="flex items-center justify-center bg-[#c5b173] h-20 text-black"
    :class="[special ? 'flex-row w-[30rem]' : 'flex-col w-60']"
  >
    <span class="font-bold leading-4 tracking-tighter uppercase text-[16px]">Day {{ number }} : {{ dayOfWeek }}</span>
    <span class="font-bold leading-4 tracking-tighter uppercase text-[16px]">
      {{ special ? ', ' : '' }}
      {{ formattedDate }}
    </span>
  </div>
</template>

<style scoped>
</style>
