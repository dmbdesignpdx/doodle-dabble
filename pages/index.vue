<template>
  <div
    id="nuxt-base"
    :class="{
      main: !isIntro,
      light: !isDark,
      navHide: !navShow,
    }"
  >
    <SiteIntro
      v-show="isIntro"
      @mainArea="enterMain"
    />

    <SiteNav />

    <SiteMain />

    <SiteFooter />
  </div>
</template>

<script>

import { mapMutations } from 'vuex'

import SiteFooter from '../components/SiteFooter.vue'
import SiteIntro from '../components/SiteIntro.vue'
import SiteMain from '../components/SiteMain.vue'
import SiteNav from '../components/SiteNav.vue'

export default {
  name: 'Index',
  components: {
    SiteFooter,
    SiteIntro,
    SiteMain,
    SiteNav
  },
  computed: {
    isIntro () {
      return this.$store.state.intro
    },
    isDark () {
      return this.$store.state.dark
    },
    navShow () {
      return this.$store.state.nav
    }
  },
  beforeMount () {
    window.addEventListener('load', () => {
      this.setState(['loaded', true])
    }, { once: true })
  },
  methods: {
    ...mapMutations(['toggleStates', 'setState']),
    enterMain () {
      this.toggleStates(['intro', 'loaded'])
    }
  }
}

</script>
