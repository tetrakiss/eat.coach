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
</style>
<template>
  <div>
    <el-container>
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
          <el-button style="float:right;"type="primary" icon="el-icon-menu"></el-button>
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
          goBack: function() {
            window.history.length > 1
            ? this.$router.go(-1)
            : this.$router.push('/')
          }
      }
    }
  </script>
