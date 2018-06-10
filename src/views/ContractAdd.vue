<template>

    <div class="role-author">
        <el-container>
            <el-header>
                <eo-header></eo-header>
            </el-header>
            <el-main>
                <!--main-->
                <!-- step -->
                <el-steps :active="1" finish-status="success">
                    <el-step title="填写合约信息"></el-step>
                    <el-step title="转移份额"></el-step>
                    <el-step title="资产购买分钱"></el-step>
                </el-steps>

                <h3 class="text-center">Contract Save</h3>

                <el-form ref="form" :model="contract" label-width="120px" class="formbox">

                    <!--  -->
                    <div class="modulebox">
                        <h4>Intellectual Property</h4>
                        <el-form-item label="Owner">
                            <el-input v-model="contract.owner_account"></el-input>
                        </el-form-item>

                        <el-form-item label="Name">
                            <el-input v-model="contract.ip_name"></el-input>
                        </el-form-item>

                        <el-form-item label="Original URL">
                            <el-input v-model="contract.ip_url"></el-input>
                        </el-form-item>

                    </div>
                    <!-- /份额部分 -->

                    <!-- 份额部分 -->
                    <div class="modulebox">
                        <h4>Tokenlize the Right to Earnings of IP</h4>
                        <el-form-item label="Name">
                            <el-input v-model="contract.stoke_token_name"></el-input>
                        </el-form-item>

                        <el-form-item label="Symbol">
                            <el-input v-model="contract.stoke_token_symbol"></el-input>
                        </el-form-item>

                        <el-form-item label="Total Supply">
                            <el-input v-model="contract.total_supply"></el-input>
                        </el-form-item>

                        <el-form-item label="Amount of Crowdsale">
                            <el-input v-model="contract.crowdsale_amount"></el-input>
                        </el-form-item>

                        <el-form-item label="Price">
                            <el-input v-model="contract.price"></el-input>
                        </el-form-item>

                        <div class="note">
                            The owner of this IP promises that MSP is the proof of right to get benifit from futhure earnings of IP rights described in this contract. Not matter in what way the revenue is made from the IP tights described in this contract, MSP holder will get the proper potion of revenue according how many MSP he/she holds.
                        </div>

                    </div>
                    <!-- /份额部分 -->

                    <!-- 资产部分 -->
                    <div class="modulebox">

                        <h4>Subject Matter</h4>

                        <el-checkbox-group v-model="assets">
                            <el-checkbox label="Right of Adaptation - Video" border></el-checkbox>
                            <el-checkbox label="Right of Adaptation - Game" border></el-checkbox>
                            <el-checkbox label="Right of paper book publishment" border></el-checkbox>
                        </el-checkbox-group>

                        <div class="note">
                            The owner of this IP promises that all revenues of rights described in this contract, including Right of Adaptation - Video, Right of Adaptation - Game and Right of paper book publishment, will be paied into this contract account and will be sent to all MSP holders according to the number of MSP they hold.

                        </div>

                    </div>

                    <!-- /资产部分 -->

                    <!-- 资产部分 -->
                    <div class="modulebox">

                        <h4>Regulatory Authority</h4>

                        <div class="note">The owner of the intellectual property rights promises that all the intellectual property rights and the transactions derived from this contract will be subject to the supervision of the designated third party regulatory authority.
                        </div>

                    </div>

                    <!-- /资产部分 -->

                    <div class="submit text-center">
                        <el-button type="primary" @click="onSubmit">Sign</el-button>
                    </div>

                </el-form>
                <!--/main-->
                <eo-wallet :touid="wallet.touid" :accounttype="wallet.accounttype" :num="wallet.num" :walletshow="walletshow" @update="gotonext()"></eo-wallet>

            </el-main>
        </el-container>

    </div>

</template>



<script>
import axios from "axios";

export default {
  data() {
    return {
      user:{},
      contract: {
        owner_account: "Author",
        ip_name: "The Last Empire",
        ip_url: "http://MM/author/thelastempire",
        stoke_token_name: "Moshibee",
        stoke_token_symbol: "MSP",
        total_supply: "1000000",
        crowdsale_amount: "300000",
        remain_amount: "1",
        price: "1"
      },
      active: 0,
      assets: [
        "Right of Adaptation - Video",
        "Right of Adaptation - Game",
        "Right of paper book publishment"
      ],
      wallet: {
        touid: 0,
        accounttype: 0,
        num: 0
      },
      walletshow: 0
    };
  },
  created() {
    let user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user);
    this.user = user;
  },
  methods: {
    onSubmit() {
      this.wallet.num = this.contract.total_supply;
      this.wallet.touid = this.user.uid;
      this.wallet.accounttype = 2;
      this.walletshow++;
      return;
      //get data
      var paras = Object.assign({}, this.contract);
      console.log(paras);
      var that = this;
      //post remote
      axios.post("/ipcontract/create", paras).then(function(res) {
        console.log(res.data);
        if (res.data.status == true) {
          //
          //that.$router.push({ path: "/contractdetail" });
          //this.
          this.walletshow++;
        }
      });
    },
    gotonext:function(){
        this.$router.push({ path: "/contractdetail" });
    }
  }
};
</script>


<style>
h4 {
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

.el-steps {
  margin: 20px 100px;
}
.formbox {
  margin: 50px 100px;
  background: #ffffff;
  box-shadow: 0 0 14px 5px rgba(218, 218, 218, 0.5);
  padding: 20px 50px;
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
