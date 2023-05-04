<script setup>
import { Layout } from '@/components/templates'
</script>

<template>
  <Layout title="Chat for Reply">
    <div class="min-h-screen space-y-6 bg-netral-100 p-8">
      <section class="flex items-start justify-start gap-4">
        <!-- photo -->
        <div
          class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg"
        >
          <img
            class="h-full w-full object-cover"
            src="/brands/logo-makna-color.png"
            alt="Logo makna color"
          />
        </div>

        <!-- chat dari user -->
        <main class="w-80 rounded-lg rounded-tl-none bg-white px-4 py-3">
          <div
            class="relative mb-2 overflow-hidden rounded-lg rounded-tl-none bg-netral-100 px-4 py-3 pl-6"
          >
            <div class="absolute inset-0 h-full w-2 bg-secondary-main" />

            <h5 class="mb-1 text-sm font-semibold">You</h5>

            <p class="text-sm leading-5 text-netral-900">
              Hai ., selamat datang di WhatsApp Zeal Musik 😊 ada yang kami bisa
              bantu?
            </p>
          </div>
          <div class="">
            <p class="text-sm leading-5 text-netral-900">
              Info <br />
              Tanyakan hal lain terkait Zeal Music
            </p>
          </div>
        </main>
      </section>

      <!-- chat dari admin -->
      <section class="flex items-start justify-end gap-4">
        <main class="w-80 rounded-lg rounded-tr-none bg-[#8DC9EE] px-4 py-3">
          <div
            class="relative mb-2 overflow-hidden rounded-lg rounded-tr-none bg-[#e3f4ff] px-4 py-3 pr-6"
          >
            <div class="absolute right-0 top-0 h-full w-2 bg-primary-main" />
            <h5 class="mb-1 text-sm font-semibold">Makna</h5>
            <p class="text-sm leading-5 text-netral-900">
              Hai ., selamat datang di WhatsApp Zeal Musik 😊 ada yang kami bisa
              bantu?
            </p>
          </div>
          <div class="">
            <p class="text-sm leading-5 text-netral-900">
              Info <br />
              Silahkan cek di outlet terdekat
            </p>
          </div>
        </main>

        <!-- photo -->
        <div
          class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg"
        >
          <img
            class="h-full w-full object-cover"
            src="/brands/logo-makna-color.png"
            alt="Logo makna color"
          />
        </div>
      </section>

      <!-- chat dari bot -->
      <section class="flex items-start justify-center gap-4">
        <main class="w-80 rounded-lg rounded-tr-none">
          <div
            class="relative mb-2 overflow-hidden rounded-lg rounded-tr-none bg-[#e3f4ff] px-4 py-3 pr-6"
          >
            <div class="absolute right-0 top-0 h-full w-2 bg-primary-main" />
            <h5 class="mb-1 text-sm font-semibold">#2230504</h5>
            <p class="text-sm leading-5 text-netral-900">
              Hello, Supriyadi! welcome to the Zeal Music’s WhatsApp! Let me
              know what can I help you
            </p>
          </div>
          <p class="text-center text-xs font-medium text-netral-600">
            23 Nov 2022 08:01
          </p>
        </main>
      </section>

      <!-- chat yang privat -->
      <section class="flex items-start justify-center gap-4 pt-4">
        <main class="w-80 rounded-lg rounded-tr-none">
          <div
            class="relative mb-2 rounded-lg rounded-tr-none bg-warning-surface px-5 py-5 pr-6"
          >
            <div
              class="absolute -left-4 -top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm"
            >
              <svg
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_8_85)">
                  <path
                    d="M5 8.33333V6.66667C5 3.90833 5.83333 1.66667 10 1.66667C14.1667 1.66667 15 3.90833 15 6.66667V8.33333"
                    stroke="#101623"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.0001 15.4167C11.1507 15.4167 12.0834 14.4839 12.0834 13.3333C12.0834 12.1827 11.1507 11.25 10.0001 11.25C8.8495 11.25 7.91675 12.1827 7.91675 13.3333C7.91675 14.4839 8.8495 15.4167 10.0001 15.4167Z"
                    stroke="#101623"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.1667 18.3333H5.83341C2.50008 18.3333 1.66675 17.5 1.66675 14.1667V12.5C1.66675 9.16667 2.50008 8.33333 5.83341 8.33333H14.1667C17.5001 8.33333 18.3334 9.16667 18.3334 12.5V14.1667C18.3334 17.5 17.5001 18.3333 14.1667 18.3333Z"
                    stroke="#101623"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8_85">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="space-y-1">
              <p class="text-sm leading-5 text-netral-900">
                Hello, Supriyadi! welcome to the Zeal Music’s WhatsApp! Let me
                know what can I help you
              </p>
              <h5 class="mb-1 text-sm font-semibold">Master Demo</h5>
            </div>
          </div>

          <p class="text-center text-xs font-medium text-netral-600">
            23 Nov 2022 08:01
          </p>
        </main>
      </section>
    </div>
  </Layout>
</template>
