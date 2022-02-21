<template>
  <span
    :class="[
      'absolute text-9xl text-white font-semibold p-8 leading-none',
      {
        'left-0 -translate-x-full translate-y-[10%]': !isEven,
        'right-0 translate-x-full translate-y-[10%]': isEven,
        'top-6': !isDivisibleByThree,
        'bottom-12': isDivisibleByThree
      }
    ]">
    {{ number }}
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

    isDivisibleByFour() {
      return this.number % 4 === 0
    },
  }
}
</script>

