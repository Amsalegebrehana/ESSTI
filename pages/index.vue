<template>
  <div class="all">

    <NavBar/>
    <TopDescription/>
    <div class="col-span-12 grid grid-cols-12 gap-6 mt-5 mb-14 px-16">
      <div class="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y py-16">
              <h2 class="text-yellow-300 text-5xl font-bold italic px-16"> Support Us</h2>
              <div class="mt-10">
                  <p class="text-yellow-300 text-lg text-center">
                    SSGI as a Government organization, the Ethiopian Space Kids Club relies on the support of government budget, generous individuals, sponsors, and partners. If you believe in our mission and would like to contribute, there are various ways to support us. You can make a donation, volunteer your time and expertise, or explore sponsorship opportunities.

                  </p>
                  <p class="text-yellow-300 mt-5 text-lg text-center">
                   
Together, we can inspire the next generation of space enthusiasts and empower them to reach for the stars.
                  </p>
              </div>
             
          </div>
          <div class="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y mt-16">
            <div class="flex justify-center mt-14 mb-5 py-16"> 
                <button class="border border-gray-300 text-purple-900 text-4xl font-bold rounded-md italic px-8 py-2 bg-yellow-400">
              Donate
                </button>
            </div>
          </div>
        
                                
        </div>
      <Contact />
      <Footer />
  </div>

</template>

<script>
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';

export default {
    name: "IndexPage",
    components: { Contact, Footer }
}
</script>

<style>
body{
  background-color: rgb(93, 11, 93) !important;
  
}

</style>
