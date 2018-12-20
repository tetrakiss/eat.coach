<style>
.headerContainer {
  margin-top: 1vw;
}
.headerTitle {
  color: rgba(237,77,61,1);
  font-weight: 600;
  text-transform: uppercase;
  line-height: 30px;
}
/* The side navigation menu */
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 9999; /* Stay on top */
  top: 0; /* Stay at the top */
  right: 0;
  background-color: rgba(237,77,61,1); 
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}
#main {
  transition: margin-right .5s;
  padding: 20px;
}
</style>
<template>
  <div>
    <el-container id="main">
  <el-header>
    <el-row class="headerContainer" type="flex"justify="space-around">
      <el-col :span="3">
        <div class="grid-content">
          <el-button v-show="checkHistory" style="float:left;" type="primary" @click="goBack" icon="el-icon-arrow-left"></el-button>
        </div>
      </el-col>
      <el-col :span="12"><div class="headerTitle"><slot name="header"></slot></div></el-col>
      <el-col :span="3">
        <div class="grid-content">
          <el-button style="float:right;"type="primary" @click="openSideMenu" icon="el-icon-menu"></el-button>
        </div>
    </el-col>
  </el-row>
</el-header>
  <el-main>
    <el-row type="flex" justify="center">
      <el-col :span="20"><div class="grid-content"><slot name="main"></slot></div></el-col>
</el-row>
  </el-main>
  <el-footer><slot name="footer"></slot></el-footer>
</el-container>
<div id="Sidenav" class="sidenav">
  <el-button style="float:right;"type="primary" @click="closeSideMenu" icon="el-icon-menu"></el-button>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>
  </div>
</template>
<script>
    export default {
      name: 'mainTemplate',
      data() {
        return {

        }
      },
      computed : {
        checkHistory : function() {
          if(window.history.length > 1) {
            return true;
          }else {
            return false;
          }
        }
      },
      methods: {
        openSideMenu: function (){
          document.getElementById("Sidenav").style.width = "250px";

        },
        closeSideMenu: function (){
          document.getElementById("Sidenav").style.width = "0";

        },
          goBack: function() {
            window.history.length > 1
            ? this.$router.go(-1)
            : this.$router.push('/')
          }
      }
    }
  </script>
