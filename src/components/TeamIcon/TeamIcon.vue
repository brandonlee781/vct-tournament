<script setup lang="ts">
import type { FunctionalComponent, SVGAttributes } from 'vue'
import type { TeamId } from '@/types'
import BiliBiliLogo from '@/assets/logos/bilibili.svg?skipsvgo'
import DRXLogo from '@/assets/logos/drx.svg?skipsvgo'
import EdwardLogo from '@/assets/logos/edward_gaming.svg?skipsvgo'
import EGLogo from '@/assets/logos/evil_geniuses.svg?skipsvgo'
import FnaticLogo from '@/assets/logos/fnatic.svg?skipsvgo'
import FPXLogo from '@/assets/logos/fpx.svg?skipsvgo'
import FutLogo from '@/assets/logos/fut.svg?skipsvgo'
import GiantsLogo from '@/assets/logos/giants.svg?skipsvgo'
import KruLogo from '@/assets/logos/kru.svg?skipsvgo'
import LoudLogo from '@/assets/logos/loud.svg?skipsvgo'
import NaviLogo from '@/assets/logos/navi.svg?skipsvgo'
import NRGLogo from '@/assets/logos/nrg.svg?skipsvgo'
import PaperRexLogo from '@/assets/logos/paper_rex.svg?skipsvgo'
import TOneLogo from '@/assets/logos/t1.svg?skipsvgo'
import TLLogo from '@/assets/logos/team_liquid.svg?skipsvgo'
import ZetaLogo from '@/assets/logos/zeta_division.svg?skipsvgo'
import { useTeamsStore } from '@/stores/teams'

type TeamIconProps = {
  teamId: TeamId
  color: { primary: string; secondary: string; background?: string }
  icon?: { height?: string; width?: string }
}
const props = defineProps<TeamIconProps>()
const teamStore = useTeamsStore()

const teamLogo = computed(() => {
  const teams: { [key in TeamId]: FunctionalComponent<SVGAttributes, {}, any> } = {
    'bilibili': BiliBiliLogo,
    'drx': DRXLogo,
    'edward_gaming': EdwardLogo,
    'evil_geniuses': EGLogo,
    'fnatic': FnaticLogo,
    'fpx': FPXLogo,
    'fut': FutLogo,
    'giants': GiantsLogo,
    'kru': KruLogo,
    'loud': LoudLogo,
    'navi': NaviLogo,
    'nrg': NRGLogo,
    'paper_rex': PaperRexLogo,
    't1': TOneLogo,
    'team_liquid': TLLogo,
    'zeta_division': ZetaLogo
  }

  return teams[props.teamId]
})

const primaryColor = computed(() => {
  if (teamStore.highlightedTeam === props.teamId) {
    return props.color.primary
  }
  return 'white'
})
const secondaryColor = computed(() => {
  if (teamStore.highlightedTeam === props.teamId) {
    return props.color.secondary
  }
  return 'white'
})
const backgroundColor = computed(() => {
  if (teamStore.highlightedTeam === props.teamId) {
    return props.color.background ?? 'none'
  }
  return 'none'
})
</script>

<template>
  <component :is="teamLogo" :height="icon?.height || '48px'" :width="icon?.width || '48px'" />
</template>

<style scoped>
:deep(.primary) {
  fill: v-bind(primaryColor)
}
:deep(.secondary) {
  fill: v-bind(secondaryColor)
}
:deep(.background) {
  fill: v-bind(backgroundColor)
}
</style>
