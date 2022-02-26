<template>
  <section class="proposal relative md:min-h-screen bg-purple text-white py-7">
    <ProposalBackground :image="proposal.image" />
    <UiContainer
      class="rellax relative z-40"
      data-rellax-speed="0"
      :data-rellax-tablet-speed="parallaxSpeed"
      :data-rellax-desktop-speed="parallaxSpeed"
    >
      <div
        :class="[
          'relative md:max-w-card grid grid-cols-12 gap-5',
          {
            'mr-auto': isEven,
            'ml-auto': !isEven,
            '-translate-y-[15%]': proposal.number === 1 && !$route.params.number
          }
        ]"
      >
        <ProposalNumber :number="proposal.number" />
        <ProposalCard class="col-span-12">
          <nuxt-content :document="proposal" />
        </ProposalCard>
        <div class="col-span-8 flex">
          <ProposalButton
            :href="proposal.link"
            target="_blank"
            rel="noopener noreferer"
            class="grow relative z-10 focus:x-20"
          >
            <IconEndorse class="ml-0 mr-4" />
            {{ $t('proposal.support') }}
            <span class="sr-only">{{ $t('global.newwindow') }}</span>
          </ProposalButton>
          <ProposalButton
            :id="'explainer' + proposal.number"
            tag="button"
            class="group relative focus:z-20"
            no-padding
            @click="showExplainer"
          >
            <div class="border-l border-l-purple/25 px-4 py-3">
              <IconQuestion style="--rotate: 5deg" />
            </div>
            <div class="group-hover:opacity-100 w-24 opacity-0 bg-black/90 py-1 px-2 rounded text-white absolute text-xs font-normal transition translate-x-12 pointer-events-none">
              {{ $t('proposal.explainer') }}
            </div>
          </ProposalButton>
        </div>
        <ProposalButton
          :id="'share' + proposal.number"
          tag="button"
          class="col-span-4"
          @click="shareProposal"
        >
          <span class="mr-2">{{ $t('proposal.share') }}</span>
          <IconShare class="ml-auto" style="--rotate: 5deg" />
        </ProposalButton>
      </div>
    </UiContainer>
  </section>
</template>

<script>
  export default {
    props: {
      proposal: {
        type: Object,
        required: true
      }
    },

    computed: {
      isEven () {
        return this.proposal.number % 2 === 0
      },

      parallaxSpeed () {
        const { number } = this.proposal
        const maxNumber = 10
        const min = 1.25
        const max = 0.15

        return min + (number - 1) * ((max - min) / (maxNumber - 1))
      }
    },

    methods: {
      showExplainer () {
        this.$root.$emit('showModal', 'explainer', {
          title: this.$t('proposal.explainer'),
          focusBackTo: '#explainer' + this.proposal.number
        })
      },

      async shareProposal () {
        const { proposal } = this
        const shareData = {
          title: `#${proposal.number}: ${proposal.title} - ${this.$t('global.title')} - ${this.$t('global.EFA')}`,
          text: proposal.title,
          url: this.$t('meta.url') + '/proposal/' + this.proposal.number
        }

        try {
          await navigator.share(shareData)
        } catch(err) {
          this.$root.$emit('showModal', 'share', {
            title: this.$t('proposal.share'),
            focusBackTo: '#share' + this.proposal.number,
            payload: shareData
          })
        }
      }
    }
  }
</script>
