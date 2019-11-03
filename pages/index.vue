<template>
  <section>
    <Navigation :hide-at-top="true" />

    <Cover />

    <Intro />
    <When />
    <Where />

    <Disclaimer />
  </section>
</template>

<script>
import Cover from '@/components/cover/Cover.vue'
import Where from '@/components/where/Where.vue'
import Intro from '@/components/intro/Intro.vue'
import When from '@/components/when/When.vue'
import Navigation from '@/components/navigation/Navigation.vue'
import Disclaimer from '@/components/disclaimer/Disclaimer.vue'

export default {
  name: 'HomePage',
  components: { Cover, Intro, When, Where, Navigation, Disclaimer }
}
</script>
