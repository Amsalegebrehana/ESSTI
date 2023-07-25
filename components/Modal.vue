<template>
    <div class="flex items-center justify-center h-screen">
      <button
        @click="showModal = true"
        class="px-4 py-2 bg-green-500 text-white rounded shadow"
      >
        Show Success Modal
      </button>
  
      <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white rounded-lg p-8">
          <h2 class="text-2xl font-bold text-center text-green-500 mb-4">{{ title }}</h2>
          <p>{{ body }}</p>
          <div class="mt-6 flex justify-end">
            <button
              @click="closeModal"
              class="px-4 py-2 bg-gray-500 text-white rounded shadow"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showModal: true
      };
    },
    props: {
      title: {
        type: String,
        required: true
      },
      body: {
        type: String,
        required: false
      }
    },
    methods: {
      closeModal() {
        this.showModal = false;
        // reload window
        window.location.reload();
        
      }
    }
  };
  </script>
  