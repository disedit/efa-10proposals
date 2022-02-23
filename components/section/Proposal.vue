<template>
  <section class="proposal relative md:min-h-screen bg-purple text-white my-3 py-7">
    <SectionProposalBackground :image="proposal.image" />
    <UiContainer
      class="rellax relative z-40"
      data-rellax-speed="0"
      :data-rellax-tablet-speed="parallaxSpeed"
      :data-rellax-desktop-speed="parallaxSpeed"
    >
      <div
        :class="[
          'relative md:max-w-card grid grid-cols-8 gap-5',
          {
            'mr-auto': isEven,
            'ml-auto': !isEven,
            '-translate-y-[15%]': proposal.number === 1
          }
        ]"
      >
        <SectionProposalNumber :number="proposal.number" />
        <SectionProposalCard class="col-span-8">
          <nuxt-content :document="proposal" />
        </SectionProposalCard>
        <SectionProposalButton :href="proposal.link" target="_blank" rel="noopener" class="col-span-5">
          {{ $t('proposal.support') }}
          <IconEndorse class="" />
          <span class="sr-only">{{ $t('global.newwindow') }}</span>
        </SectionProposalButton>
        <SectionProposalButton class="col-span-3">
          {{ $t('proposal.share') }}
          <IconShare />
        </SectionProposalButton>
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
    }
  }
</script>
