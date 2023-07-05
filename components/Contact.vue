<template>
    <div class="bg-white px-24">
      <div class="col-span-12 grid grid-cols-12 gap-6  pb-16 px-7 ml-10">
        <div class="col-span-12 sm:col-span-4 2xl:col-span-3 intro-y  py-14">
          <div class="relative">
            <img src="../static/eskc svgs-01.svg" alt="My Happy SVG" class="w-1/12 mt-24" />
            <img src="../static/eskc svgs-02.svg" alt="My Happy SVG" class="w-1/12 mt-32 ml-48" />
            <img src="../static/eskc svgs-03.svg" alt="My Happy SVG" class="w-1/12 mt-4 ml-0" />
            <img src="../static/eskc svgs-07.svg" alt="My Happy SVG" class="w-1/12 mt-32 mb-48 ml-32" />
          </div>
        </div>
        <div class="col-span-12 sm:col-span-8 2xl:col-span-3 intro-y py-14 sm:ml-7">
          <p class="text-5xl text-center font-extrabold text-red-600 mt-4 italic">
            Contact Us
          </p>
          <div class="mt-5 mr-5">
            <p class="text-lg mt-5 text-red-500 ">
              We would love to hear from you! If you have any questions, suggestions, or would like to collaborate with us, please don't hesitate to reach out.
            </p>
          </div>
          <div class="mt-10">
            <form class="w-full max-w-2xl" @submit.prevent="submitForm">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block italic tracking-wide text-red-600 text-2xs font-bold mb-2" for="full-name">
                    Full Name
                  </label>
                  <input v-model="fullName" class="appearance-none block w-full text-gray-700 border border-red-500 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="full-name" type="text" placeholder="Jane" required>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label class="block italic tracking-wide text-red-600 text-2xs font-bold mb-2" for="phone-number">
                    Phone Number
                  </label>
                  <input v-model="phoneNumber" class="appearance-none block w-full text-gray-700 border border-red-500 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone-number" type="text" placeholder="Jane" required>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block italic tracking-wide text-red-600 text-2xs font-bold mb-2" for="email">
                    Email
                  </label>
                  <input v-model="email" class="appearance-none block w-full text-gray-700 border border-red-500 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="Jane" required>
                  <label class="block italic tracking-wide text-red-600 text-2xs font-bold mb-2" for="education-level">
                    Educational Level
                  </label>
                  <input v-model="educationLevel" class="appearance-none block w-full text-red-600 border border-red-500 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="education-level" type="text" placeholder="Jane" required>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label class="block italic tracking-wide text-red-600 text-2xs font-bold mb-2" for="message">
                    Message
                  </label>
                  <textarea v-model="message" class="appearance-none block w-full text-gray-700 border border-red-500 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" type="text" placeholder="Doe"></textarea>
                </div>
              </div>
              <button class="relative border border-white text-4xl font-bold text-white rounded-md italic px-14 py-2 bg-red-600 mt-7" type="submit" :disabled="isSubmitting">
                <span v-if="isSubmitting" class="mr-2">
                  <i class="fa fa-spinner fa-spin"></i>
                </span>
                Submit
                <span class="background-button"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
 
  export default {
    data() {
      return {
        fullName: '',
        phoneNumber: '',
        email: '',
        educationLevel: '',
        message: '',
        isSubmitting: false,
      };
    },
    methods: {
      submitForm() {
        this.isSubmitting = true;
  
        // Prepare form data to send to the server
        const formData = {
          fullName: this.fullName,
          phoneNumber: this.phoneNumber,
          email: this.email,
          educationLevel: this.educationLevel,
          message: this.message,
        };
  
        // Make an Axios request to the server
        // Replace the URL with the actual server endpoint
        console.log('Form submitted', formData);
        
      },
    },
  };
  </script>
  