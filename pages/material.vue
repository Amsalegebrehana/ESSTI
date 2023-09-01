<template>
  <div class="all">
  
    <NavBar/>
     <div class="bg-white mt-2 pb-16 ">
        <div class="container">
        <div class="display">
            <div class="video">
                <iframe width="1010" height="415" src="https://www.youtube.com/embed/bhnrIforc7s?si=x3lQLdsTvxBIhTof" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
            </div> 
            <div class="description">
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatum
                     sint reiciendis cupiditate odio ad sapiente sequi quam, neque quibusdam?
                </p>
            </div>   
             <div class="study">
                <h3>Let's Decipher More! <i class="fa-solid fa-thumbs-up"></i></h3>
            </div>
            <div class="document">
                <div class="pdf">
                    <a href="https://www.olivehackney.com/wp-content/uploads/2020/07/Addition-and-Subtraction-Workbook.pdf" download="Mathematics"><i class="fa-solid fa-download"></i>  Astronomy</a>
                </div>
                <div class="pdf">
                    <a href="https://www.olivehackney.com/wp-content/uploads/2020/07/Addition-and-Subtraction-Workbook.pdf" download="Mathematics"><i class="fa-solid fa-download"></i>  Mathematics</a>
                </div>
                <div class="pdf">
                    <a href="https://www.olivehackney.com/wp-content/uploads/2020/07/Addition-and-Subtraction-Workbook.pdf" download="Mathematics"><i class="fa-solid fa-download"></i>  Physics</a>
                </div>
            </div>                
        </div>
        <div class="content">
            <h3>Contents</h3>
            <div>
                <div class="material">
                    <p><a href="#">Material 1</a></p>
                </div>
                <div class="material">
                    <p><a href="#">Material 2</a></p>
                </div>
                <div class="material">
                    <p><a href="#">Material 3</a></p>
                </div>
                <div class="material">
                    <p><a href="#">Material 4</a></p>
                </div>
                <div class="material">
                    <p><a href="#">Material 5</a></p>
                </div>
            </div>
        </div>
    </div>
      
<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const open = ref(true)
</script>
     </div>
    <Footer />
    </div>

</template>
<style>
body{
  background-color: rgb(93, 11, 93) !important;
}
*,
*::after,
*::before{
    box-sizing:border-box;
}

::selection{
    background: var(--color-primary);
    color: #fff;
}
html{
    /*62.5% 0f 16px = 10px*/
    font-size: 62.5%;
}

:root{
    --color-primary:#2584ff;
    --color-secondary:#00d9ff;
    --color-heading:#1b0760;
    --color-border: #ccc;
    --border-radius: 30px;
}

body{
    font-family: Inter, Arial, Helvetica, sans-serif;
    /* font-size: 2.4rem; */
    line-height: 1.5;
    color: var(--color-body-darker);
}

h1,
h2,
h3{
    color: var(--color-heading);
    margin-bottom: 1rem;
    line-height: 1.1;
}

h1{
    font-size: 7rem;
}

h2{
    font-size: 4rem;
}

h3{
    font-size: 3rem;
    font-weight: 500;
}

p{
    margin-top: 0;
}

.container{
    margin: 1rem 0;
    padding: 1rem 0.5rem;
    display: flex;
    flex-direction: row;
}

.display{
    width: 80%;
}
.content{
    margin-left:0.15rem;
    width: 25%;
    height: 100vh;
}
.content h3{
    margin-left: 2rem;
}
.video{
    width: 100vw;
}

/*Content Material*/
.description{
    padding: 0.5rem 1rem ;
    margin-top: 3rem;
}
.description p{
    font-size: 20px;
}
a{
    text-decoration: none;
}
.material{
    border: 0.5px solid var(--color-border);
    border-left: 0.5rem solid var(--color-heading);
    box-shadow: 0 0 1rem 0 0.5rem var(--color-border);
    padding:1rem 1rem;
    text-align:left;
    border-right: none;
    cursor: pointer;
    margin-left: 1rem;
}
.material:hover{
    box-shadow: 1px 1px 2px #ccc;
    border-left:100rem;
}
.material p a{
    font-size: 1.5rem;
    position: relative;
    top: 0.75rem;
    color: #000;
    border-collapse: collapse;
}
.display .study{
    color: var(--color-heading);
    margin-top: 3rem;
    margin-left: 2rem;
}

.display .study:hover{
    cursor: pointer;
    margin-left: 1rem;
}

.document .pdf{
    border: 0.1px solid #ccc;
    border-left: 4px solid red;
    padding: 0.75rem 0.5rem;
}
.document .pdf:hover{
    box-shadow: 0 0 15px #ccc;
}
.document .pdf a{
    font-size: 2rem;
    color: #000;
}
.document .pdf a:hover{
    color: #2b2a2a;
}
</style>