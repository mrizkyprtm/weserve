<script setup>
import CtaCard from './CtaCard.vue'
</script>

<template>
  <section id="cta">
    <div class="bg-secondary p-12 rounded-2xl">
      <div class="flex flex-col lg:flex-row items-center gap-6">
        <div class="flex-1 space-y-8">
          <div
            id="hero-badge"
            class="flex items-center bg-white w-fit py-2 px-4 rounded-full gap-2"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 22.5C18.0228 22.5 22.5 18.0228 22.5 12.5C22.5 6.97715 18.0228 2.5 12.5 2.5C6.97715 2.5 2.5 6.97715 2.5 12.5C2.5 18.0228 6.97715 22.5 12.5 22.5Z"
                stroke="#080C2E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.50001 3.5H9.50001C7.55001 9.34 7.55001 15.66 9.50001 21.5H8.50001"
                stroke="#080C2E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.5 3.5C17.45 9.34 17.45 15.66 15.5 21.5"
                stroke="#080C2E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5 16.5V15.5C9.34 17.45 15.66 17.45 21.5 15.5V16.5"
                stroke="#080C2E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5 9.50001C9.34 7.55001 15.66 7.55001 21.5 9.50001"
                stroke="#080C2E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="font-semibold">We host more than 120,000 websites</p>
          </div>
          <div>
            <h1 class="font-clash text-[2.5rem] lg:text-[2.9rem] text-white">
              Start Growing Today
            </h1>
            <p class="text-white leading-8">
              We provide a variety of servers to grow your users <br class="hidden lg:block" />
              acquisition much user-friendly and boosting up sales.
            </p>
          </div>
          <div id="hero-btn" class="flex items-center">
            <button class="px-8 py-3 bg-amber-300 rounded-full font-bold cursor-pointer">
              Explore More
            </button>
            <button
              class="px-10 py-4 font-semibold text-white flex items-center gap-1 cursor-pointer"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5 12.2V13.9C20.5 17.05 18.7 18.4 16 18.4H7C4.3 18.4 2.5 17.05 2.5 13.9V8.5C2.5 5.35 4.3 4 7 4H9.7C9.57 4.38 9.5 4.8 9.5 5.25V9.15002C9.5 10.12 9.82 10.94 10.39 11.51C10.96 12.08 11.78 12.4 12.75 12.4V13.79C12.75 14.3 13.33 14.61 13.76 14.33L16.65 12.4H19.25C19.7 12.4 20.12 12.33 20.5 12.2Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.5 5.25V9.15002C22.5 10.64 21.74 11.76 20.5 12.2C20.12 12.33 19.7 12.4 19.25 12.4H16.65L13.76 14.33C13.33 14.61 12.75 14.3 12.75 13.79V12.4C11.78 12.4 10.96 12.08 10.39 11.51C9.82 10.94 9.5 10.12 9.5 9.15002V5.25C9.5 4.8 9.57 4.38 9.7 4C10.14 2.76 11.26 2 12.75 2H19.25C21.2 2 22.5 3.3 22.5 5.25Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.89999 22H15.1"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.5 18.4V22"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.9955 7.25H19.0045"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.1957 7.25H16.2047"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3954 7.25H13.4044"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span> Schedule a demo </span>
            </button>
          </div>
        </div>
        <div class="flex-1 w-full">
          <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <CtaCard>
              <template #icon>
                <svg
                  width="47"
                  height="46"
                  viewBox="0 0 47 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.0833 42.1666H29.5833C39.1667 42.1666 43 38.3333 43 28.7499V17.2499C43 7.66659 39.1667 3.83325 29.5833 3.83325H18.0833C8.50001 3.83325 4.66667 7.66659 4.66667 17.2499V28.7499C4.66667 38.3333 8.50001 42.1666 18.0833 42.1666Z"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.2333 17.1924L14.4608 21.9649C13.905 22.5207 13.905 23.4599 14.4608 24.0157L19.2333 28.7882"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.4333 17.1924L33.2058 21.9649C33.7617 22.5207 33.7617 23.4599 33.2058 24.0157L28.4333 28.7882"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </template>
              <template #title>Web Crawl</template>
            </CtaCard>
            <CtaCard>
              <template #icon>
                <svg
                  width="47"
                  height="46"
                  viewBox="0 0 47 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.9 38.3334H28.1C35.7667 38.3334 38.8333 35.2667 38.8333 27.6001V18.4001C38.8333 10.7334 35.7667 7.66675 28.1 7.66675H18.9C11.2333 7.66675 8.16666 10.7334 8.16666 18.4001V27.6001C8.16666 35.2667 11.2333 38.3334 18.9 38.3334Z"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.625 32.5834H26.375C31.1667 32.5834 33.0833 30.6667 33.0833 25.8751V20.1251C33.0833 15.3334 31.1667 13.4167 26.375 13.4167H20.625C15.8333 13.4167 13.9167 15.3334 13.9167 20.1251V25.8751C13.9167 30.6667 15.8333 32.5834 20.625 32.5834Z"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.8525 7.66659V3.83325"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.5 7.66659V3.83325"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M31.1667 7.66659V3.83325"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M38.8333 15.3333H42.6667"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M38.8333 23H42.6667"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M38.8333 30.6667H42.6667"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M31.1667 38.3333V42.1666"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.5192 38.3333V42.1666"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.8525 38.3333V42.1666"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.33334 15.3333H8.16668"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.33334 23H8.16668"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.33334 30.6667H8.16668"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.5 18.5916L21.6983 21.7349C21.2958 22.4249 21.6217 22.9999 22.4267 22.9999H24.5733C25.3783 22.9999 25.7042 23.5749 25.3017 24.2649L23.5 27.4082"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </template>
              <template #title>Fast Report</template>
            </CtaCard>
            <CtaCard>
              <template #icon>
                <svg
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.2724 5.02424L10.7083 8.6084C8.50411 9.43256 6.70245 12.0392 6.70245 14.3967V28.6375C6.70245 30.8992 8.19747 33.87 10.0183 35.2309L18.26 41.3834C20.9625 43.4151 25.4091 43.4151 28.1116 41.3834L36.3533 35.2309C38.1741 33.87 39.6691 30.8992 39.6691 28.6375V14.3967C39.6691 12.0392 37.8674 9.43256 35.6633 8.6084L26.0991 5.02424C24.4699 4.43007 21.8633 4.43007 20.2724 5.02424Z"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.1666 21.6801C23.09 21.6801 22.9941 21.6801 22.9175 21.6801C21.1158 21.6226 19.6783 20.1275 19.6783 18.3067C19.6783 16.4475 21.1925 14.9333 23.0516 14.9333C24.9108 14.9333 26.425 16.4475 26.425 18.3067C26.4058 20.1467 24.9683 21.6226 23.1666 21.6801Z"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.3525 27.0467C17.5125 28.2734 17.5125 30.2858 19.3525 31.5125C21.4416 32.9117 24.8725 32.9117 26.9616 31.5125C28.8016 30.2858 28.8016 28.2734 26.9616 27.0467C24.8916 25.6475 21.4608 25.6475 19.3525 27.0467Z"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </template>
              <template #title>Anti-DDoS</template>
            </CtaCard>
            <CtaCard>
              <template #icon>
                <svg
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.02 35.2876V31.3201"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M23.8333 35.2875V27.3525"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M33.6467 35.2874V23.3657"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M33.6467 11.7124L32.765 12.7474C27.8775 18.4591 21.3225 22.5032 14.02 24.3241"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M28.0308 11.7124H33.6467V17.3091"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.0833 42.6666H29.5833C39.1667 42.6666 43 38.8333 43 29.2499V17.7499C43 8.16659 39.1667 4.33325 29.5833 4.33325H18.0833C8.50001 4.33325 4.66667 8.16659 4.66667 17.7499V29.2499C4.66667 38.8333 8.50001 42.6666 18.0833 42.6666Z"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </template>
              <template #title>Auto-Scale</template>
            </CtaCard>
            <CtaCard>
              <template #icon>
                <svg
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9583 42.6667V29.25"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.9583 10.0833V4.33325"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M34.0417 42.6667V36.9167"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M34.0417 17.7499V4.33325"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.7083 13.9166V25.4166C18.7083 27.5249 17.75 29.2499 14.875 29.2499H11.0417C8.16668 29.2499 7.20834 27.5249 7.20834 25.4166V13.9166C7.20834 11.8083 8.16668 10.0833 11.0417 10.0833H14.875C17.75 10.0833 18.7083 11.8083 18.7083 13.9166Z"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M39.7917 21.5833V33.0833C39.7917 35.1917 38.8333 36.9167 35.9583 36.9167H32.125C29.25 36.9167 28.2917 35.1917 28.2917 33.0833V21.5833C28.2917 19.475 29.25 17.75 32.125 17.75H35.9583C38.8333 17.75 39.7917 19.475 39.7917 21.5833Z"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </template>
              <template #title>AI Perform</template>
            </CtaCard>
            <CtaCard>
              <template #icon>
                <svg
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.175 36.8784H14.1583C13.3533 36.8784 12.4525 36.2459 12.1841 35.4793L4.24914 13.2843C3.11831 10.1026 4.44081 9.1251 7.16247 11.0801L14.6375 16.4276C15.8833 17.2901 17.3016 16.8493 17.8383 15.4501L21.2116 6.46094C22.285 3.58594 24.0675 3.58594 25.1408 6.46094L28.5141 15.4501C29.0508 16.8493 30.4691 17.2901 31.6958 16.4276L38.7108 11.4251C41.7008 9.27844 43.1383 10.3709 41.9116 13.8401L34.1683 35.5176C33.8808 36.2459 32.98 36.8784 32.175 36.8784Z"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.625 42.6667H33.7083"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.375 27.3333H27.9583"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </template>
              <template #title>Top Plugins+</template>
            </CtaCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
