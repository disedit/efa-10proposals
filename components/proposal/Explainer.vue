<template>
  <div>
    <p>{{ $t('explainer.intro') }}</p>
    <ol class="list mb-4">
      <li>
        <i18n path="explainer.list[0]">
          <a href="https://futureu.europa.eu/pages/getinvolved" target="_blank" rel="noopener noreferer" class="text-purple underline hover:text-orange">
            https://futureu.europa.eu/pages/getinvolved
          </a>
        </i18n>
      </li>
      <li>{{ $t('explainer.list[1]') }}</li>
      <li>{{ $t('explainer.list[2]') }}</li>
      <li>{{ $t('explainer.list[3]') }}</li>
    </ol>
    <p v-html="$t('explainer.translation')"></p>
    <p>{{ $t('explainer.thanks') }}</p>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
p:not(:last-child) {
  @apply mb-4;
}

a {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
}

.list {
  counter-reset: number;
}

.list li {
  @apply flex;
}

.list li::before {
  counter-increment: number;
  content: counter(number);
  @apply text-purple mr-3 text-lg font-semibold border self-baseline rounded-full;
  @apply flex h-10 w-10 items-center justify-center shrink-0;
}

.list li:not(:last-child) {
  @apply mb-2;
}
</style>