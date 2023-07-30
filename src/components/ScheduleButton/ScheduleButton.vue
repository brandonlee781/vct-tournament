<script setup lang="ts">
type ScheduleButtonProps = {
  disabled: boolean
  next?: boolean
  prev?: boolean
}
const props = defineProps<ScheduleButtonProps>()
const emits = defineEmits<{ 'click:top': [], 'click:bottom': [] }>()
</script>

<template>
  <div class="flex flex-col flex-grow" :class="[prev ? 'mr-1' : 'ml-1']">
    <button
      :disabled="disabled"
      class="basis-9/12 flex-grow w-8 border border-[#c5b173] disabled:border-[#c5b173]/80 bg-[#161616] disabled:bg-[#161616]/80 text-white disabled:text-gray-400 flex items-center justify-center hover:bg-[#3f3f3f]"
      @click="() => $emit('click:top')"
    >
      <i-mdi-chevron-left v-if="prev" height="24px" width="24px" />
      <i-mdi-chevron-right v-if="next" height="24px" width="24px" />
    </button>
    <button
      :disabled="disabled"
      class="basis-3/12 w-8 mt-1 border border-[#c5b173] disabled:border-[#c5b173]/80 bg-[#161616] disabled:bg-[#161616]/80 text-white disabled:text-gray-400 flex items-center justify-center hover:bg-[#3f3f3f]"
      @click="() => $emit('click:bottom')"
    >
      <i-mdi-chevron-double-left v-if="prev" height="24px" width="24px" />
      <i-mdi-chevron-double-right v-if="next" height="24px" width="24px" />
    </button>
  </div>
</template>

<style scoped>
</style>
