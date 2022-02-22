<template>
  <component
    :is="tag"
    class="
      button flex items-center bg-white text-purple shadow-xl p-5
      font-semibold text-lg hover:underline decoration-orange
      focus:outline-none focus:ring ring-orange/75 ring-offset-4 ring-offset-purple
    ">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'a'
    }
  }
}
</script>

<style>
.button svg {
  color: currentcolor;
  height: 1.25em;
  width: 1.25em;
  margin-left: auto;
  transition: .25s cubic-bezier(.175,.885,.32,1.275);
}

.button:hover svg {
  transform: rotate(-5deg) scale(1.25);
}
</style>