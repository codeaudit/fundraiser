<template>
  <module class="module-donations">
    <div slot="title">Donation History</div>
    <div class="md-sections">
      <section>
        <p>View the history of Bitcoin donations on Blockchain (blockchain.info):</p>
        <a :href="this.btcLink" rel="noopener noreferrer" target="_blank">
          <btn class="link-button" icon="external-link" value="BTC Donations"></btn>
        </a>
      </section>
      <section>
        <p>View the history of Ether donations on Etherscan (etherscan.io):</p>
        <a :href="this.ethLink" rel="noopener noreferrer" target="_blank">
          <btn class="link-button" icon="external-link" value="ETH Donations"></btn>
        </a>
      </section>
    </div>
    </div>
  </module>
</template>

<script>
import { mapGetters } from 'vuex'
import cfr from 'cosmos-fundraiser'
import Module from './Module'
import ModuleOverlay from './ModuleOverlay'
import Btn from '@nylira/vue-button'
export default {
  name: 'module-donations',
  components: {
    Btn,
    Module,
    ModuleOverlay
  },
  computed: {
    ...mapGetters(['config', 'donations', 'fundraiserActive'])
  },
  data: () => ({
    details: true,
    btcLink: `https://blockchain.info/address/${cfr.bitcoin.EXODUS_ADDRESS}`,
    ethLink: `https://etherscan.io/address/${cfr.ethereum.FUNDRAISER_CONTRACT}`
  }),
  mounted () {
    document.body.scrollTop = document.documentElement.scrollTop = 0
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.link-button
  margin auto
  display block

.md-sections
  display flex
  flex-flow column nowrap
  section
    flex 1
    border-bottom 1px solid bc
    padding 1rem
    display flex
    flex-flow column nowrap
    justify-content center
    p
      margin-bottom 1rem
      font-size 0.875rem
      color dim
    .ni-btn-wrapper
      max-width 20rem
      margin 0 auto
    &:last-of-type
      border none

@media screen and (min-width: 768px)
  .md-sections
    flex-flow row nowrap
    section
      border-bottom none
      border-right 1px solid bc
      padding 1.5rem 3rem
      p
        font-size 1rem
        text-align center
        max-width 20rem
        margin 0 auto 1rem
</style>
