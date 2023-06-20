<template>
    <!-- component -->
    <div class="flex justify-center px-20">
        <div class="bg-white shadow-md m-20 rounded mb-4 w-3/4 p-16">
      <div class="max-w-3xl mx-16 mt-10">
        <div v-if=" isRegistered" class="p-4 mb-4 text-sm text-green-50 rounded-lg bg-green-600 dark:bg-gray-800 dark:text-green-400" role="alert">
  <span class="font-medium">Registered Successfully !</span> Verification link has been sent to your email address.
</div>
    <div  class="text-center text-4xl text-blue-700 mb-10">
      REGISTER
    </div>
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Full Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="name" type="text" placeholder="Full Name" v-model="fullName">
      <div v-if="errorMessages.fullName" class="text-red-500">{{ errorMessages.fullName }}</div>
    
    </div>
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="text" placeholder="Email" v-model="email">
      <div v-if="errorMessages.email" class="text-red-500">{{ errorMessages.email }}</div>
      
    </div>
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password" >
        Password
      </label>
      <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="*********" v-model="password">
      <div v-if="errorMessages.password" class="text-red-500">{{ errorMessages.password }}</div>
      
    </div>
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password" >
       Confirm Password
      </label>
      <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="*********" v-model="passwordConfirm">
        <div v-if="errorMessages.passwordConfirm" class="text-red-500">{{ errorMessages.passwordConfirm }}</div>
    </div>
    <div class="flex items-center justify-between">
      <button v-if=" !isLoading" @click="signUp"  class="bg-blue-700 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
        Sign Up
      </button>
      <button v-else class="bg-blue-700 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
        ...
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-700 hover:text-blue-400" href="/login">
        Already have an account? Sign In.
      </a>
    </div>
  </div>
</div>
</div>

</template>

<script>
import { mapActions } from 'vuex';

export default {
    data(){
        return{
            isLoading:false,
            fullName:"",
            email:"",
            password:"",
            passwordConfirm:"",
            errorMessages:{},
            isRegistered:false,
        }
    },
    methods:{
        ...mapActions('user',['register']),
        // validate input values
        validateInput(){
            this.errorMessages = {}
            if(this.fullName === ""){
                this.errorMessages.fullName= "Full Name is required!";
            }
            if(this.email === ""){
            // check email format
            this.errorMessages.email = "Email is required!";
            }else {
                // Email format validation using regular expression
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(this.email)) {
                this.errorMessages.email = "Invalid email!";
                }
            }
            if(this.password === ""){
                this.errorMessages.password = "Password is required!";

            }else if (this.password.length < 8) {
                this.errorMessages.password = "Password should be at least 8 characters long!";
            }
            if(this.passwordConfirm == ""){
                this.errorMessages.passwordConfirm= "Password confirmation is required!";
            }
            if(this.password != this.passwordConfirm){
                this.errorMessages.passwordConfirm = "Password and password confirmation must match!";
            }
        },
        // sign up function
         async signUp(){
        

          this.isLoading = true;
            this.validateInput();
            
            if(Object.keys(this.errorMessages).length == 0){
                const res = await this.register({
                    name: this.fullName,
                    email: this.email,
                    password: this.password,
                
                });
                if(res){
                    this.isRegistered = true;
                    this.fullName = "";
                    this.email = "";
                    this.password = "";
                    this.passwordConfirm = "";
                }
              
            }
            this.isLoading = false;
            this.isRegistered = false;
        },
    }

}

</script>