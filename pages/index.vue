<template>
  <main id="main">
    <SectionHero />
    <SectionProposal
      v-for="proposal in proposals"
      :key="proposal.number"
      :proposal="proposal"
      class="my-3"
    />
  </main>
</template>

<script>
export default {
  async asyncData ({ i18n: { locale }, $content }) {
    const proposals = await $content(locale).sortBy('number').fetch()
    return {
      proposals
    }
  },

  head () {
    return {
      title: `${this.$t('global.title')} - ${this.$t('global.EFA')}`,
      meta: [
        { hid: 'description', name: 'description', content: this.$t('meta.description') },
        { hid: 'og:description', property: 'og:description', content: this.$t('meta.description') },
        { hid: 'og:image', property: 'og:image', content: this.$t('meta.thumbnail') },
        { hid: 'og:url', property: 'og:url', content: this.$t('meta.url') },
        { hid: 'twitter:description', property: 'twitter:description', content: this.$t('meta.description') },
        { hid: 'twitter:image', property: 'twitter:image', content: this.$t('meta.thumbnail') },
        { hid: 'twitter:url', property: 'twitter:url', content: this.$t('meta.url') }
      ]
    }
  }
}
</script>
