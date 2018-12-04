/* eslint-disable no-alert, no-console */
<template>
  <div style="height:100%;">
    <slide  />


    <main id="page-wrap">


    </main>
</div>
</template>


<script>
import Menu from '@/components/Menu';
import slide from '@/components/Slide';
  export default {
    data() {
      return {

      };
    },
    components: {
      slide
    },
    methods: {

    }
  }
</script>
<style>

   a {
     color: #4e4a46;
     text-decoration: none;
   }

   main {

     padding: 3em 2em;
     text-align: center;
     background: #FFF;
     overflow: auto;
   }




   .sideButton {
     display: inline-block;
     width: 5em;
     height: 2.5em;
     line-height: 2.5em;
     cursor: pointer;
     background: #fff;
     text-transform: uppercase;
     letter-spacing: 1px;
     font-size: 0.8em;
     font-weight: 800;
   }

   @media screen and (max-width: 40em) {
     main {
       font-size: 80%;
     }

     h1 {
       padding-top: 1em;
       font-size: 2.5em;
     }

     .demo-buttons {
       max-width: 900px;
       padding: 0 2em;
     }
   }


   .bm-burger-button {
     position: absolute;
     width: 36px;
     height: 30px;
     left: 36px;
     top: 36px;
   }

   .right .bm-burger-button {
     left: initial;
     right: 36px;
   }

   .bm-burger-bars {
     background: rgba(237,77,61,1);
   }

   .bm-morph-shape {
     fill: rgba(237,77,61,1);
   }

   .bm-menu {
     background-position: center;
         background-repeat: no-repeat;
         background-size: cover;
     background: linear-gradient(to bottom,  rgba(237,77,61,0.9), rgba(51,51,51,0.9)), url("../assets/bg.jpg") ;
     background: -webkit-linear-gradient(to bottom,  rgba(237,77,61,0.9), rgba(51,51,51,0.9)) ,url("../assets/bg.jpg");

   }







</style>
