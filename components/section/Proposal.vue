<template>
  <div class="min-h-screen bg-purple text-white">
    {{ proposal.number }}
    <nuxt-content :document="proposal" />
  </div>
</template>

<script>
  export default {
    props: {
      proposal: {
        type: Object,
        required: true
      }
    }
  }
</script>
