<template>
  <transition name="modal">
    <div v-if="open" class="fixed flex inset-0 bg-black/50 z-100 p-3 items-center justify-center transition">
      <div
        ref="dialog"
        tabindex="0"
        role="dialog"
        class="dialog relative bg-white w-full max-w-lg p-6 shadow-lg z-50"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header id="modalTitle" class="flex items-start text-purple mb-4">
          <h2 class="font-semibold text-2xl">
            {{ title }}
          </h2>
          <button class="p-2 ml-auto focus:outline-none focus:ring ring-orange/50" @click="closeModal">
            <span class="sr-only">{{ $t('global.close') }}</span>
            <IconClose class="h-5 w-5" />
          </button>
        </header>

        <section id="modalDescription">
          <slot />
        </section>
      </div>
      <button class="fixed inset-0 z-10 transition" @click="closeModal">
        <span class="sr-only">{{ $t('global.close') }}</span>
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      open: false,
      focusBackTo: '#main',
      payload: null,
      title: ''
    }
  },

  mounted () {
    this.$root.$on('showModal', (id, { title, focusBackTo, payload }) => {
      if (id === this.id) {
        this.open = true
        this.title = title
        this.focusBackTo = focusBackTo
        this.payload = payload
        document.documentElement.classList.add('overflow-hidden')
        this.$nextTick(() => this.$refs.dialog.focus())
      }
    })
  },

  methods: {
    closeModal () {
      this.open = false
      document.documentElement.classList.remove('overflow-hidden')
      this.$nextTick(() => {
        const element = document.querySelector(this.focusBackTo)
        element.focus()
      })
    }
  }
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity .5s ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .dialog,
.modal-leave-active .dialog {
  transition: .25s ease;
}

.modal-enter .dialog,
.modal-leave-to .dialog {
  transform: translateY(2rem);
  opacity: 0;
}
</style>