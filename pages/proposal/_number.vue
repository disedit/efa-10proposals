<template>
  <main id="main">
    <SectionProposal :proposal="proposal" class="pt-32" />
    <nuxt-link
      :to="localePath('/')"
      class="
        block hover:text-white hover:bg-orange text-3xl md:text-4xl
        py-6 px-2 bg-white text-purple
      "
    >
      <UiContainer class="flex items-center">
        {{ $t('proposal.seeall') }}
        <IconArrow class="h-10 w-10 ml-auto" />
      </UiContainer>
    </nuxt-link>
  </main>
</template>

<script>
  export default {
    async asyncData ({ params: { number }, i18n: { locale }, $content }) {
      const proposal = await $content(locale + '/' + number).fetch()

      return {
        proposal
      }
    },

    head () {
      const { proposal } = this
      const url = this.$t('meta.url') + '/proposal/' + proposal.number
      return {
        title: `#${proposal.number}: ${proposal.title} - ${this.$t('global.title')} - ${this.$t('global.EFA')}`,
        meta: [
          { hid: 'description', name: 'description', content: this.$t('meta.description') },
          { hid: 'og:description', property: 'og:description', content: this.$t('meta.description') },
          { hid: 'og:image', property: 'og:image', content: proposal.image },
          { hid: 'og:url', property: 'og:url', content: url },
          { hid: 'twitter:description', property: 'twitter:description', content: this.$t('meta.description') },
          { hid: 'twitter:image', property: 'twitter:image', content: proposal.image },
          { hid: 'twitter:url', property: 'twitter:url', content: url }
        ]
      }
    }
  }
</script>
