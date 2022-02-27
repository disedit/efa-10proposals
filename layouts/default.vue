<template>
  <div class="bg-purple overflow-hidden">
    <UiSkipToContent />
    <UiNav />
    <Nuxt />
    <UiFooter />
    <UiModal id="explainer">
      <ProposalExplainer />
    </UiModal>
    <UiModal id="share">
      <template slot-scope="{ payload }">
        <ProposalShare :payload="payload" />
      </template>
    </UiModal>
  </div>
</template>

<script>
import Rellax from 'rellax'

export default {
  head () {
    return this.$nuxtI18nHead()
  },

  mounted () {
    // eslint-disable-next-line
    const rellax = new Rellax('.rellax')
  }
}
</script>
