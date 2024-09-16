<template>
  <div class="single-page route-page">
    <div class="header">
      <span :class="{
        'cross-out': route.type === 'odstep',
      }">Szlak</span>
      /
      <span :class="{
      'cross-out': route.type === 'szlak',
      }">odstęp</span>
      <space width="14mm">
        <template v-if="route.short">
          &bdquo;{{ route.short }}&rdquo;
        </template>
      </space>
      z i do:
      <space width="60mm" class="text-left">
        {{ route.target }}
      </space>
    </div>

    <div class="table-wrapper">
      <table>
        <colgroup>
          <col class="col-number" />
          <col class="col-number left-light" />
          <col class="col-track" />
          <col class="col-time" />
          <col class="col-time left-light" />
          <col class="col-time" />
          <col class="col-time left-light" />
          <col class="col-time" />
          <col class="col-time left-light" />
          <col class="col-signature" />
          <col class="col-signature left-light" />
          <col class="col-notes" />
          <template v-if="route.isExternal">
            <col class="col-target-name" />
            <col class="col-target-route left-light" />
          </template>
        </colgroup>

        <thead>
          <tr>
            <td colspan="2">Nr pociągu</td>
            <td rowspan="2">Tor sta&shy;cyj&shy;ny</td>
            <td colspan="2">Droga wolna</td>
            <td colspan="2">Pociąg odjechał</td>
            <td colspan="2">Pociąg przyjechał</td>
            <td colspan="2">Podpis dyżurnego ruchu</td>
            <td rowspan="2">Uwagi</td>
            <td colspan="2" v-if="route.isExternal">Sceneria zewnętrzna</td>
          </tr>
          <tr class="top-light">
            <td class="align-top">
              <span class="invalid">nieparzysty</span><br>
              km rosn.<br>
              <span v-if="route.awayIncreasing === true" class="filled-in">wyjazd</span>
              <span v-if="route.awayIncreasing === false" class="filled-in">wjazd</span>
            </td>
            <td class="align-top">
              <span class="invalid">parzysty</span><br>
              km male.
              <span v-if="route.awayIncreasing === true" class="filled-in">wjazd</span>
              <span v-if="route.awayIncreasing === false" class="filled-in">wyjazd</span>
            </td>
            <td>g.</td>
            <td>m.</td>
            <td>g.</td>
            <td>m.</td>
            <td>g.</td>
            <td>m.</td>
            <td>
              do rubr. 4
            </td>
            <td>
              do rubr. 6
            </td>
            <template v-if="route.isExternal">
              <td>
                Nazwa
              </td>
              <td>
                Szlak
              </td>
            </template>
          </tr>
          <tr class="field-number-row">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td colspan="2">4</td>
            <td colspan="2">5</td>
            <td colspan="2">6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <template v-if="route.isExternal">
              <td>100</td>
              <td>101</td>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 25" :key="i">
            <td v-for="i in 12" :key="i" />
            <template v-if="route.isExternal">
              <td />
              <td />
            </template>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="page-number" :class="{
      'text-right': pageNumberRight
    }">
      {{ pageNumber }}
    </div>
  </div>
</template>

<style lang="scss">
.route-page {
  display: flex;
  flex-direction: column;
  padding-bottom: 4mm;

  .header {
    font-weight: bold;
    text-align: center;
    margin-bottom: 1mm;
    display: flex;
    width: 100%;
    align-items: baseline;
    justify-content: center;
  }

  .col-number {
    width: 13mm;
  }

  .col-track {
    width: 5mm;
  }

  .col-time {
    width: 5.5mm;
  }

  .col-signature {
    width: 6mm;
  }

  .col-target-name {
    width: 20mm;
  }

  .col-target-route {
    width: 6mm;
  }

  $border-strong: 0.75pt solid #222;
  $border-light: 0.01pt solid #2228;

  .table-wrapper {
    flex-grow: 1;
  }

  table {
    font-size: 6pt;
    text-align: center;
    border-collapse: collapse;
    width: 100%;
    height: 100%;
    table-layout: fixed;
    border-bottom: $border-strong;
    border-right: $border-strong;

    tr {
      border-top: $border-strong;
    }

    col {
      border-left: $border-strong;
    }

    .left-light {
      border-left: $border-light;
    }

    .top-light {
      border-top: $border-light;
    }

    .align-top {
      vertical-align: top;
    }

    .field-number-row {
      font-size: 4pt;
    }

    thead tr {
      height: 1mm;
    }
  }

  .page-number {
    font-weight: bold;
    margin-top: 4mm;
  }
}
</style>

<script setup lang="ts">
import Space from "./Space.vue";
import {Route} from "../common.ts";

defineProps<{
  pageNumber: number;
  pageNumberRight?: boolean;
  route: Route;
}>();
</script>
