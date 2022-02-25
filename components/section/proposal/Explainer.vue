<template>
  <div>
    <p>{{ $t('explainer.intro') }}</p>
    <ul>
      <li>{{ $t('explainer.list[0]') }}</li>
      <li>{{ $t('explainer.list[1]') }}</li>
      <li>{{ $t('explainer.list[2]') }}</li>
      <li>{{ $t('explainer.list[3]') }}</li>
    </ul>
    <p v-html="$t('explainer.translation')"></p>
    <p>{{ $t('explainer.thanks') }}</p>
  </div>
</template>

<script>
export default {}
</script>
