<template>
  <div class="single-page title-page">
    <div class="top">
      <div class="bold center-row">
        Zakład <space>{{ config.district }}</space>
      </div>
      <div class="bold center-row">
        Stacja <space>{{ config.station }}</space>
      </div>
      <div class="center-row">
        <either first="nastawnia" second="posterunek" :choice="{
          'nastawnia': 'first',
          'posterunek': 'second',
          'unset': 'none',
        }[config.checkpointType]" />
        <space v-if="config.checkpoint !== ''">&bdquo;{{ config.checkpoint }}&rdquo;</space>
        <space v-else />
      </div>
      <div class="center-row">
        <either first="szlak" second="odstęp" :choice="leftRoute.choice" />
        <space>{{ leftRoute.title }}</space>
      </div>
      <div>
        i
      </div>
      <div class="center-row">
        <either first="szlak" second="odstęp" :choice="rightRoute.choice" />
        <space>
          <nothing v-if="rightRoute.title === null" />
          <template v-else>{{ rightRoute.title }}</template>
        </space>
      </div>
    </div>

    <h1>Dziennik ruchu</h1>
    <h2>posterunku zapowiadawczego</h2>

    <div class="bottom">
      <div class="bottom-info">
        <div class="center-row">
          Zaczęty dnia<space />20<space width="8mm" />r.
        </div>
        <div class="center-row">
          Zakończony dnia<space />20<space width="8mm" />r.
        </div>
        <div class="numbered-page-count">
          <div class="center-row">
            Liczba stron ponumerowanych<space last>{{ numberedPageCount }}</space>
          </div>
          <space width="100%" first last>{{ pageCountString(numberedPageCount) }}</space>
          <div class="caption">
            (słownie)
          </div>
        </div>
        <div>
          <space width="100%" first last />
          <div class="caption">
            (podpis naczelnika stacji)
          </div>
        </div>
      </div>

      <div class="footer">
        inspirowane drukiem PKP S.A. (R 146)
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.title-page {
  display: grid;
  grid-template-rows: 1fr auto auto 1fr;
  grid-template-columns: 1fr;

  font-size: 8pt;

  .top {
    display: grid;
    grid-template-rows: 11mm 11mm 11mm 11mm auto 11mm;
    justify-content: center;
    justify-self: start;
    align-self: start;
    align-items: center;

    & > div {
      width: 75mm;
    }

    .either {
      min-width: 14mm;
    }
  }

  .bottom {
    width: 100%;
    align-self: end;
    display: flex;
    flex-direction: column;
  }

  .bottom-info {
    align-self: end;

    & > div {
      width: 60mm;
      margin-top: 4mm;
    }

    .numbered-page-count {
      & > div:first-child {
        margin-bottom: 1mm;
      }
    }
  }

  h1, h2 {
    text-transform: uppercase;
    margin: 2pt;
    font-weight: bold;
    letter-spacing: 0.05em;
    text-align: center;
  }

  h1 {
    font-size: 30pt;
  }

  h2 {
    font-size: 13pt;
  }

  .footer {
    font-weight: bold;
    margin-top: 10mm;
    font-size: 6pt;
  }
}
</style>

<script setup lang="ts">
import Space from "./Space.vue";
import Either from "./Either.vue";
import {Config, pageCountString, Route} from "../common.ts";
import {computed} from "vue";
import Nothing from "./Nothing.vue";

const props = defineProps<{
  numberedPageCount: number;
  config: Config;
}>();

const getRouteTitle = (route: Route) => {
  if (!route.short) return route.target;
  if (!route.target) return `„${route.short}”`;
  return `${route.target} („${route.short}”)`;
};

const typeChoices = {
  szlak: 'first',
  odstep: 'second',
  unset: 'none',
} as const;

const leftRoute = computed(() => ({
  title: getRouteTitle(props.config.leftRoute),
  choice: typeChoices[props.config.leftRoute.type]
}));
const rightRoute = computed(() => {
  if (props.config.rightRoute === null) return {
    title: null,
    choice: 'none',
  };
  return {
    title: getRouteTitle(props.config.rightRoute),
    choice: typeChoices[props.config.rightRoute.type]
  };
});
</script>
