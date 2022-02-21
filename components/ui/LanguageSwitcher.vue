<template>
  <div>
    <select @input="switchLocale">
      <option
        v-for="locale in locales"
        :key="locale.code"
        :selected="locale.code === $i18n.locale"
        :value="locale.code"
      >
        {{ locale.name }}
      </option>
    </select>
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
