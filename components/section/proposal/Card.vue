<template>
  <article class="card bg-white text-black shadow-xl p-5">
    <slot />
  </article>
</template>

<style>
  .card h2 {
    @apply text-4xl mb-4 text-purple font-semibold;
  }

  .card h2 strong {
    @apply underline decoration-orange font-semibold;
  }

  .card p {
    @apply text-gray-mid text-lg mb-3;
  }

  .card p:last-child {
    @apply mb-0;
  }
</style>
