<template>
  <div class="header">
    <!--
        <el-tabs v-model="activeName">
          <el-tab-pane label="合约添加" name="first"></el-tab-pane>
          <el-tab-pane label="合约展示" name="second"></el-tab-pane>
        </el-tabs>
-->
    <el-row :gutter="20">
      <el-col :span="4">
        EOS
      </el-col>
      <el-col :span="14" style="color:#443f54">

        .

      </el-col>
      <el-col :span="6" class="text-right">
        <img src="./../assets/author-avatar.png" class="icon"> {{user.username}} ({{user.uid}})
        <el-button type="text" @click="logout()">退出</el-button>
      </el-col>
    </el-row>
  </div>

</template>
<script>
export default {
  data() {
    return {
      user: {
        uid: "",
        username: ""
      },
      activeIndex: "1"
    };
  },
  mounted() {
    console.log("ssss");
    let user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user);
    this.user = user;
  },
  methods: {
    logout: function() {
      sessionStorage.removeItem("user");
      this.$router.push({ path: "/login" });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
img.icon {
  border-radius: 40px;
  vertical-align: middle;
}
.el-header {
  background-color: #443f54;
}
.el-header .el-col {
  line-height: 60px;
}
.el-header .el-col {
  color: white;
}
</style>

