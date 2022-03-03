<template>
  <div>
    <h3 class="border border-gray-mid/50 text-gray-mid p-3 mb-4 flex">
      <img :src="payload.image" alt="" class="rounded mr-3 w-20 object-cover" />
      {{ payload.text }}
    </h3>
    <div class="grid md:grid-cols-2 gap-4">
      <a :href="facebookUrl" class="share-button bg-[#1778f2] hover:bg-[#1778f2]/75" target="_blank" rel="noopener noreferer">
        <IconFacebook />
        Facebook
      </a>
      <a :href="twitterUrl" class="share-button bg-[#1da1f2] hover:bg-[#1da1f2]/75" target="_blank" rel="noopener noreferer">
        <IconTwitter />
        Twitter
      </a>
      <a :href="whatsappUrl" class="share-button bg-[#25d366] hover:bg-[#25d366]/75" target="_blank" rel="noopener noreferer">
        <IconWhatsapp />
        WhatsApp
      </a>
      <a :href="telegramUrl" class="share-button bg-[#08c] hover:bg-[#08c]/75" target="_blank" rel="noopener noreferer">
        <IconTelegram />
        Telegram
      </a>
      <button v-if="canShare" class="col-span-2 p-4 font-semibold transition text-center text-gray-mid bg-white border border-gray-mid/50 w-full hover:border-purple hover:text-purple focus:ring-purple/25 focus:border-purple focus:text-purple" @click="share">
        {{ $t('proposal.more_options') }}
      </button>
      <div class="flex col-span-2">
        <input
          :value="payload.url"
          class="text-sm border border-gray-mid/50 text-gray-mid p-2 w-full focus:outline-none hover:text-black hover:border-purple focus:ring focus:text-black ring-purple/25 focus:border-purple transition"
          @focus="$event.target.select()"
        />
        <button
          :class="[
            'text-sm border border-gray-mid/50 text-gray-mid py-2 px-3 -ml-px focus:outline-none focus:ring whitespace-nowrap text-center min-w-[125px]',
            { 'hover:border-purple hover:text-purple focus:ring-purple/25 focus:border-purple focus:text-purple': !copied },
            { 'text-[#25d366] border-[#25d366] bg-[#25d366]/10': copied }
          ]"
          @click="copyToClipboard"
        >
          {{ copied ? $t('proposal.copied') : $t('proposal.copy') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    payload: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      copied: false
    }
  },

  computed: {
    canShare () {
      return !!navigator.share
    },
    facebookUrl () {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.payload.url}`
    },
    twitterUrl () {
      return `https://twitter.com/intent/tweet/?text=${this.payload.text}&url=${this.payload.url}&hashtags=CoFoE,TheFutureIsYours`
    },
    whatsappUrl () {
      return `whatsapp://send?text=${this.payload.text} ${this.payload.url}`
    },
    telegramUrl () {
      return `https://t.me/share/url?url=${this.payload.url}&text=${this.payload.text}`
    }
  },

  methods: {
    copyToClipboard () {
      const input = document.createElement('input')
      input.value = this.payload.url
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
      this.copied = true
      setTimeout(() => { this.copied = false }, 2000)
    },

    async share () {
      await navigator.share(this.payload)
    }
  }
}
</script>

<style scoped>
.share-button {
  @apply flex text-white p-4 items-center font-semibold transition;
}

.share-button svg {
  @apply h-5 w-5 mr-2;
}
</style>