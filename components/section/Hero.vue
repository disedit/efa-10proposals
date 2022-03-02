<template>
  <header class="relative flex min-h-[90vh] md:min-h-screen bg-purple text-white items-center">
    <UiContainer class="relative z-20 py-nav">
      <h1 id="HeroTitle" class="opacity-0 translate-y-[20px] text-7xl xl:text-8xl font-semibold leading-none">
        {{ $t('hero.title[0]') }}<br class="hidden md:inline">
        {{ $t('hero.title[1]') }}
      </h1>
      <p id="HeroSubtitle" class="opacity-0 translate-y-[20px] mt-4 mb-8 text-2xl md:text-3xl leading-tight">
        {{ $t('hero.subtitle') }}
      </p>
      <div id="HeroText" class="opacity-0 translate-y-[20px] text-xl introduction max-w-xl">
        <i18n path="hero.introduction.paragraphs[0]" tag="p" class="mb-4">
          <a href="https://futureu.europa.eu/" target="_blank" rel="noopener noreferer">{{ $t('hero.introduction.conference') }}</a>
          <a href="https://twitter.com/search?q=%23CoFoE" target="_blank" rel="noopener noreferer">{{ $t('hero.introduction.hashtags[0]') }}</a>
          <strong>{{ $t('hero.introduction.emphasis[0]') }}</strong>
          <a href="https://e-f-a.org" target="_blank" rel="noopener noreferer">{{ $t('hero.introduction.EFA') }}</a>
          <strong>{{ $t('hero.introduction.emphasis[1]') }}</strong>
        </i18n>
        <i18n path="hero.introduction.paragraphs[1]" tag="p">
          <strong>{{ $t('hero.introduction.emphasis[2]') }}</strong>
          <a href="https://twitter.com/hashtag/thefutureisyours" target="_blank" rel="noopener noreferer">{{ $t('hero.introduction.hashtags[1]') }}</a>
        </i18n>
      </div>
    </UiContainer>
    <div class="background absolute flex inset-0 z-10 overflow-hidden pointer-events-none bg-purple">
      <img src="~assets/images/map-grayscale.png" class="h-full w-full object-contain object-right-top max-w-none pointer-events-none mix-blend-screen opacity-25" alt="" />
    </div>
  </header>
</template>

<script>
  export default {
    mounted () {
      this.animateText()
    },

    methods: {
      animateText () {
        const tl = this.$gsap.timeline()
          tl.to('#HeroTitle', {
            opacity: 1,
            y: 0,
            duration: 1.5
          })
          .to('#HeroSubtitle', {
            opacity: 1,
            y: 0,
            duration: 1
          }, '-=1')
          .to('#HeroText', {
            opacity: 1,
            y: 0,
            duration: .75
          }, '-=0.5')
      }
    }
  }
</script>

<style>
.introduction a {
  @apply underline text-orange hover:text-white;
}
</style>