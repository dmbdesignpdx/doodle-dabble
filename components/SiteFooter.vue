<template>
  <footer id="footer">
    <address>
      Made with 🦄🌈 by

      <a
        href="https://danielblake.design"
        target="_blank"
        rel="author"
        v-text="'Daniel Blake'"
      />.
    </address>

    <p>Copyright 2020 Daniel Blake.</p>

    <label
      title="Click to change theme"
      @change="changeTheme"
    >

      <span>Theme: </span>

      <input
        type="checkbox"
        name="theme"
      >

    </label>
  </footer>
</template>

<script>

export default {
  name: 'SiteFooter',
  data () {
    return {
      links: {
        'Vue.js': 'https://vuejs.org/',
        'Nuxt.js': 'https://nuxtjs.org/',
        Github: 'https://github.com/',
        Netlify: 'https://netlify.com'
      }
    }
  },
  methods: {
    changeTheme () {
      this.$store.commit('toggleState', ['dark'])
    }
  }
}

</script>
