<template>
    <div>
        <el-container>
            <el-header>
                <eo-header></eo-header>
            </el-header>
            <el-main class="contract-detail">
                <!--main-->

                <h3 class="text-center">{{contract.ip_name}} 合约信息</h3>
                <div class="contract-box">
                    <!-- step -->

                    <el-form ref="form" :model="contract" label-width="120px" class="formbox">
                        <img src="./../assets/pen.png" class="pen" />
                        <h3 class="text-center">Contract Confirm</h3>
                        <!--  -->
                        <div class="modulebox">
                            <h4>Intellectual Property</h4>
                            <el-form-item label="Owner">
                                {{contract.owner_account}}
                            </el-form-item>

                            <el-form-item label="Name">
                                {{contract.ip_name}}
                            </el-form-item>

                            <el-form-item label="Original URL
">
                                {{contract.ip_url}}
                            </el-form-item>

                        </div>
                        <!-- /份额部分 -->

                        <!-- 份额部分 -->
                        <div class="modulebox">
                            <h4>Tokenlize the Right to Earnings of IP
                            </h4>
                            <el-form-item label="Name">
                                {{contract.stoke_token_name}}
                            </el-form-item>

                            <el-form-item label="Symbol">
                                {{contract.stoke_token_symbol}}
                            </el-form-item>

                            <el-form-item label="Total Supply
">
                                {{contract.total_supply}}
                            </el-form-item>

                            <el-form-item label="Amount of Crowdsale">
                                {{contract.crowdsale_amount}}
                            </el-form-item>

                            <el-form-item label="Price">
                                {{contract.price}}
                            </el-form-item>

                        </div>
                        <!-- /份额部分 -->

                        <!-- 资产部分 -->
                        <div class="modulebox">

                            <h4>Subject Matter
                            </h4>

                            <div class="right el-form-item" label="影视改编权" border>
                                <i class="el-icon-check" /> Right of Adaptation - Video</div>
                            <div class="right el-form-item" label="游戏改编权" border>
                                <i class="el-icon-check" /> Right of Adaptation - Game</div>
                            <div class="right el-form-item" label="纸质书出版权" border>
                                <i class="el-icon-check" /> Right of paper book publishment</div>

                        </div>

                        <!-- /资产部分 -->

                        <!-- 资产部分 -->
                        <div class="modulebox">

                            <h4>Regulatory Authority
                            </h4>

                            <div>The owner of the intellectual property rights promises that all the intellectual property rights and the transactions derived from this contract will be subject to the supervision of the designated third party regulatory authority.</div>

                        </div>

                        <!-- /资产部分 -->

                    </el-form>
                </div>
                <div class="submit text-center">
                    <el-button type="" @click="toContractDetail(1)">Go to IP Contract Detail 1</el-button>
                    <el-button type="" @click="toContractDetail(2)">Go to IP Contract Detail 2</el-button>
                </div>

                <!--/main-->
            </el-main>
        </el-container>

    </div>
</template>



<script>
import axios from "axios";

export default {
  data() {
    return {
      contract: {},
      assets: 1
    };
  },
  methods: {
    getRemote: function() {
      var that = this;
      //post remote
      axios.get("http://localhost/api/ipcontract/get", {}).then(function(res) {
        console.log(res.data);
        that.contract = res.data.contract;
      });
    },
    toContractDetail: function(index) {
      console.log("----");
      var path="/worksdetail";
      if(index==2){
        path="/worksdetail2"
      }
      this.$router.push({ path: path });
    }
  },
  created() {
    this.getRemote();
  }
};
</script>


<style>
.contract-detail h3 {
  font-family: Apple-Chancery;
  font-size: 36px;
  color: #444344;
  text-align: center;
}
.contract-detail h4 {
  border-left: 5px solid #9e80ff;
  padding-left: 10px;
}

.note {
  font-family: LucidaGrande;
  font-size: 16px;
  color: #b5b4b6;
  text-align: left;
}
.role-author {
  background-color: #ececec;
}

.el-checkbox {
  display: block;
  margin-bottom: 10px;
  margin-left: 0px !important;
  padding: 20px;
}

.contract-detail .el-form-item {
  border-bottom: 1px solid gray;
}
.el-steps {
  margin: 20px 100px;
}
.contract-detail .formbox {
  margin: 50px 100px;
  box-shadow: 0 0 14px 5px rgba(218, 218, 218, 0.5);
  padding: 20px 50px;
  background:#fffdcd;
  position: relative;
}

.contract-detail .formbox img.pen {
  position: absolute;
  top: 0px;
  right: 0px;
}
.right {
  padding: 15px;
}
div.title {
  margin: 0px !important;
  padding: 0px !important;
  font-weight: bolder;
}
.modulebox {
  border-radius: 5px;

  margin-bottom: 30px;
}
.submit {
  text-align: center;
}
.el-button--primary {
  padding: 10px 50px;
}
</style>
