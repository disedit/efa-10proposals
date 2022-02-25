<template>
  <header class="relative flex min-h-screen bg-purple text-white items-center">
    <UiContainer class="relative z-20 py-nav">
      <h1 class="text-title font-semibold leading-none">
        {{ $t('hero.title[0]') }}<br>
        {{ $t('hero.title[1]') }}
      </h1>
      <p class="mt-4 mb-8 text-2xl md:text-3xl leading-tight">
        {{ $t('hero.subtitle') }}
      </p>
      <div class="text-xl introduction max-w-xl">
        <i18n path="hero.introduction.paragraphs[0]" tag="p" class="mb-4">
          <a href="https://futureu.europa.eu/" target="_blank" rel="noopener noreferer">{{ $t('hero.introduction.conference') }}</a>
          <a href="https://twitter.com/search?q=%23CoFoE" target="_blank" rel="noopener noreferer">{{ $t('hero.introduction.hashtags[0]') }}</a>
          <a href="https://e-f-a.org" target="_blank" rel="noopener noreferer">{{ $t('hero.introduction.EFA') }}</a>
        </i18n>
        <i18n path="hero.introduction.paragraphs[1]" tag="p">
          <a href="https://twitter.com/hashtag/thefutureisyours" target="_blank" rel="noopener noreferer">{{ $t('hero.introduction.hashtags[1]') }}</a>
        </i18n>
      </div>
    </UiContainer>
    <div class="absolute flex left-0 top-0 right-0 bottom-0 z-10 overflow-hidden pointer-events-none">
      <img src="~assets/images/map-2.png" class="h-full w-full grayscale mix-blend-multiply object-contain object-right-top opacity-25 max-w-none" alt="" />
    </div>
  </header>
</template>

<script>
  export default {}
</script>

<style>
.introduction a {
  @apply underline decoration-orange hover:decoration-white;
}
</style>