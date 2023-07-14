<template>
    <div class="all">
  
    <NavBar/>
     <div class="bg-white mt-2 pb-16">

        <div  class="max-w-3xl mx-auto pb-28">
              <h1 class="text-6xl font-extrabold text-center text-purple-900 pt-5">Support Us</h1>
              <hr  class="mt-10 border-t-4 border-green-400 my-14  "/>
                <h1 class="text-3xl font-bold text-center text-purple-900 pt-2 italic  mb-5">  Donation Form</h1>
              <div class="mt-5">
                 
                  <p class="text-purple-800 mt-5 text-lg text-center">
                   
                    Together, we can inspire the next generation of space enthusiasts and empower them to reach for the stars.
                  </p>
              </div>
              <h1 class="text-xl font-bold text-center text-purple-900 pt-2   mb-5">  Fill this Form</h1>
            <div class="ml-10">
            <div class="mb-4 flex flex-col ">
                <label for="first-name" class=" mb-5 italic">First Name</label>
                <input type="text" id="first-name" v-model="firstName" required
                    placeholder="Enter your first name"
           
                    class="w-1/2 shadow px-2 py-1 border border-gray-300 rounded-full">
            </div>
            <div class="mb-4 flex flex-col ">
                <label for="last-name" class=" mb-5 italic">Last Name</label>
                <input type="text" id="last-name" v-model="lastName" required
                    placeholder="Enter your last name"
                 
                    class="w-1/2 shadow px-2 py-1 border border-gray-300 rounded-full">
                </div>
     


            <div class="mb-4 flex flex-col">
                <label for="email" class="mb-3 italic">Email</label>
                <input type="email" id="email" v-model="email" required
              
                placeholder="Enter your email"
                class="w-1/2 px-2 py-1 border border-gray-300 rounded-full">
            </div>

            <div class="mb-4 flex flex-col mb-10">
                <label for="phone" class=" mb-5 italic">Phone Number</label>
                <input type="tel" id="phone" v-model="phoneNumber" required
            
                placeholder="Enter your phone number"
                class="w-1/2 px-2 py-1 border border-gray-300 rounded-full">
            </div>
            <div class="mt-4">
                <label for="payment-option" class="block mb-2">Donate Option</label>
                <select id="payment-option" v-model="selectedPaymentOption" class="w-1/2 px-4 py-2 border border-gray-300 rounded-md">
                    <option value="" disabled selected>Select payment option</option>
                    <option value="in-kind">In Kind</option>
                    <option value="in-cash">In Cash</option>
                </select>
            </div>
            <div class=" mt-10  mb-24">
                    
                <button type="submit" @click="submit()" class="rounded-full border text-xl font-bold italic border-purple-700 bg-white hover:bg-purple-700 hover:text-white text-purple-700 px-14 py-3">
                    Submit Form
                </button>

            </div>
        </div>
          

        </div>

     </div>
    <Footer />
    </div>
  
  </template>
  
  <script>
 
  import Footer from '../components/Footer.vue';
  
  export default {
      name: "DonatePage",
      components: {  Footer },
      methods:{

        submit(){

        }
      }
  }
  </script>
  
  <style>
  body{
    background-color: rgb(93, 11, 93) !important;
    
  }
  
  </style>
  