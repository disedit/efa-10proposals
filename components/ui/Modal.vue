<template>
  <transition name="modal">
    <div
      v-if="open"
      ref="dialog"
      tabindex="-1"
      aria-modal="true"
      role="dialog"
      class="
        fixed inset-0 bg-black/50 z-100 p-3
        transition overflow-y-auto overflow-x-hidden"
    >
    <div class="flex items-end md:items-center min-h-full justify-center" @click="closeModal">
      <div
        class="dialog relative bg-white w-full max-w-lg p-6 shadow-lg z-50"
        :aria-labelledby="id + 'modalTitle'"
        :aria-describedby="id + 'modalDescription'"
      >
        <header :id="id + 'modalTitle'" class="flex items-start text-purple mb-4">
          <h2 class="font-semibold text-2xl">
            {{ title }}
          </h2>
          <button class="p-2 ml-auto focus:outline-none focus:ring ring-orange/50" @click="closeModal">
            <span class="sr-only">{{ $t('global.close') }}</span>
            <IconClose class="h-5 w-5 pointer-events-none" />
          </button>
        </header>

        <section :id="id + 'modalDescription'">
          <slot :payload="payload" />
        </section>
      </div>
    </div>
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
        this.$nextTick(() => {
          this.$refs.dialog.focus()
        })
      }
    })
  },

  methods: {
    closeModal (e) {
      if(e.target !== e.currentTarget) return
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