<template>
  <component
    :is="tag"
    :class="[
      'button flex items-center bg-white text-purple shadow-xl',
      'font-semibold text-lg',
      'focus:outline-none focus:ring ring-orange/75 ring-offset-purple',
      { 'p-5': !noPadding }
    ]"
    @click="$emit('click')">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'a'
    },

    noPadding: {
      type: Boolean,
      default: false
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
  flex-shrink: 0;
}

.button:hover svg {
  transform: rotate(var(--rotate, -5deg)) scale(1.25);
}
</style>