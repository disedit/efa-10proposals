<template>
  <nuxt-link
    :to="localePath('proposal/' + number)"
    :class="[
      'text-8xl text-white font-semibold leading-none',
      'md:absolute md:text-9xl lg:text-number md:p-8',
      {
        'md:left-0 md:-translate-x-full': !isEven,
        'md:right-0 md:translate-x-full': isEven,
      }
    ]"
    :style="translate"
  >
    <div
      class="rellax"
      data-rellax-speed="0"
      :data-rellax-tablet-speed="parallaxSpeed"
      :data-rellax-desktop-speed="parallaxSpeed"
    >
      <span class="md:hidden">#</span>{{ number }}
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      required: true
    },
  },

  computed: {
    isEven () {
      return this.number % 2 === 0
    },

    translate() {
      const { number } = this
      const maxNumber = 10
      const min = 40
      const max = 300

      const translate = min + (number - 1) * ((max - min) / (maxNumber - 1))

      return {
        '--tw-translate-y': `${translate}%`,
      }
    },

    parallaxSpeed () {
      const { number } = this
      const maxNumber = 10
      const min = 1
      const max = 0.5

      return min + (number - 1) * ((max - min) / (maxNumber - 1))
    }
  }
}
</script>

