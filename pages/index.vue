<template>
  <main>
    <SectionHero />
    <SectionProposal
      v-for="proposal in proposals"
      :key="proposal.number"
      :proposal="proposal"
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
  }
}
</script>
