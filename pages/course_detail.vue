
<template>
    <div>
      <NavbarUser/>
               <div class="bg-white mt-2 pb-48">
    <div class="px-24 py-12 text-gray-700 dark:text-gray-500 transition duration-500 ease-in-out">
        <h2 class="text-4xl  font-medium capitalize">Materials</h2>
        <div class="mt-1 mb-4 flex items-center justify-between">
        <span class="text-sm">
            Stared Materials
            <strong>2</strong>
        </span>
        <div class="flex items-center select-none">
            <span class="hover:text-pink-500 cursor-pointer mr-3">
            <svg viewBox="0 0 512 512" class="h-5 w-5 fill-current">
                <!-- Search icon -->
            </svg>
            </span>
            <input class="bg-transparent focus:outline-none" placeholder="Search in activity" />
        </div>
        </div>
        <div class="border dark:border-gray-700 transition duration-500 ease-in-out"></div>
        <div class="flex flex-col mt-2">
        <div v-for="(material, index) in materials" :key="index" class="flex flex-row mt-2 shadow-md">
            <div class="flex w-full items-center justify-between bg-white dark:bg-gray-800 px-8 py-6">
            <div class="flex">
                <img class="h-32 w-18 rounded-md object-cover" :src="material.imageUrl" alt="infamous" />
                <div class="flex flex-col ml-6">
                <span class="text-lg font-bold">{{ material.title }}</span>
                <div class="mt-4 flex">
                    <div class="flex">
                    <svg class="h-5 w-5 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                        <!-- User icon -->
                    </svg>
                    <span class="ml-2 text-sm text-gray-600 dark:text-gray-300 capitalize">{{ material.type }}</span>
                    </div>
                    <div class="flex ml-6">
                    <svg class="h-5 w-5 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                        <!-- Calendar icon -->
                    </svg>
                    <span class="ml-2 text-sm text-gray-600 dark:text-gray-300 capitalize">{{ material.date }}</span>
                    </div>
                    <div class="flex ml-6">
                    <svg class="h-5 w-5 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                        <!-- Clock icon -->
                    </svg>
                    <span class="ml-2 text-sm text-gray-600 dark:text-gray-300 capitalize"></span>
                    </div>
                </div>
                <div class="mt-4 flex">
                    <button class="flex items-center focus:outline-none border rounded-full py-2 px-6 leading-none border-gray-500 dark:border-gray-600 select-none hover:bg-blue-400 hover:text-white dark-hover:text-gray-200">
                    <svg class="h-5 w-5 fill-current mr-2" viewBox="0 0 24 24">
                        <!-- Category icon -->
                    </svg>
                    <span>{{material.course}}</span>
                    </button>
                    <button class="flex items-center ml-4 focus:outline-none border rounded-full py-2 px-6 leading-none border-blue-500 dark:border-blue-600 select-none hover:bg-blue-400 hover:text-white dark-hover:text-gray-200">
                    <svg class="h-5 w-5 fill-current mr-2 text-blue-600" viewBox="0 0 576 512">
                        <!-- Note icon -->
                    </svg>
                    <span><a href="/material">Start</a> </span>
                    </button>
                </div>
                </div>
            </div>
            <div class="flex flex-col -mt-10 mr-20">
                <span class="font-semibold text-green-500 dark:text-green-300"></span>
                <span class="font-semibold text-green-500 dark:text-green-300">{{ material.time }}</span>
                <span class="text-sm text-gray-700 dark:text-gray-400 mt-2"></span>
            </div>
            </div>
            <div class="text-center flex flex-col items-center justify-center bg-white dark:bg-gray-800 dark:text-gray-300 ml-1 px-12 cursor-pointer hover:bg-blue-200 dark-hover:bg-blue-500 rounded-lg">
            <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <!-- Pen icon -->
            </svg>
            </div>
        </div>
        </div>
    </div>
    </div>
      <Footer />
    </div>
</template>

<script>
export default {
  data() {
    return {
      materials: [
        {
          title: "Chapter 1: What Makes Up the Universe",
          imageUrl: "https://skyandtelescope.org/wp-content/uploads/Solar-system-NASA_480x274.jpg",
          type: "Video",
          date: "13 aug 2016",
          time: "2 hours",
          course: "Course one",
          
        
        },
           {
          title: "Chapter 2: Universe",
          imageUrl: "https://skyandtelescope.org/wp-content/uploads/Solar-system-NASA_480x274.jpg",
          type: "Video",
          date: "13 aug 2016",
          time: "45 minutes",
          course: "Course one",
          
        
        },
           {
          title: "Chapter 3: Planets",
          imageUrl: "https://skyandtelescope.org/wp-content/uploads/Solar-system-NASA_480x274.jpg",
          type: "Book",
          date: "13 aug 2016",
          time: "2 hours",
          course: "Course one",
          
        
        },
           {
          title: "Chapter 4: Formation of Stars and Galaxy",
          imageUrl: "https://skyandtelescope.org/wp-content/uploads/Solar-system-NASA_480x274.jpg",
          type: "Book",
          date: "13 aug 2016",
          time: "2 hours",
          course: "Course one",
    
        
        },
        
      ],
    };
  },
};
</script>

<style>
body{
  background-color: rgb(93, 11, 93) !important;
  
}
</style>
Z