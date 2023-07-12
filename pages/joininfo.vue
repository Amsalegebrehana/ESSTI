<template>

    <div>
        <NavBar/>
               <div class="bg-white mt-2 pb-16">
                <div  class="max-w-3xl mx-auto pb-28">
                    <h1 class="text-6xl font-extrabold text-center text-purple-900 pt-5">Join ESKC Now!</h1>
                    
                    <hr  class="mt-10 border-t-4 border-green-400 my-14  "/>
                    <h1 class="text-3xl font-bold text-center text-purple-900 pt-5 italic  mb-5">  About the Application Process</h1>
                    <p class=" text-center text-purple-900 text-lg  mb-10">Thank you for your interest in joining the Ethio Space Kids Club! To be considered for admission, please complete the application form by providing accurate and detailed information in each section. The information you provide will help us understand your background, skills, achievements, and passion for space science. 
                        We look forward to reviewing your application and welcoming you to our club! </p>
                    <div>
                        <img src="../static/eskc page contents-11.svg" alt="" max-height="700">
                    </div>
                  
                    <div class="flex justify-center mt-10 mb-24"> 
                        <button @click="register()" class="border border-black text-4xl font-bold rounded-md italic px-8 py-2 bg-yellow-400">
                        Register
                        </button>
                    </div>
                </div>
               </div>

        <Footer />
    </div>
</template>

<script>

export default {
    name: "JoinInfoPage",
    methods:{
       
        register(){
            // navigate to the registration page
            this.$router.push('/register');
        },
    }


}

</script>


<style>
body{
  background-color: rgb(93, 11, 93) !important;
  
}

</style>