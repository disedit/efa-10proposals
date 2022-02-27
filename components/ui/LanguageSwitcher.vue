<template>
  <div class="relative">
    <select
      :aria-label="$t('global.language')"
      class="text-white border border-white appearance-none rounded-none bg-transparent py-1 pl-2 pr-12 focus:outline-0 focus:ring-2 ring-offset-2 ring-offset-purple ring-orange/50"
      @input="switchLocale"
    >
      <option
        v-for="locale in locales"
        :key="locale.code"
        :selected="locale.code === $i18n.locale"
        :value="locale.code"
      >
        {{ locale.name }}
      </option>
    </select>
    <IconChevDown class="absolute top-1/2 right-2 -translate-y-2/4" />
  </div>
</template>

<script>
  export default {
    computed: {
      locales () {
        return this.$i18n.locales
      }
    },

    methods: {
      switchLocale (e) {
        const toLocale = e.target.value
        this.$router.push(this.switchLocalePath(toLocale))
      }
    }
  }
</script>
