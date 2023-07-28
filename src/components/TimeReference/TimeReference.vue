<script setup lang="ts">
import { format, addDays } from 'date-fns';
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
  <div class="h-[440px] flex flex-col gap-4 mr-2 max-sm:hidden">
    <div class="bg-[#c5b173] text-black h-20 w-32 flex items-center justify-center">
      <span class="font-bold leading-4 text-center">
        Event Times in<br/>
        your Timezone
      </span>
    </div>

    <div class="h-[360px] bg-[#161616] w-32 gap-4 grid grid-rows-3">
      <div v-for="(time, index) in times" :key="index" class="text-white text-center pt-1 font-bold text-lg">
        {{ time }}
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
