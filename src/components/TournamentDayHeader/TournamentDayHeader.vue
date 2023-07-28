<script setup lang="ts">
import { format } from 'date-fns'

type TournamentDayHeaderProps = {
  index: number;
  date: Date;
}
const props = defineProps<TournamentDayHeaderProps>()

const dayOfWeek = computed(() => format(props.date, 'EEEE'))
const formattedDate = computed(() => format(props.date, 'MMM d'))
</script>

<template>
  <div
        class="flex flex-col items-center justify-center bg-[#c5b173] h-20 w-60 text-black"
      >
        <span class="font-bold leading-4 tracking-tighter uppercase text-[16px]">Day {{ index + 1 }} : {{ dayOfWeek }}</span>
        <span class="font-bold leading-4 tracking-tighter uppercase text-[16px]">{{ formattedDate }}</span>
      </div>
</template>

<style scoped>
</style>
