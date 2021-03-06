<template>
  <module size="sm" class="module-donation">
    <module-overlay slot="overlay" v-if="!fundraiserActive"></module-overlay>
    <div slot="title">Donate {{ coin.NAME }}</div>
    <div slot="menu">
      <a @click="tutorialLink">
        <i class="fa fa-info-circle"></i>
        {{ coin.UNIT }} Tutorial
      </a>
    </div>
    <div class="body">
      <div class="img">
        <img v-if="coin.NAME === 'Ethereum'"
          src="../assets/images/ethereum.png">
        <img v-else src="../assets/images/bitcoin.png">
      </div>
      <div class="text">
        <btn
          :value="'Donate ' + coin.UNIT"
          @click.native="go('/donate/' + coin.UNIT.toLowerCase())"
          icon="angle-right"
          icon-pos="right"
          size="lg"
          >
        </btn>
        <div class="exchange-rate">
          <span class="key">1 {{ coin.UNIT }}</span>
          <span class="symbol">:</span>
          <span class="value">{{ exchangeRate }} ATOM</span>
        </div>
      </div>
    </div>
    <div slot="footer">
      <div>Minimum Donation: {{ coin.MIN_DONATION }} {{ coin.UNIT }}</div>
    </div>
  </module>
</template>

<script>
import { mapGetters } from 'vuex'
import num from '../scripts/num.js'
import Btn from '@nylira/vue-button'
import Module from './Module'
import ModuleOverlay from './ModuleOverlay'
export default {
  name: 'module-donate',
  components: {
    Btn,
    Module,
    ModuleOverlay
  },
  computed: {
    exchangeRate () {
      if (this.coin.NAME === 'Ethereum') {
        return num.pretty(this.donation.ethRate)
      }
      return num.pretty(this.coin.EXCHANGE_RATE)
    },
    ...mapGetters(['config', 'donation', 'fundraiserActive', 'docs'])
  },
  methods: {
    tutorialLink () {
      if (this.coin.UNIT === 'BTC') window.location.href = this.docs.btc
      if (this.coin.UNIT === 'ETH') window.location.href = this.docs.ethWeb
    },
    go (route) {
      this.$router.push(route)
    }
  },
  props: ['coin']
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.module-donation
  .body
    display flex
    align-items center
    justify-content center
    padding 1rem

  .img
    display flex
    align-items center
    justify-content center
    max-width 6rem

    img
      width 3rem
      display block

  .text
    display flex
    flex-flow column
    justify-content center
    margin-left 1.5rem

    .exchange-rate
      border 1px solid bc
      border-top none
      background c-app-bg
      height 1.5rem

      display flex
      align-items center
      justify-content center

      font-size 0.75rem
      font-weight 400
      > span
        margin-right 0.25rem
        color light

    .min-donation
      font-size 0.75rem
      color light

    .ni-btn-wrapper
      width 12rem

@media screen and (min-width:768px)
  .module-donation
    .body
      padding 1.5rem

    .img img
      width 4rem
</style>
