<template>
  <nav
    :class="[
      'fixed w-full left-0 right-0 top-0',
      'text-white py-3 transition z-50',
      {
        'bg-purple/75 backdrop-blur-lg': scrolled
      }
    ]">
    <UiContainer class="flex items-center">
      <nuxt-link
        to="/"
        :class="[
          'block mr-2 overflow-hidden transition-all shrink-0',
          'focus:ring focus:outline-none ring-orange/50 ring-offset-2 ring-offset-purple',
          {
            'w-logo-mini md:w-logo-mini-lg': scrolledPastFold,
            'w-logo-full md:w-logo-full-lg': !scrolledPastFold
          }
        ]">
        <img src="~assets/logos/logo-en.svg" :alt="$t('global.EFA')" class="w-logo-full md:w-logo-full-lg max-w-none" />
      </nuxt-link>

      <span
        :class="[
          'font-bold text-sm md:text-lg transition mr-2 leading-none',
          {
            'opacity-100': scrolledPastFold,
            'opacity-0': !scrolledPastFold,
          }
        ]">
        {{ $t('global.title') }}
      </span>

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
      window.addEventListener('scroll', this.handleScroll)
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
