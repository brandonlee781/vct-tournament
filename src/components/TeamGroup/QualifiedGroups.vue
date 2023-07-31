<script setup lang="ts">
defineEmits<{ click: [] }>()
</script>

<template>
  <div class="qualified grid grid-cols-[3fr,1fr] md:grid-cols-[3fr,1fr,3fr,1fr] gap-2 justify-between mt-2">
    <TeamGroup name="Americas" :teams="['evil_geniuses', 'loud', 'nrg']" />
    <TeamGroup name="Americas LCQ" :teams="['kru']" />
    <TeamGroup name="EMEA" :teams="['fnatic', 'fut', 'navi', 'team_liquid']" class="col-span-2" />
    <TeamGroup name="Pacific" :teams="['drx', 'paper_rex', 't1']" />
    <TeamGroup name="Pacific LCQ" :teams="['zeta_division']" />
    <TeamGroup name="China" :teams="['bilibili', 'edward_gaming', 'fpx']" />
    <TeamGroup name="EMEA LCQ" :teams="['giants']" />
  </div>
  <button @click="$emit('click')" class="groups mt-2 px-3 py-2 hover:bg-[#161616]/40">
    Show Group Stage
  </button>
</template>

<style scoped>
</style>
