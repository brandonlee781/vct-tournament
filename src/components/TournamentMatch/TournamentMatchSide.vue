<script setup lang="ts">
import type { Placeholder, Team } from '@/types';

type TournamentMatchSideProps = {
  team?: Team
  placeholder?: Placeholder
  winnerLoser?: boolean
}
const props = defineProps<TournamentMatchSideProps>()
</script>

<template>
  <TeamIcon v-if="team" :team-id="team.id" v-bind="team" class="mb-1"></TeamIcon>
  <div v-else-if="placeholder && winnerLoser" class="flex flex-col text-center">
    <span v-if="placeholder?.winner" class="text-xs font-bold text-white">WINNER OF</span>
    <span v-else-if="placeholder?.loser" class="text-xs font-bold text-white">LOSER OF</span>

    <span class="col-start-1 row-start-2 text-3xl font-bold text-white">{{ placeholder?.text }}</span>
  </div>
</template>

<style scoped>
</style>
