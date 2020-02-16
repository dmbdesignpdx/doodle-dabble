<template>
  <header id="intro">
    <svg
      id="hero"
      viewBox="0 0 1175 136"
      :class="{ start: $store.state.loaded }"
    >

      <!-- eslint-disable-next-line vue/max-attributes-per-line -->
      <g><path class="d" d="M83,19V80c0,19-15,35-34,35S15,99,15,80,30,45,49,45,83,61,83,80" /><path class="g" d="M74,19v8" /><path d="M19,110C13,103,8,95,7,85" /><path d="M7,77a28,28,0,0,1,1-8" /></g><g><ellipse class="o" cx="151" cy="80" rx="34" ry="35" /><path class="g" d="M121,110c-6-7-11-15-12-25" /><path d="M109,77a28,28,0,0,1,1-8" /></g><g><ellipse class="o" cx="252" cy="80" rx="34" ry="35" /><path class="g" d="M222,110c-6-7-11-15-12-25" /><path d="M210,77a28,28,0,0,1,1-8" /></g><g><path class="d" d="M387,19V80c0,19-15,35-34,35s-34-16-34-35,15-35,34-35,34,16,34,35" /><path class="g" d="M378,19v8" /><path d="M323,110c-6-7-11-15-12-25" /><path d="M311,77a28,28,0,0,1,1-8" /></g><g><path class="l" d="M423,19v95" /><path class="g" d="M414,19v8" /><path d="M414,35V55" /></g><g><path class="e" d="M493,80h34c0-19-15-35-34-35s-34,16-34,35,15,34,35,34" /><path class="g" d="M463,110c-6-7-11-15-12-25" /><path d="M451,77a28,28,0,0,1,1-8" /><path d="M485,83s0,1,2,3" /></g><g><path class="s" d="M621,15,559,121" /><path class="g" d="M608,19l-5,9" /><path d="M599,35,589,53" /></g><g><path class="d" d="M713,19V80c0,19-15,35-34,35s-34-16-34-35,15-35,34-35,34,16,34,35" /><path class="g" d="M704,19v8" /><path d="M649,110c-6-7-11-15-12-25" /><path d="M637,77a28,28,0,0,1,1-8" /></g><g><path class="a" d="M815,114V80c0-19-15-35-34-35s-34,16-34,35,15,35,34,35,34-16,34-35" /><path class="g" d="M751,110c-6-7-11-15-12-25" /><path d="M739,77a28,28,0,0,1,1-8" /></g><g><path class="b" d="M850,19V80c0,19,15,35,34,35s34-16,34-35-15-35-34-35-34,16-34,35" /><path class="g" d="M841,19v8" /><path d="M841,66V76" /><path d="M854,110c-6-7-11-15-12-25" /></g><g><path class="b" d="M952,19V80c0,19,15,35,34,35s34-16,34-35-15-35-34-35-34,16-34,35" /><path class="g" d="M943,19v8" /><path d="M943,66V76" /><path d="M956,110c-6-7-11-15-12-25" /></g><g><path class="l" d="M1056,19v95" /><path class="g" d="M1047,19v8" /><path d="M1047,35V55" /></g><g><path class="e" d="M1126,80h34c0-19-15-35-34-35s-34,16-34,35,15,34,35,34" /><path class="g" d="M1096,110c-6-7-11-15-12-25" /><path d="M1084,77a28,28,0,0,1,1-8" /><path d="M1118,83s0,1,2,3" /></g>

    </svg>

    <!-- eslint-disable-next-line vue/max-attributes-per-line -->
    <svg id="arrow" viewBox="0 0 50 50"><path d="M4,25 25,46 46,25" /></svg>
  </header>
</template>

<script>

export default {
  name: 'SiteIntro',
  computed: {
    intro () {
      return this.$el
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrolling, { passive: true })
  },
  methods: {
    scrolling () {
      let total = parseInt(window.getComputedStyle(this.intro, '::after').height)

      total = total + this.intro.clientHeight - 1

      if (window.pageYOffset >= total) {
        window.removeEventListener('scroll', this.scrolling, { passive: true })
        this.$emit('mainArea')
      }
    }
  }
}

</script>
