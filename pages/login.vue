
<template>

  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto item-center ml-2 sm:w-full sm:max-w-sm px-14">
        <a href="/">

            <img class="block h-8 w-40 lg:hidden " src="../static/ESKC Logo-16.png" alt="Your Company">
            <img class="hidden h-22 w-60 lg:block" src="../static/ESKC Logo-16.png" alt="Your Company">
          </a>
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-md shadow-md p-5">
      <div class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input id="password"  name="password" type="password" class="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button @click="login()" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script>
   export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        console.log('login', this.email, this.password)
        // this.$auth.loginWith('local', {
        //   data: {
        //     email: this.email,
        //     password: this.password
        //   }
        // })
       
        // go to courses page
        this.$router.push('/courses')
      }
    }
}
</script>