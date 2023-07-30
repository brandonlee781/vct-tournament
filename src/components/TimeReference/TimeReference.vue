<script setup lang="ts">
defineProps<{ times: string[] }>()
</script>

<template>
  <div class="flex flex-col gap-4 mr-2 max-sm:hidden">
    <div class="bg-[#c5b173] text-black h-20 w-32 flex items-center justify-center">
      <span class="font-bold leading-4 text-center">
        Event Times in<br/>
        your Timezone
      </span>
    </div>

    <div class="bg-[#161616] w-32 gap-4 flex flex-col">
      <div v-for="(time, index) in times" :key="index" class="text-white text-center pt-1 font-bold text-lg h-[104px]">
        {{ time }}
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
