<!-- component -->

<template>

<div class="all">
    <NavbarUser />
 <div class="bg-white ">
   

    <div class="container mx-auto my-5 p-10 mb-72">
        <div class="md:flex no-wrap md:-mx-2 ">
            <!-- Left Side -->
            <div class="w-full md:w-3/12 md:mx-2">
                <!-- Profile Card -->
                <div class="bg-white p-3 border-t-4 border-green-400 shadow-md">
                    <div class="image overflow-hidden">
                        <img class="h-auto w-full mx-auto"
                            src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                            alt="">
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">Alazar Adane</h1>
                    <h3 class="text-gray-600 font-lg text-semibold leading-6">Grade 11 student</h3>
                    <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">A dedicated and enthusiastic Grade 11 student who exemplifies a passion for 
                    learning and personal growth. With an insatiable curiosity and a strong work ethic,
                     I consistently strives for academic excellence while also actively engaging in extracurricular pursuits. </p>
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Status</span>
                            <span class="ml-auto"><span
                                    class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                        </li>
                        <li class="flex items-center py-3">
                            <span>Member since</span>
                            <span class="ml-auto">Nov 07, 2016</span>

                        </li>
                        <li class="flex items-center py-3">
                            <a href="/" class="text-red-600">Logout</a>
                           
                        </li>
                    </ul>
                </div>
                <!-- End of profile card -->
                <div class="my-4"></div>
            
            </div>
            <!-- Right Side -->
            <div class="w-full md:w-9/12 mx-2 h-64">
                <!-- Profile tab -->
                <!-- About Section -->
                <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide text-3xl">About</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">First Name</div>
                                <div class="px-4 py-2">Alazar</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Last Name</div>
                                <div class="px-4 py-2">Adane</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Gender</div>
                                <div class="px-4 py-2">Male</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Contact No.</div>
                                <div class="px-4 py-2">+251969170097</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Current Address</div>
                                <div class="px-4 py-2">Addis Ababa, Ethiopia</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Permanant Address</div>
                                <div class="px-4 py-2">Addis Ababa, Ethiopia</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Email.</div>
                                <div class="px-4 py-2">
                                    <a class="text-blue-800" href="mailto:jane@example.com">alazaradane418@gmail.com</a>
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-bold">Birthday</div>
                                <div class="px-4 py-2">March, 25 2007</div>
                            </div>
                        </div>
                    </div>
                    <button
                        class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                        Full Information</button>
                </div>
                <!-- End of about section -->

                <div class="my-4"></div>

                <!-- Experience and education -->
                <div class="bg-white p-3 shadow-sm rounded-sm">

                    <div class="grid grid-cols-2">
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span class="tracking-wide text-3xl">Experience</span>
                            </div>
                            <ul class="list-inside space-y-2">
                                <li>
                                    <div class="text-teal-600">Space Science community</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Coding camp</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Ethiopian Space Science Club</div>
                                    <div class="text-gray-500 text-xs">July 2023 - Now</div>
                                </li>
                                
                            </ul>
                        </div>
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path fill="#fff"
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>
                                <span class="tracking-wide text-3xl">Education</span>
                            </div>
                            <ul class="list-inside space-y-2">
                                <li>
                                    <div class="text-teal-600">Bootcamp</div>
                                    <div class="text-gray-500 text-xs">August 2022</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">High School</div>
                                    <div class="text-gray-500 text-xs">Lebawi International Academy</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- End of Experience and education grid -->
                </div>
                <!-- End of profile tab -->
            </div>
        </div>
    </div >
<Footer />
</div>
</div>
</template>


<style>
  
body{
  background-color: rgb(93, 11, 93) !important;
  
  
}
</style>
