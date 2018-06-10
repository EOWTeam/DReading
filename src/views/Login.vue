<template>
    <div>

        <el-container>
            <el-header>
                <eo-header></eo-header>
            </el-header>
            <el-main>
                <!--main-->

                <el-form :model="form" label-position="left" label-width="0px" class=" login-container">
                    <h3 class="title">登录</h3>
                    <el-form-item prop="account">
                        <el-input type="text" v-model="form.uid" auto-complete="off" placeholder="用戶编号"></el-input>
                    </el-form-item>

                    <el-form-item prop="account">
                        <el-input type="text" v-model="form.username" auto-complete="off" placeholder="用戶账号"></el-input>
                    </el-form-item>

                    <el-form-item style="width:100%;">
                        <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit">登录</el-button>
                        <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
                    </el-form-item>
                </el-form>

                <!--/main-->
            </el-main>
        </el-container>

    </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        uid: "",
        username: "",
        role: 1
      }
    };
  },
  methods: {
    handleSubmit: function() {
      var user = Object.assign({}, this.form);
      console.log(user);
      sessionStorage.setItem("user", JSON.stringify(user));
      this.$router.push({ path: "/other" });
    }
  }
};
</script>


<style>
.login-container{ width: 300px; margin: 0 auto;}
</style>
