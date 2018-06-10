<template>
  <div>

    <div class="works-detail">
      作品detail
    </div>

    {{user}}
    <a href="#/contractadd" target="">签约 EOW </a>
    |
    <a href="#/worksdetail" target="">work1 </a>
    |
    <a href="#/worksdetail2" target="">work2 </a>

  </div>
</template>


<script>
export default {
  data(){
     return {
       user:{}
     }
  },
  created() {
   
    let user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user);
    this.user = user;
  }
};
</script>


<style>
.works-detail {
  border: 1px solid gray;
  padding: 30px;
  margin-bottom: 30px;
  border-radius: 10px;
}
</style>

