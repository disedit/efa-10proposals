<template>
  <section class="proposal relative md:min-h-screen bg-purple text-white py-7">
    <ProposalBackground :image="proposal.image" />
    <UiContainer
      class="rellax relative z-40 py-3"
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
            'md:-translate-y-[10%]': proposal.number === 1 && !$route.params.number,
            'md:translate-y-[25%]': proposal.number === 6 && !$route.params.number
          }
        ]"
      >
        <ProposalNumber :id="`Number${proposal.number}`" :number="proposal.number" />
        <ProposalCard :id="`Card${proposal.number}`" class="col-span-12">
          <nuxt-content :document="proposal" />
        </ProposalCard>
        <div :id="`Endorse${proposal.number}`" class="col-span-7 md:col-span-8 flex z-10">
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
          class="col-span-5 md:col-span-4"
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

    mounted () {
      this.animateCard()
    },

    methods: {
      animateCard () {
        this.$gsap.fromTo(`#Card${this.proposal.number}`, {
          opacity: 0,
          scale: 1.1,
          rotate: this.isEven ? '-10deg' : '10deg',
          x: this.isEven ? -100 : 100
        }, {
          opacity: 1,
          rotate: 0,
          scale: 1,
          x: 0,
          duration: .75,
          ease: 'Back.easeOut',
          delay: this.proposal.number === 1 ? 1.25 : 0,
          scrollTrigger: this.proposal.number !== 1 ?{
            trigger: `#Card${this.proposal.number}`,
            start: 'top 80%'
          } : null,
          onComplete: () => {
            const card = document.querySelector(`#Card${this.proposal.number}`)
            card.classList.add('highlight')
          }
        })

        this.$gsap.fromTo(`#Number${this.proposal.number}`, {
          opacity: 0
        }, {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: `#Card${this.proposal.number}`,
            start: 'top 60%'
          }
        })

        this.$gsap.fromTo(`#Endorse${this.proposal.number}`, {
          opacity: 0,
          rotate: '-4deg',
          scale: 1.2
        }, {
          opacity: 1,
          rotate: 0,
          scale: 1,
          duration: 0.5,
          ease: 'Back.easeOut',
          scrollTrigger: {
            trigger: `#Endorse${this.proposal.number}`,
            start: 'top bottom'
          }
        })

        this.$gsap.fromTo(`#share${this.proposal.number}`, {
          opacity: 0,
          rotate: '4deg',
          scale: 1.1
        }, {
          opacity: 1,
          rotate: 0,
          scale: 1,
          duration: 0.5,
          delay: 0.25,
          ease: 'Back.easeOut',
          scrollTrigger: {
            trigger: `#share${this.proposal.number}`,
            start: 'top bottom'
          }
        })
      },
      showExplainer () {
        this.$root.$emit('showModal', 'explainer', {
          title: this.$t('proposal.explainer'),
          focusBackTo: '#explainer' + this.proposal.number
        })
      },

      async shareProposal () {
        const { proposal } = this
        const payload = {
          title: `#${proposal.number}: ${proposal.title} - ${this.$t('global.title')} - ${this.$t('global.EFA')}`,
          text: proposal.title,
          url: this.$t('meta.url') + '/proposal/' + proposal.number,
          image: proposal.image
        }

        const isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

        if (isIOS && navigator.share) {
          await navigator.share(payload)
        } else {
          this.$root.$emit('showModal', 'share', {
            title: this.$t('proposal.share'),
            focusBackTo: '#share' + proposal.number,
            payload
          })
        }
      }
    }
  }
</script>
