<template>
  <section class="relative min-h-screen bg-purple text-white my-3 py-7">
    <UiContainer>
      <div
        :class="[
          'relative z-30 max-w-card grid grid-cols-8 gap-5 -translate-y-[10%]',
          {
            'mr-auto': isEven,
            'ml-auto': !isEven
          }
        ]"
      >
        <SectionProposalCard class="col-span-8">
          <nuxt-content :document="proposal" />
        </SectionProposalCard>
        <SectionProposalButton class="col-span-5">
          {{ $t('proposal.support') }}
        </SectionProposalButton>
        <SectionProposalButton class="col-span-3">
          {{ $t('proposal.share') }}
        </SectionProposalButton>
        <SectionProposalNumber :number="proposal.number" />
      </div>
    </UiContainer>
    <SectionProposalBackground :image="proposal.image" />
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
      }
    }
  }
</script>
