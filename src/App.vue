<template>
  <div id="app">
    <router-view/>
  </div>
</template>




<script>
export default {
  name: "App",
  data() {
    return {
      activeName: 1
    };
  }
};
</script>








<style>
body {
  margin: 0px;
}
.el-header,
.el-footer {
  background-color: gainsboro;
  color: #333;
  text-align: center;
  line-height: 20px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: left;
}

.el-main {
  color: #333;
  text-align: left;
  line-height: 160px;
  padding: 15px;
  line-height: 20px;
}

body > .el-container {
  margin-bottom: 40px;
}

.borderpadding {
  border: 1px solid silver;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 5px;
}

h5 {
  padding: 0px;
  margin: 0px;
}

.mb10 {
  margin-bottom: 10px;
}
.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}
</style>
