<template>
  <nav id="nav">
    <button @click="toggleNav">
      <svg viewBox="0 0 6 6"><path d="M3,0 0,3 3,6" /><path d="M0,3h6" /></svg>
    </button>

    <nuxt-link
      id="home"
      to="/"
    >
      <!-- eslint-disable-next-line vue/max-attributes-per-line -->
      <svg viewBox="0 0 1175 136" class="logo"><path d="M83,19V80c0,19-15,35-34,35S15,99,15,80,30,45,49,45,83,61,83,80" /><ellipse cx="151" cy="80" rx="34" ry="35" /><ellipse cx="252" cy="80" rx="34" ry="35" /><path d="M387,19V80c0,19-15,35-34,35s-34-16-34-35,15-35,34-35,34,16,34,35" /><path d="M423,19v95" /><path d="M493,80h34c0-19-15-35-34-35s-34,16-34,35,15,34,35,34" /><path d="M621,15,559,121" /><path d="M713,19V80c0,19-15,35-34,35s-34-16-34-35,15-35,34-35,34,16,34,35" /><path d="M815,114V80c0-19-15-35-34-35s-34,16-34,35,15,35,34,35,34-16,34-35" /><path d="M850,19V80c0,19,15,35,34,35s34-16,34-35-15-35-34-35-34,16-34,35" /><path d="M952,19V80c0,19,15,35,34,35s34-16,34-35-15-35-34-35-34,16-34,35" /><path d="M1056,19v95" /><path d="M1126,80h34c0-19-15-35-34-35s-34,16-34,35,15,34,35,34" /></svg>
    </nuxt-link>

    <a
      href="#"
      v-text="'Project One'"
    />
  </nav>
</template>

<script>

export default {
  name: 'SiteNav',
  methods: {
    toggleNav () {
      this.$store.commit('toggleState', ['nav'])
    }
  }
}

</script>
