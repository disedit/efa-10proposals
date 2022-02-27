<template>
  <nav
    id="Nav"
    :class="[
      'fixed w-full left-0 right-0 top-0',
      'text-white py-3 transition z-50',
      {
        'bg-purple/75 backdrop-blur-lg': scrolled
      }
    ]">
    <UiContainer class="flex items-center">
      <nuxt-link
        :to="localePath('/')"
        :class="[
          'block mr-2 overflow-hidden transition-all shrink-0',
          'focus:ring focus:outline-none ring-orange/50 ring-offset-2 ring-offset-purple',
          {
            'w-[3rem] md:w-[4.25rem]': scrolledPastFold,
            'w-[6rem] md:w-[8.25rem]': !scrolledPastFold
          }
        ]">
        <img src="~assets/logos/logo-en.svg" :alt="$t('global.EFA')" class="w-[6rem] md:w-[8.25rem] max-w-none" />
      </nuxt-link>

      <nuxt-link
        :to="localePath('/')"
        :class="[
          'font-semibold text-sm md:text-lg transition mr-2 leading-none',
          {
            'opacity-100': scrolledPastFold,
            'opacity-0': !scrolledPastFold,
          }
        ]">
        {{ $t('global.title') }}
      </nuxt-link>

      <UiLanguageSwitcher class="ml-auto" />
    </UiContainer>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        scrolled: false,
        scrolledPastFold: false
      }
    },

    mounted () {
      if (this.$route.path.includes('proposal')) {
        this.scrolled = true
        this.scrolledPastFold = true
      } else {
        window.addEventListener('scroll', this.handleScroll)
      }
    },

    methods: {
      handleScroll () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight
        this.scrolled = scrollTop > 0
        this.scrolledPastFold = scrollTop > viewportHeight / 2
      }
    }
  }
</script>
