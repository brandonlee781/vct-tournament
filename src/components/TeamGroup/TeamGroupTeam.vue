<script setup lang="ts">
import type { TeamId } from '@/types'
import { useTeamsStore } from '@/stores/teams'
import teams from '@/team-data'
type TeamGroupsTeamProp = {
  team: TeamId
  eliminated?: boolean
}
const props = defineProps<TeamGroupsTeamProp>()
const teamData = computed(() => teams[props.team])
const teamStore = useTeamsStore()

const hoverDisabled = ref(false)
const onHover = (hover: boolean) => {
  if (hover) {
    teamStore.highlightedTeam = props.team
  } else {
    if (hoverDisabled.value) {
      hoverDisabled.value = false
      return
    }
    teamStore.highlightedTeam = null
  }
}
const onClick = () => {
  if (teamStore.highlightedTeam === props.team) {
    hoverDisabled.value = true
  } else {
    teamStore.highlightedTeam = props.team
  }
}
</script>

<template>
  <div
    class="bg-[#161616]/60 h-32 flex flex-col items-center justify-center border-b-4 border-[#c5b173]"
    :class="[eliminated && 'opacity-70']"
    @mouseenter="onHover(true)"
    @mouseleave="onHover(false)"
    @click="onClick"
  >
    <TeamIcon :team-id="team" v-bind="teamData" height="72px"></TeamIcon>
    <span class="text-xs tracking-wide font-bold text-white uppercase text-center" :class="[eliminated && 'line-through']">
      {{ teamData.name }}
    </span>
  </div>
</template>

<style scoped>
</style>
@/team-data