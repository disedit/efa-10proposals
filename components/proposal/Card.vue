<template>
  <article class="opacity-0 card bg-white text-black shadow-xl p-5">
    <slot />
  </article>
</template>

<style>
  .card h2 {
    @apply text-4xl mb-4 text-purple font-semibold;
  }

  .card h2 strong {
    @apply font-semibold bg-gradient-to-r from-orange to-orange;

    background-size: 0 .15em;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size 1s;
  }

  .card h2 strong:nth-child(3) {
    transition-delay: .75s;
  }

  .card.highlight h2 strong {
    background-size: 100% .15em;
  }

  .card p {
    @apply text-gray-mid text-lg mb-3;
  }

  .card p:last-child {
    @apply mb-0;
  }
</style>
