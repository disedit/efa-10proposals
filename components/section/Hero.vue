<template>
  <header class="relative flex min-h-screen bg-purple text-white items-center">
    <UiContainer class="relative z-20 pt-nav">
      <h1 class="text-title font-bold leading-none">
        <em class="underline decoration-orange not-italic">
          {{ $t('hero.title.0') }}
        </em><br>
        {{ $t('hero.title.1') }}<br>
        {{ $t('hero.title.2') }}
      </h1>
      <p class="mt-4 text-2xl md:text-3xl max-w-lg leading-tight">
        {{ $t('hero.introduction') }}
      </p>
    </UiContainer>
    <div class="absolute flex left-0 top-0 right-0 bottom-0 z-10 overflow-hidden pointer-events-none">
      <img src="~assets/images/map-2.png" class="h-full w-full grayscale mix-blend-multiply object-contain object-right-top opacity-25 max-w-none" alt="" />
    </div>
  </header>
</template>

<script>
  export default {

  }
</script>
