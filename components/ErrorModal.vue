<template>
    <div class="flex items-center justify-center h-screen">
     
  
      <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white rounded-lg p-8">
          <h2 class="text-2xl font-bold text-center text-red-500 mb-4">Error!</h2>
          <p>Error occurred while trying to register try again later.</p>
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
    methods: {
      closeModal() {
        this.showModal = false;
        window.location.reload();
        
      }
    }
  };
  </script>
  