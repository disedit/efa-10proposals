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
  data () {
    return {
      rellax: null
    }
  },

  head () {
    return this.$nuxtI18nHead()
  },

  watch: {
    '$route' () {
      this.rellax.destroy()
      setTimeout(() => {
        this.rellax = new Rellax('.rellax')
      }, 1000)
    }
  },

  mounted () {
    this.rellax = new Rellax('.rellax')
  }
}
</script>
