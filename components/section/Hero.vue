<template>
  <header class="relative flex min-h-screen bg-purple text-white items-center">
    <UiContainer class="relative z-20 pt-nav">
      <h1 class="text-title font-bold leading-none">
        {{ $t('hero.title.0') }}<br>
        {{ $t('hero.title.1') }}<br>
        {{ $t('hero.title.2') }}
      </h1>
      <p class="mt-4 text-3xl max-w-lg">
        {{ $t('hero.introduction') }}
      </p>
    </UiContainer>
    <div class="absolute flex top-0 right-0 bottom-0 z-10 overflow-hidden">
      <img src="~assets/images/map-2.png" class="h-full opacity-25 max-w-none" alt="" />
    </div>
  </header>
</template>

<script>
  export default {

  }
</script>
