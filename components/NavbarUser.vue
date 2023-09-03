<template>

<nav class="bg-white">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 hidden sm:block">
    <div class="relative flex h-40 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
    
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
         
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <a href="/">

            <img class="block h-8 w-40 lg:hidden" src="../static/ESKC Logo-16.png" alt="Your Company">
            <img class="hidden h-22 w-60 lg:block" src="../static/ESKC Logo-16.png" alt="Your Company">
          </a>
        </div>
       
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div>
          <img class="block h-14 w-20 mb-2 ml-3" src="../static/eskc header icons-03.svg" alt="Your Company">

            <a href="#section-offer" class="text-black px-3 py-2 text-xl italic font-medium" aria-current="page">What we offer</a>
        </div>
        <div>
          <img class="block h-14 w-20 mb-2" src="../static/eskc header icons-04.svg" alt="Your Company">

            <a href="#section-learn" class="text-black px-3 py-2 text-xl italic font-medium" aria-current="page">Learn</a>
        </div>
        <div>
          <img class="block h-14 w-20 mb-2" src="../static/eskc header icons-05.svg" alt="Your Company">

            <a href="#section-resources" class="text-black px-3 py-2 text-xl italic font-medium" aria-current="page">Resourses</a>
        </div>
        <div>
          <img class="block h-14 w-20 mb-2" src="../static/eskc header icons-27.svg" alt="Your Company">

            <a href="#section-contact" class="text-black px-3 py-2 text-xl italic font-medium" aria-current="page">Contact Us</a>
        </div>
        <a href="/userprofile"  class="mt-10 px-15 ml-5  p-1 text-black-400 font-bold hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 p-2">
          <img class="inline-block h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
 
        </a>

   
          
        </div>
      </div>
    </div>


  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
     <a href="/">  <img class="block h-12 w-30 lg:hidden" src="../static/ESKC Logo-16.png" alt="Your Company"></a>
      <a href="#section-offer" class="text-purple-900 hover:bg-purple-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium">What we offer </a>
      
      <a href="#section-learn" class="text-purple-900 hover:bg-purple-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Learn </a>
      <a href="#section-resourses" class="text-purple-900 hover:bg-purple-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Resources</a>
      <a href="#section-contact" class="text-purple-900 hover:bg-purple-900 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact Us</a>
    </div>
  </div>
</nav>

</template>