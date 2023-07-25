<template>
  <div>
      <NavBar/>
      <div class="bg-white mt-2 pb-16">
        <div v-if="isLoading" class="flex items-center justify-center h-screen">
      <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
          <div v-else  class="max-w-3xl mx-auto pb-28">
              <h1 class="text-6xl font-extrabold text-center text-purple-900 pt-5">ESKC Application Form</h1>
              <hr  class="mt-10 border-t-4 border-green-400 my-14  "/>
              
              <div v-if="current === 0">

                <div class="border-l-8  pl-5 border-red-600 mb-5 pb-10">
                <div>
                  <div class="text-4xl italic text-red-600 font-extrabold">

                    Section One: Personal Information
                  </div>
                  <p class="mt-4 mb-7 text-xl">

                    Please provide your personal details so that we can get to know you better. 
                    This section includes your name, email, age, sex, and location information.
                  </p>
                </div>
                <h2 class="text-lg font-bold mt-4 mb-2 italic">Personal Information</h2>
                <div class="flex ">

                  <div class="mb-4 ">
                    <label for="first-name" class=" mb-5 italic">First Name</label>
                    <input type="text" id="first-name" v-model="firstName" required
                      placeholder="Enter your first name"
                      :class="{ 'border-red-500': firstNameError }"
                      class="w-full shadow px-2 py-1 border border-gray-300 rounded-full">
                  </div>
                  <div class="mb-4 ml-5">
                    <label for="last-name" class=" mb-5 italic">Last Name</label>
                    <input type="text" id="last-name" v-model="lastName" required
                      placeholder="Enter your last name"
                      :class="{ 'border-red-500': lastNameError }"
                      class="w-full px-2 py-1 border border-gray-300 rounded-full">
                  </div>
                </div>


                <div class="mb-4 flex flex-col">
                  <label for="email" class="mb-3 italic">Email</label>
                  <input type="email" id="email" v-model="email" required
                  :class="{ 'border-red-500': emailError }"
                    placeholder="Enter your email"
                    class="w-1/2 px-2 py-1 border border-gray-300 rounded-full">
                </div>

                <div class="mb-4 flex flex-col">
                  <label for="phone" class=" mb-5 italic">Phone Number</label>
                  <input type="tel" id="phone" v-model="phoneNumber" required
                  :class="{ 'border-red-500': phoneNumberError }"
                    placeholder="Enter your phone number"
                    class="w-1/2 px-2 py-1 border border-gray-300 rounded-full">
                </div>
                <div class="flex space-x-7">
                  <label class=" mb-5 italic">Sex</label>
                
                  <div class="mb-4">
                    <label for="male" class="mr-2">Male</label>
                    <input type="radio" id="male" value="male" v-model="sex" >
                    <label for="female" class="ml-2">Female</label>
                    <input type="radio" id="female" value="female" v-model="sex" >
                  </div>

                  <div class="mb-4">
                    <label for="dob" class=" mb-5 italic">Date of Birth</label>
                    <input type="date" id="dob" v-model="dateOfBirth" required
                    :class="{ 'border-red-500': dateOfBirthError }"
                      class="w-full px-2 py-1 border border-gray-300 rounded-full">
                  </div>
                </div>
              <div class="flex space-x-7 ">

            
                <div class="mb-4">
                  <label for="region" class=" mb-5 italic">Region</label>
                  <input type="text" id="region" v-model="region" required
                    placeholder="Enter your region"
                    :class="{ 'border-red-500': regionError }"
                    class="w-full px-2 py-1 border border-gray-300 rounded-full">
                </div>

                <div class="mb-4">
                  <label for="zone" class=" mb-5 italic">Zone</label>
                  <input type="text" id="zone" v-model="zone" required
                    placeholder="Enter your zone"
                    :class="{ 'border-red-500': zoneError }"
                    class="w-full px-2 py-1 border border-gray-300 rounded-full">
                </div>

                <div class="mb-4">
                  <label for="wereda" class=" mb-5 italic">Wereda</label>
                  <input type="text" id="wereda" v-model="wereda" required
                    placeholder="Enter your wereda"
                    :class="{ 'border-red-500': weredaError }"
                    class="w-full px-2 py-1 border border-gray-300 rounded-full">
                </div>
              </div>
                <h2 class="text-lg font-bold mt-4">Parental Information</h2>

                <div class="flex ">

                    <div class="mb-4 ">
                      <label for="first-name" class=" mb-5 italic">First Name</label>
                      <input type="text" id="first-name" v-model="parentFirstName" required
                        placeholder="Enter your first name"
                        :class="{ 'border-red-500': parentFirstNameError }"
                        class="w-full shadow px-2 py-1 border border-gray-300 rounded-full">
                    </div>
                    <div class="mb-4 ml-5">
                      <label for="last-name" class=" mb-5 italic">Last Name</label>
                      <input type="text" id="last-name" v-model="parentLastName" required
                      :class="{ 'border-red-500': parentLastNameError }"
                        placeholder="Enter your last name"
                        class="w-full px-2 py-1 border border-gray-300 rounded-full">
                    </div>
                </div>

                <div class="mb-4 flex flex-col">
                  <label for="parent-email" class=" mb-5 italic">Email</label>
                  <input type="email" id="parent-email" v-model="parentEmail" required
                  :class="{ 'border-red-500': parentEmailError }"
                    placeholder="Enter parent's email"
                    class="w-1/2 px-2 py-1 border border-gray-300 rounded-full">
                </div>

                <div class="mb-4 flex flex-col">
                  <label for="parent-phone" class=" mb-5 italic">Phone Number</label>
                  <input type="tel" id="parent-phone" v-model="parentPhoneNumber" required
                  :class="{ 'border-red-500': parentPhoneNumberError }"
                    placeholder="Enter parent's phone number"
                    class="w-1/2 px-2 py-1 border border-gray-300 rounded-full">
                </div>

              
                </div>
                <div class="mt-24 mb-28 flex justify-center space-x-7">
                  <div class=" mt-10 ">
                    
                    <button type="submit" @click="prevButton()" class="rounded-full border text-xl font-bold italic border-red-700 bg-white hover:bg-red-700 hover:text-white text-red-700 px-14 py-3">
                        Go Back
                    </button>

                  </div>
                  <div class=" mt-10">
                    
                    <button type="submit" @click="nextButton()" class="rounded-full border text-xl font-bold  italic border-red-700 bg-white hover:bg-red-700 hover:text-white text-red-700 px-16 py-3">
                        Next
                    </button>

                  </div>
                </div>
            </div>
            <div v-if="current === 1">

              <div class="border-l-8  pl-5 border-purple-900 mb-5 pb-10">
              <div>
                <div class="text-4xl italic text-purple-900 font-extrabold">

                  Section Two: Educational Background
                </div>
                <p class="mt-4 mb-7 text-xl">

                  Tell us about your educational background. Share details about your school, 
                  educational level, and any relevant educational documents you may have.
                </p>
              </div>
              <h2 class="text-lg font-bold mt-4 mb-2 italic">School Information</h2>
              <div class="flex ">

                <div class="mb-4 ">
                  <label for="first-name" class=" mb-5 italic"> Name of School</label>
                  <input type="text" id="first-name" v-model="schoolName" required
                  :class="{ 'border-red-500': schoolNameError }"
                    placeholder="Enter the full name of your School"
                    class="w-full shadow px-2 py-1 border border-gray-300 rounded-full">
                </div>
                <div class="mb-4 ml-5">
                  <label for="last-name" class=" mb-5 italic">School Type</label>
                  <input type="text" id="last-name" v-model="schoolType" required
                  :class="{ 'border-red-500': schoolTypeError }"
                    placeholder="Select School Type"
                    class="w-full px-2 py-1 border border-gray-300 rounded-full">
                </div>
              </div>
              <h2 class="text-lg  mt-4 mb-2 italic">Address of Your School</h2>
              <div class="flex space-x-7 ">
                  <div class="mb-4">
                    <label for="region" class=" mb-5 italic">Region</label>
                    <input type="text" id="region" v-model="schoolRegion" required
                    :class="{ 'border-red-500': schoolRegionError }"
                      placeholder="Enter region"
                      class="w-full px-2 py-1 border border-gray-300 rounded-full">
                  </div>

                  <div class="mb-4">
                    <label for="zone" class=" mb-5 italic">Zone</label>
                    <input type="text" id="zone" v-model="schoolZone" required
                    :class="{ 'border-red-500': schoolZoneError }"
                      placeholder="Enter zone"
                      class="w-full px-2 py-1 border border-gray-300 rounded-full">
                  </div>

              <div class="mb-4">
                <label for="wereda" class=" mb-5 italic">Wereda</label>
                <input type="text" id="wereda" v-model="schoolWereda" required
                :class="{ 'border-red-500': schoolWeredaError }"
                  placeholder="Enter your wereda"
                  class="w-full px-2 py-1 border border-gray-300 rounded-full">
              </div>
              </div>
              <div class="mb-4 flex flex-col">
                <label for="wereda" class=" mb-2 italic">Educational Level</label>
                <input type="text" id="wereda" v-model="educationalLevel" required
                :class="{ 'border-red-500': educationalLevelError }"
                  placeholder="Select Your Grade level"
                  class="w-1/2 px-2 py-1 border border-gray-300 rounded-full">
              </div>
              <h2 class="text-lg  mt-4 mb-2 italic">    Educational Document</h2>
          
                <p>Submit Your Transcript / Certificate here ( Provide a google drive link for your document) 
                  (Click here on how to upload your document on a google Drive)</p>
                  <input type="text" id="wereda" v-model="documentLink" required
                  :class="{ 'border-red-500': documentLinkError }"
                  placeholder="Paste the link of your document here"
                  class="w-1/2 px-2 py-1 border border-gray-300 rounded-full mt-4">
              </div>
              <div class="mt-24 mb-28 flex justify-center space-x-7">
                <div class=" mt-10 ">
                  
                  <button type="submit" @click="prevButton()" class="rounded-full border text-xl font-bold italic border-purple-900 bg-white hover:bg-purple-900 hover:text-white text-purple-900 px-14 py-3">
                      Go Back
                  </button>

                </div>
                <div class=" mt-10">
                  
                  <button type="submit" @click="nextButton()" class="rounded-full border text-xl font-bold  italic border-purple-900 bg-white hover:bg-purple-900 hover:text-white text-purple-900 px-16 py-3">
                      Next
                  </button>

                </div>
              </div>
              </div>
              <div v-if="current === 2">

                  <div class="border-l-8  pl-5 border-green-400 mb-5 pb-10">
                  <div>
                    <div class="text-4xl italic text-green-400 font-extrabold">

                      Section Three: Skills and Achievements
                    </div>
                    <p class="mt-4 mb-7 text-xl">
                      Highlight your special skills and achievements in STEM-related fields.
                       If you have carried out any projects or won STEM competitions, let us know about them.
                    </p>
                  </div>
                  <h2 class="text-lg mt-4 mb-2 italic">Do you possess any special skills in STEM?</h2>
                
                  <div class="flex items-center mb-4">
                    <input
                    id="default-radio-1s"
                    type="radio"
                    value="skill-yes"
                    :class="{ 'border-red-700': skillOptionError }"
                    name="skill-option"
                    v-model="skillOption"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    >
                    <label
                      for="default-radio-1s"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Yes
                    </label>
                  </div>
                    <div class="flex items-center">
                      <input
                      id="default-radio-2s"
                      type="radio"
                      value="skill-no"
                      name="skill-option"
                      v-model="skillOption"
                      :class="{ 'border-red-700': skillOptionError }"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      >
                      <label
                        for="default-radio-2s"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                       No
                      </label>
                    </div>
                    
                    <div class=" mt-4 ml-5">
                      <p class="mb-4">If yes, please mention them:</p>
                      <vue-tags-input
                          v-model="skill"
                          :skills="skills"
                          @tags-changed="newTags => skills = newTags"
                          class="ring-1 rounded-full ring-gray-300 px-4 py-2 shadow"
                        />

                  </div>

                    <h2 class="text-lg mt-4 mb-2 italic">Have you carried out any projects in STEM?</h2>
                
                <div class="flex items-center mb-4">
                  <input
                  id="default-radio-1p"
                  type="radio"
                  value="project-yes"
                  :class="{ 'border-red-700': projectOptionError }"
                  name="project-option"
                  v-model="projectOption"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  >
                  <label
                    for="default-radio-1p"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                  <div class="flex items-center">
                    <input
                    id="default-radio-2p"
                    type="radio"
                    value="project-no"
                    :class="{ 'border-red-700': projectOptionError }"
                    name="project-option"
                    v-model="projectOption"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    >
                    <label
                      for="default-radio-2p"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                     No
                    </label>
                  </div>
                  <div class=" mt-4 ml-5">
                      <p class="mb-4">If yes, please provide details:</p>
                      <textarea
                        id="project-detail"
                        name="project-detail"
                        v-model="projectDetail"
                        class="w-3/4 shadow px-2 py-3 border border-gray-300 rounded-full"
                      ></textarea>
                  </div>
                  <h2 class="text-lg mt-4 mb-2 italic">Have you previously won a STEM competition?</h2>
                
                <div class="flex items-center mb-4">
                  <input
                  id="default-radio-1c"
                  type="radio"
                  value="competition-yes"
                  name="competition-option"
                  :class="{ 'border-red-700': competitionOptionError }"
                  v-model="competitionOption"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  >
                  <label
                    for="default-radio-1c"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yes
                  </label>
                </div>
                  <div class="flex items-center">
                    <input
                    id="default-radio-2c"
                    type="radio"
                    value="competition-no"
                    name="competition-option"
                  :class="{ 'border-red-700': competitionOptionError }"

                    v-model="competitionOption"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    >
                    <label
                      for="default-radio-2c"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                     No
                    </label>
                  </div>
                  <div class=" mt-4 ml-5">
                      <p class="mb-4">If yes, please provide details:</p>
                      <textarea
                        id="project-detail"
                        name="project-detail"
                        v-model="competitionDetail"
                        class="w-3/4 shadow px-2 py-3 border border-gray-300 rounded-full"
                      ></textarea>
                  </div>
                  <div class="mt-24 mb-28 flex justify-center space-x-7">
                    <div class=" mt-10 ">
                      
                      <button type="submit" @click="prevButton()" class="rounded-full border text-xl font-bold italic border-green-400 bg-white hover:bg-green-400 hover:text-white text-green-400 px-14 py-3">
                          Go Back
                      </button>

                    </div>
                    <div class=" mt-10">
                      
                      <button type="submit" @click="nextButton()" class="rounded-full border text-xl font-bold  italic border-green-400 bg-white hover:bg-green-400 hover:text-white text-green-400 px-16 py-3">
                          Next
                      </button>

                    </div>
                  </div>
                  </div>
            </div>
            
            <div v-if="current === 3">

              <div class="border-l-8  pl-5 border-red-600 mb-5 pb-5">
              <div>
                <div class="text-4xl italic text-red-600 font-extrabold">

                  Section Four: Skills and Achievements
                </div>
                <p class="mt-4 mb-7 text-xl">
                  Share your language proficiency and computer skills with us. This section covers the languages you speak, 
                  your language proficiency levels, and your computer skills, including programming languages.
                </p>
              </div>
              <h2 class="text-lg mt-4 mb-2 italic">What languages do you speak (Mention Them) ?</h2>

                
                <div class=" mt-4 ml-5">
                  <p class="mb-4">If yes, please mention them:</p>
                  <vue-tags-input
                      v-model="language"
                      :languages="languages"
                      @tags-changed="newTags => languages = newTags"
                      class="ring-1 rounded-full ring-gray-300 px-4 py-2 shadow"
                  :class="{ 'ring-red-700': languageError }"

                    />

              </div>

                <h2 class="text-lg mt-4 mb-2 italic">Rate your English language proficiency (Reading, Writing, Listening, Speaking):</h2>
              <div class="ml-4 mt-3">

                <p class="mb-2 text-lg">Reading</p>
                <div class="flex items-center">
                    <label
                      v-for="rating in ratings"
                      :key="rating"
                      class="flex items-center mr-4"
                    >
                      <input
                        type="radio"
                        :value="rating"
                        v-model="selectedReadingRating"
                        :class="{ 'border-red-700': selectedReadingRatingError }"

                        class="form-radio h-4 w-4 text-indigo-600"
                      >
                      <span class="ml-2 text-sm italic text-gray-500">{{ rating }}</span>
                    </label>
                  </div>
                  <p class="mb-2 text-lg mt-4">Writing</p>
                <div class="flex items-center">
                    <label
                      v-for="rating in ratings"
                      :key="rating"
                      class="flex items-center mr-4"
                    >
                      <input
                        type="radio"
                        :value="rating"
                        v-model="selectedWritingRating"
                        :class="{ 'border-red-700': selectedWritingRatingError }"

                        class="form-radio h-4 w-4 text-indigo-600"
                      >
                      <span class="ml-2 text-sm italic text-gray-500">{{ rating }}</span>
                    </label>
                  </div>
                  <p class="mb-2 text-lg mt-4">Listening</p>
                <div class="flex items-center">
                    <label
                      v-for="rating in ratings"
                      :key="rating"
                      class="flex items-center mr-4"
                    >
                      <input
                        type="radio"
                        :value="rating"
                        v-model="selectedListenRating"
                        :class="{ 'border-red-700': selectedListenRatingError }"
                        class="form-radio h-4 w-4 text-indigo-600"
                      >
                      <span class="ml-2 text-sm italic text-gray-500">{{ rating }}</span>
                    </label>
                  </div>
                  <p class="mb-2 text-lg mt-4">Speaking</p>
                    <div class="flex items-center">
                        <label
                          v-for="rating in ratings"
                          :key="rating"
                          class="flex items-center mr-4"
                        >
                          <input
                            type="radio"
                            :value="rating"
                            v-model="selectedSpeakingRating"
                            :class="{ 'border-red-700': selectedSpeakingRatingError }"
                            class="form-radio h-4 w-4 text-indigo-600"
                          >
                          <span class="ml-2 text-sm italic text-gray-500">{{ rating }}</span>
                        </label>
                      </div>
              </div>
           
              <h2 class="text-lg mt-10 mb-2 italic">Do you have previous knowledge of any of these programming languages?</h2>

           
              <div class=" mt-4 ml-5">
                  <p class="mb-4">If yes, please select one of them:</p>
                  <div class="flex items-center space-x-8">
                      <label
                        v-for="planguage in programinglanguages"
                        :key="planguage"
                        class="flex items-center mr-4"
                      >
                        <input
                          type="checkbox"
                          :value="planguage"
                          v-model="selectedpLanguages"

                          class="form-checkbox h-4 w-4 text-indigo-600 shadow"
                        >
                        <span class="ml-2 text-sm italic text-gray-500">{{ planguage }}</span>
                      </label>
                    </div>
              </div>
              <div class="mt-24 mb-28 flex justify-center space-x-7">
                <div class=" mt-10 ">
                  
                  <button type="submit" @click="prevButton()" class="rounded-full border text-xl font-bold italic border-red-600 bg-white hover:bg-red-600 hover:text-white text-red-600 px-14 py-3">
                      Go Back
                  </button>

                </div>
                <div class=" mt-10">
                  
                  <button type="submit" @click="nextButton()" class="rounded-full border text-xl font-bold  italic border-red-600 bg-white hover:bg-red-600 hover:text-white text-red-600 px-16 py-3">
                      Next
                  </button>

                </div>
              </div>
              </div>
            </div>
            <div v-if="current === 4">

            <div class="border-l-8  pl-5 border-purple-900 mb-5 pb-5">
            <div>
              <div class="text-4xl italic text-purple-900  font-extrabold">

                Section Five: Motivation and Documents
              </div>
              <p class="mt-4 mb-7 text-xl">
                Tell us about your motivation and interest in space science and space-related activities. 
                Additionally, provide any relevant documents, certificates, or references that support your application.
              </p>
            </div>
            <h2 class="text-lg mt-4 mb-2 italic">Briefly explain your motivation and interest in space science and space-related activities:</h2>

              
              <div class=" mt-4 ml-5">
                <textarea
                        id="motivation-detail"
                        name="motivation-detail"
                        v-model="motivationDetail"
                        class="w-full shadow px-4 py-16 border border-gray-300 rounded-lg"
                        :class="{ 'border-red-700': motivationDetailError }"
                        
                        >
                </textarea>

            </div>

              <h2 class="text-lg mt-4 mb-2 italic">
                  Do you have any relevant documents, certificates, or recommendation letter?
              </h2>
            <div class="ml-7 mt-3">

              <p class="mb-2 text-lg italic">(Click here on how to upload your document on a google Drive)</p>
              <input type="text"
              v-model="cvLink"
              placeholder="link to your CV here"
               class="w-1/2 px-2 py-3 italic border shadow border-gray-400 rounded-full mt-4">
               <input type="text"
               v-model="certificateLink"
              placeholder="link to your certificates here"
               class="w-1/2 px-2 py-3 italic border shadow border-gray-400  rounded-full mt-4">
               <input type="text"
                v-model="recommendationLink"
              placeholder="link to your recommendation letter here"
               class="w-1/2 px-2 py-3 italic border shadow border-gray-400  rounded-full mt-4">
            </div>

            <h2 class="text-lg mt-4 mb-2 italic">Have you participated in space science and related local and International organizations?</h2>
                
                <div class="flex items-center mb-4">
                  <input
                    id="default-radio-1a"
                    type="radio"
                    value="participation"
                    name="default-radioa"
                    v-model="participation"
                  :class="{ 'border-red-700': participationError }"

                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  >
                  <label
                    for="default-radio-1a"
                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Yes
                  </label>
                </div>
                  <div class="flex items-center">
                    <input
                      id="default-radio-2a"
                      type="radio"
                      value="participation"
                      name="default-radioa"
                      v-model="participation"
                      :class="{ 'border-red-700': participationError }"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    >
                    <label
                      for="default-radio-2a"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                     No
                    </label>
                  </div>
                  
                  <div class=" mt-4 ml-5">
                    <p class="mb-4">If yes, Mention them here:</p>
                    <vue-tags-input
                        v-model="org"
                        :orgs="orgs"
                        @tags-changed="newTags => orgs = newTags"
                        class="ring-1 rounded-xl ring-gray-300 px-4 py-2 shadow"
                      />

                </div>
            <div class="mt-24 mb-28 flex justify-center space-x-7">
              <div class=" mt-10 ">
                
                <button type="submit" @click="prevButton()" class="rounded-full border text-xl font-bold italic border-purple-900 bg-white hover:bg-purple-900 hover:text-white text-purple-900 px-14 py-3">
                    Go Back
                </button>

              </div>
              <div class=" mt-10">
                
                <button type="submit" @click="submitForm()" class="rounded-full border text-xl font-bold  italic border-purple-900 bg-white hover:bg-purple-900 hover:text-white text-purple-900 px-16 py-3">
                    Finish  
                </button>

              </div>
            </div>
            </div>
            </div>
      </div>
      </div>
      <ErrorModal v-if="!registersuccess && error" />
      <Modal v-if="registersuccess" :title="successTitle"  :body="successBody"/>
      <Footer />
  </div>
</template>

<script>

import NavBar from '../components/NavBar.vue';
import VueTagsInput from '@johmun/vue-tags-input';
import { mapActions } from 'vuex'
import Modal from '../components/Modal.vue';
import ErrorModal from '../components/ErrorModal.vue';

export default {
  components: {
    VueTagsInput,
  },
  data() {
    return {
      successTitle: 'Registrations Success!',
      successBody: 'Your application has been submitted successfully. We will get back to you soon.',
      isLoading: false,
      error:false,
      registersuccess:false,
      current: 0,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      sex: "",
      dateOfBirth: new Date(),
      region: "",
      zone: "",
      wereda: "",
      parentFirstName: "",
      parentLastName: "",
      parentEmail: "",
      parentPhoneNumber: "",
      schoolName: "",
      schoolType: "",
      schoolRegion: "",
      schoolZone: "",
      schoolWereda: "",
      educationalLevel: "",
      documentLink: "",
      skill: '',
      skills: [],
      projectDetail: "",
      ratings: ['Advanced', 'Excellent', 'Very Good', 'Good','Satisfactory'],
      selectedReadingRating: '',
      language: '',
      languages: [],
      selectedWritingRating: '',
      selectedListenRating: '',
      selectedSpeakingRating: '',
      programinglanguages: ['Python', 'Scratch', 'Java', 'C', 'C++'],
      selectedpLanguages: [],
      motivationDetail: "",
      cvLink: "",
      certificateLink: "",
      recommendationLink: "",
      org: '',
      orgs: [],
      skillOption: '',
      competition: '',
      participation: '',
      projectOption: '',
      competitionOption: '',
      selectedRating: '',
      
      competitionDetail: '',
      // Section One: Personal Information
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    phoneNumberError: false,
    sexError: false,
    dateOfBirthError: false,
    regionError: false,
    zoneError: false,
    weredaError: false,
    parentFirstNameError: false,
    parentLastNameError: false,
    parentEmailError: false,
    parentPhoneNumberError: false,

    // Section Two: Educational Background
    schoolNameError: false,
    schoolTypeError: false,
    schoolRegionError: false,
    schoolZoneError: false,
    schoolWeredaError: false,
    educationalLevelError: false,
    documentLinkError: false,
    // Section Three: 
    skillOptionError: false,
    projectOptionError: false,
    competitionOptionError: false,

    

    // Section Four: 
    languageError: false,
    selectedReadingRatingError: false,
    selectedWritingRatingError: false,
    selectedListenRatingError: false,
    selectedSpeakingRatingError: false,


    // Section Five:
    motivationDetailError: false,

    participationError: false,

     

    };
  },
  methods: {
    ...mapActions('user', ['register']),
    nextButton() {
      if (this.current === 0) {
      // Section One: Personal Information
      this.firstNameError = this.firstName === '';
      this.lastNameError = this.lastName === '';
      this.emailError = this.email === '';
      this.phoneNumberError = this.phoneNumber === '';
      this.sexError = this.sex === '';
      this.dateOfBirthError = this.dateOfBirth === '';
      this.regionError = this.region === '';
      this.zoneError = this.zone === '';
      this.weredaError = this.wereda === '';
      this.parentFirstNameError = this.parentFirstName === '';
      this.parentLastNameError = this.parentLastName === '';
      this.parentEmailError = this.parentEmail === '';
      this.parentPhoneNumberError = this.parentPhoneNumber === '';
    } else if (this.current === 1) {
      // Section Two: Educational Background
      this.schoolNameError = this.schoolName === '';
      this.schoolTypeError = this.schoolType === '';
      this.schoolRegionError = this.schoolRegion === '';
      this.schoolZoneError = this.schoolZone === '';
      this.schoolWeredaError = this.schoolWereda === '';
      this.educationalLevelError = this.educationalLevel === '';
      this.documentLinkError = this.documentLink === '';
    }
    else if (this.current === 2) {
      // Section Three: Skills and Achievements
      this.skillOptionError = this.skillOption === '';
      // 
      this.projectOptionError = this.projectOption === '';
      this.competitionOptionError = this.competitionOption === '';
    }
    else if (this.current === 3) {
    // Section Four: Skills and Achievements
      this.languageError = this.languages.length === 0;
      this.selectedReadingRatingError = this.selectedReadingRating === '';
      this.selectedWritingRatingError = this.selectedWritingRating === '';
      this.selectedListenRatingError = this.selectedListenRating === '';
      this.selectedSpeakingRatingError = this.selectedSpeakingRating === '';

    
    }
    else if (this.current === 4) {
     // Section Five: Motivation and Documents
        this.motivationDetailError = this.motivationDetail === '';
       
        
        this.participationError = this.participation === '';
   
    }
   


    // Check if any errors exist
    if (
      this.firstNameError ||
      this.lastNameError ||
      this.emailError ||
      this.phoneNumberError ||
      this.sexError ||
      this.dateOfBirthError ||
      this.regionError ||
      this.zoneError ||
      this.weredaError ||
      this.parentFirstNameError ||
      this.parentLastNameError ||
      this.parentEmailError ||
      this.parentPhoneNumberError ||
      this.schoolNameError ||
      this.schoolTypeError ||
      this.schoolRegionError ||
      this.schoolZoneError ||
      this.schoolWeredaError ||
      this.educationalLevelError ||
      this.documentLinkError ||
      this.skillOptionError ||
      this.projectOptionError ||
      this.competitionOptionError ||
      this.languageError ||
      this.selectedReadingRatingError ||
      this.selectedWritingRatingError ||
      this.selectedListenRatingError ||
      this.selectedSpeakingRatingError 
   

    ) {
      // Handle the errors (e.g., display an error message)
 
      return;
    }
    else{

      this.current = this.current + 1;
    }

    },
    prevButton() {
      if (this.current == 0) {
        return;
      }
      this.current = this.current - 1;
    },

    async submitForm() {
      if (this.current === 4) {
     // Section Five: Motivation and Documents
        this.motivationDetailError = this.motivationDetail === '';
       
        
        this.participationError = this.participation === '';
   
    }
    if (   this.motivationDetailError ||
      this.participationError)
      {

        return;
      }
      else{

        this.isLoading = true;
        
        // ...
        const userInfo = {
            firstName: this.firstName,
            lastName: this.lastName,
            email : this.email,
            phoneNumber: this.phoneNumber,
            sex: this.sex,
            dateOfBirth: this.dateOfBirth,
            region: this.region,
            zone: this.zone,
            wereda:   this.wereda,
            parentFirstName: this.parentFirstName,
            parentLastName: this.parentLastName,
            parentEmail: this.parentEmail,
            parentPhoneNumber: this.parentPhoneNumber,
            schoolName: this.schoolName,
            schoolType: this.schoolType,
            schoolRegion:   this.schoolRegion,
            schoolZone: this.schoolZone,
            schoolWereda: this.schoolWereda,
            educationalLevel: this.educationalLevel,
            documentLink:   this.documentLink,
            projectDetail: this.projectDetail,
            selectedReadingRating: this.selectedReadingRating,
            selectedWritingRating: this.selectedWritingRating,
            selectedListenRating: this.selectedListenRating,
            selectedSpeakingRating: this.selectedSpeakingRating,
            motivationDetail : this.motivationDetail,
            cvLink: this.cvLink,
            certificateLink: this.certificateLink,
            recommendationLink: this.recommendationLink,
            skillOption: this.skillOption,
            competition: this.competition,
            projectOption: this.projectOption,
            competitionOption: this.competitionOption,
            selectedRating: this.selectedRating,
            skillOption: this.skillOption,  // Include this field
            competition: this.competition,  // Include this field
            participation: this.participation,  // Include this field
            projectOption: this.projectOption,  // Include this field
            competitionOption: this.competitionOption,  // Include this field
            selectedRating: this.selectedRating  
  
        } 
     
  
        const res = await this.register(userInfo);
  
        this.isLoading = false;
   
  
        if(res.status === 201 || res.response.status === 201 ){
          this.registersuccess = true;
  
        }
        else{
          this.error = true
        }
      }

    },
  },
};
</script>

<style>
body{
  background-color: rgb(93, 11, 93) !important;
  
}
</style>
