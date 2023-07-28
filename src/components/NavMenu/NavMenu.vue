<script setup lang="ts">
import Liquipedia from '@/assets/logos/liquipedia.svg?component'
</script>

<template>
  <ul>
    <li>
      <a
        class="flex flex-nowrap items-center justify-between md:justify-normal font-bold text-[16px] px-2 hover:bg-slate-200/30"
        href="https://www.twitch.tv/valorant"
        target="_blank"
      >
        VALORANT <i-mdi-twitch class="ml-1" />
      </a>
    </li>
    <li>
      <a
        class="flex flex-nowrap items-center justify-between md:justify-normal font-bold text-[16px] px-2 hover:bg-slate-200/30"
        href="https://www.youtube.com/channel/UCA1d3HFGFUmkKr2JIUA5Vlw"
        target="_blank"
      >
        VALORANT <i-mdi-youtube class="ml-1" />
      </a>
    </li>
    
    <li>
      <a
        class="flex flex-nowrap items-center justify-between md:justify-normal font-bold text-[16px] px-2 hover:bg-slate-200/30"
        href="https://twitter.com/valorantesports"
        target="_blank"
      >
        VALORANT <i-mdi-twitter class="ml-1" />
      </a>
    </li>

    <li>
      <a
        class="flex flex-nowrap items-center justify-between md:justify-normal font-bold text-[16px] px-2 hover:bg-slate-200/30"
        href="https://liquipedia.net/valorant/VCT/2023/Champions"
        target="_blank"
      >
        LIQUIPEDIA <Liquipedia class="ml-1" height="24px" width="24px" />
      </a>
    </li>
  </ul>
</template>

<style scoped>
</style>
