<template>
  <main>
    <button @click="toggleNav">
      <svg viewBox="0 0 6 6"><path d="M0,0h6" /><path d="M0,3h6" /><path d="M0,6h6" /> </svg>
    </button>

    <p><span>doode/dabble</span> will showcase a simple app that will be built in Vue, React, and Svelte.</p>
  </main>
</template>

<script>

export default {
  name: 'SiteMain',
  methods: {
    toggleNav () {
      this.$store.commit('toggleState', ['nav'])
    }
  }
}

</script>
