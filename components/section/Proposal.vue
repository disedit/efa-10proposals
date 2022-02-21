<template>
  <div>
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
