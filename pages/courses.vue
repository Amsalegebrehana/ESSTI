
<template>
    <div class="all">
  
    <NavbarUser />
     <div class="bg-white mt-2 pb-24">
     <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-3xl font-bold text-gray-900">My Courses </h2>

      <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      <div v-for="course in courses" :key="course.id" class="mb-5 transform transition-transform hover:scale-105 shadow-md">
  
          <div class="relative">
            <div class="relative h-72 w-full overflow-hidden rounded-lg">
              <img :src="course.imageSrc" :alt="course.imageAlt" class="h-full w-full object-cover object-center" />
            </div>
            <div class="relative mt-4 ml-5">
              <h3 class="text-lg font-medium text-gray-900">{{ course.title }}</h3>
           
              <a href="#" class="group block flex-shrink-0 mt-2 ">
                <div class="flex items-center">
                  <div>
                    <img class="inline-block h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">{{ course.author }}</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
              <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50" />
              <p class="relative text-lg font-semibold text-white">Grade {{ course.grade }}</p>
            </div>
          </div>
          <div class="mt-6">
            <a href="/course_detail" class="relative flex items-center justify-center rounded-md border border-transparent bg-purple-700 px-8 py-2 text-lg font-medium text-white  hover:bg-gray-200 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >Start Course<span class="sr-only">, {{ course.title }}</span></a
            >
          </div>
        </div>
      </div>
     </div>
    <Footer />
    </div>
    </div>
</template>


<script >

import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {

  data() {
    return {
    courses : [
        {
            id: 1,
            title: 'Astronomy',
            description: 'Astronomy is the scientific study of celestial objects, such as stars, planets, galaxies, and the universe as a whole. It is a vast and multidisciplinary field that encompasses physics, mathematics, chemistry, and biology.',
            href: '#',
            imageSrc: 'https://skyandtelescope.org/wp-content/uploads/Solar-system-NASA_480x274.jpg',
            imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
            grade: '11',
            author: 'Dr. Abebaw'
        },
        {
            id: 2,
            title: 'Aerospace',
            description: 'Aerospace engineering is a multidisciplinary field that deals with the design, development, testing, and operation of aircraft, spacecraft, and missiles. It is a vast and complex field that encompasses a wide range of topics',
            href: '#',
            imageSrc: 'https://media.npr.org/assets/img/2020/11/18/nh-sc-pluto-illustration-71deaf602c8fe8dd73777e1cbf859507923366fc-s1100-c50.jpg',
            imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
            grade: '11',
            author: 'Dr. Abebaw'
        },
        {
            id: 3,
            title: 'Planetary Science',
            description: 'Planetary science is the scientific study of planets, moons, asteroids, comets, and other objects in the solar system. It is a multidisciplinary field that encompasses physics, chemistry, geology, and astronomy.',
            href: '#',
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL0w7GQm9twDN3kQJGwzPNREhrBDU16WXNcQ&usqp=CAU',
            imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
            grade: '11',
            author:'Dr. Abebaw'
        },
          {
            id: 4,
            title: 'Satellite Engineering',
            description: 'Satellite engineering is a multidisciplinary field that deals with the design, development, testing, and operation of satellites. It is a vast and complex field that encompasses a wide range of topics',
            href: '#',
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xGUZY_Cj0lebigRpprjegJTv5RFltD4qDZr6fPPI4O1v3xoZlfBsJgnu4h7uB8QRpeM&usqp=CAU',
            imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
            grade: '11',
            author:'Dr. Abebaw'
        },
          {
            id: 5,
            title: 'Theoretical Physics',
            description: 'Theoretical physics is a branch of physics that deals with the development of physical theories, based on mathematical models, to explain and predict natural phenomena.',
            href: '#',
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRjSM0Af5vXsuyLwZKyh6cxM1MbynS0gqFA&usqp=CAU',
            imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
            grade: '11',
            author:'Dr. Abebaw'
        },
    ]
    }
  }
}
</script>

<style>
body{
  background-color: rgb(93, 11, 93) !important;
  
}

</style>