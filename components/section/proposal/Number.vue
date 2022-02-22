<template>
  <span
    :class="[
      'absolute text-number text-white font-semibold p-8 leading-none',
      {
        'left-0 -translate-x-full': !isEven,
        'right-0 translate-x-full': isEven,
        'bottom-12': isDivisibleByThree
      }
    ]"
    :style="translate"
  >
    <div class="rellax" :data-rellax-speed="parallaxSpeed">
      {{ number }}
    </div>
  </span>
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

