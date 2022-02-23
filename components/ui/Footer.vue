<template>
  <footer class="text-white py-10">
    <UiContainer>
      <a href="https://e-f-a.org" target="_blank">
        <img src="~assets/logos/logo-en.svg" alt="European Free Alliance" class="w-40">
      </a>
      <div class="grid md:grid-cols-2 mt-6 gap-4">
        <div class="text-lg">
          <address class="not-italic mb-4">
            Boomkwekerijstraat, 1<br>
            1000 Brussels
          </address>
          <a href="tel:0032025133476" class="block mb-4 hover:underline">+32 (0) 2513 34 76</a>
          <a href="mailto:info@e-f-a.org" class="block hover:underline">info@e-f-a.org</a>
        </div>
        <div>
          <h3 class="text-lg">{{ $t('footer.follow') }}</h3>
          <ul class="mt-2 flex">
            <li class="mr-4">
              <a href="https://www.facebook.com/EFAparty/" target="_blank" rel="noopener noreferer" class="hover:text-orange">
                <IconFacebook class="h-8 w-8" />
                <span class="sr-only">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/EFAparty" target="_blank" rel="noopener noreferer" class="hover:text-orange">
                <IconTwitter class="h-8 w-8" />
                <span class="sr-only">Twitter</span>
              </a>
            </li>
          </ul>
          <ul class="font-sembibold text-lg mt-4">
            <li>
              <a href="https://e-f-a.org/contact/" target="_blank" class="hover:underline">
                {{ $t('footer.contact') }}
              </a>
            </li>
            <li>
              <a href="https://e-f-a.org/privacy-policy/" target="_blank" class="hover:underline">
                {{ $t('footer.privacy') }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-4 mt-10 items-end">
        <div class="flex text-sm leading-tight font-semibold">
          <img src="~assets/logos/ep.svg" alt="European Parliament" class="w-24 mr-4 shrink-0">
          <span>{{ $t('footer.euparl') }}</span>
        </div>
        <div class="md:text-right">
          <small>&copy; 2022 EFA – European Free Alliance</small>
        </div>
      </div>
    </UiContainer>
  </footer>
</template>

<script>
export default {}
</script>
