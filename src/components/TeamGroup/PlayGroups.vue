<script setup lang="ts">
defineEmits<{ click: [] }>()
</script>

<template>
  <div class="grid grid-cols-2 md:flex gap-2 justify-between mt-2 md:0">
    <TeamGroup name="Group A" :teams="['paper_rex', 'kru', 'edward_gaming', 'giants']" :cols="2" />
    <TeamGroup name="Group B" :teams="['evil_geniuses', 'fpx', 'fut', 't1']" :cols="2" />
    <TeamGroup name="Group C" :teams="['fnatic', 'zeta_division', 'nrg', 'bilibili']" :cols="2" />
    <TeamGroup name="Group D" :teams="['team_liquid', 'navi', 'drx', 'loud']" :cols="2" />
  </div>
  <button @click="$emit('click')" class="mt-2 px-3 py-2 hover:bg-[#161616]/40">
    Show Qualified Teams
  </button>
</template>

<style scoped>
</style>
