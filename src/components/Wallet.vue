<template>
    <div>

        <!--wallet-->

        <div title="Wallet" v-show="walletVisible" class="wallet-box">
            <div class="box">
                <span class="close" @click="walletVisible=false">
                    <i class="el-icon-close" />
                </span>
                <div class="title">EOW Wallet</div>

                <div class="">
                    <el-tabs v-model="activeName" @tab-click="handleClick" class="selectit">
                        <el-tab-pane label="         " name="a"></el-tab-pane>
                        <el-tab-pane label="Account" name="account" style="margin-left:100px"></el-tab-pane>
                        <el-tab-pane label="Transfer" name="transfer"></el-tab-pane>
                    </el-tabs>

                </div>

                <div class="containerbox">
                    <!--box-->
                    <div class="total-box" v-show="showTotal">
                        <el-form class="tttttt">
                            <el-form-item label="EOW:">
                                {{account.account1}}
                            </el-form-item>

                            <el-form-item label="MSP:">
                                {{account.account2}} </el-form-item>

                                <el-form-item label="MSP-G:">
                                {{account.account3}} </el-form-item>
                        </el-form>

                    </div>

                    <!--box-->
                    <div class="send-box" v-show="showSend">
                        <el-form :model="walletForm" class="">
                            

                            <el-form-item label="To Account">
                                {{touid}}
                              
                            </el-form-item>

                            <el-form-item label="AccountType">
                                {{accounttype==1?"EOW":"MSP"}}
                            </el-form-item>

                            <el-form-item label="Num">
                                <el-input type="hidde" v-model="num" auto-complete="off" placeholder="Num"></el-input>
                            </el-form-item>

                        </el-form>

                        <div slot="footer" class="wallet-footer text-center">
                            <el-button @click="walletVisible = false">Cancel</el-button>
                            <el-button type="primary" @click="sendSubmit()">Transfer</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--/wallet-->
    </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {},
      activeName: "account",

      //
      walletVisible: false,
      walletForm: {},

      showSend: false,
      showTotal: true,
      account: {
        account1: 0,
        accouunt2: 0,
        accouunt3: 0
      }
    };
  },
  props: ["touid", "accounttype", "num", "walletshow"],
  watch: {
    uid: function(ne, ol) {
      console.log(ne + "|" + ol);
    },
    walletshow: function(ne, ol) {
      console.log( this.num+"|"+this.accounttype+"|"+this.touid+"|");
      this.walletVisible = true;
    }
  },
  created() {
    let user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user);
    this.user = user;
    this.getAccount();
    //

    this.walletForm.fromuid = this.user.uid;
    this.walletForm.touid = this.fromuid;
    this.walletForm.accounttype = this.accounttype;
    this.walletForm.num = this.num;

    //
    var that = this;
    //setInterval(function() {
    // that.getAccount();
    //}, 10000);
  },
  methods: {
    getAccount: function() {
      var that = this;
      //post remote
      var url = "http://localhost/api/eowaccount/get?uid=" + this.user.uid;
      console.log(url);
      axios.post(url, {}).then(function(res) {
        console.log(res.data);
        that.account = res.data.eowaccount;
      });
    },
    sendSubmit: function() {
      var that = this;
      var paras = Object.assign({}, this.walletForm);
      var url =
        "http://localhost/api/eowaccount/transfer?fromuid=" +
        this.user.uid +
        "&touid=" +
        this.touid +
        "&accounttype=" +
        this.accounttype +
        "&num=" +
        this.num;
      console.log(url);

      axios.get(url, paras).then(function(res) {
        if (res.data.type != "success") {
          alert(res.data.message);
          return;
        }
        that.$emit("update");
        alert("transfer success!");
        that.getAccount();
        
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
      if (this.activeName == "account") {
        this.showTotal = true;
        this.showSend = false;
      } else {
        this.showTotal = false;
        this.showSend = true;
      }
    }
  }
};
</script>

<style>
.selectit {
  text-align: center;
}
.containerbox {
  padding: 10px;
}
.wallet-box .el-form-item {
  margin-bottom: 0px;
}

.tttttt{ width: 200px; margin: 0 auto;}
.wallet-box .close {
  display: block;
  width: 40px;
  text-align: center;
  height: 40px;
  right: 0px;
  top: 0px;
  position: absolute;
  cursor: pointer;
}

.wallet-box .box div.title {
  margin: 10px;
  font-size: 16px;
}

.wallet-box {
  border: 3px solid #dc8700;
  position: fixed;
  top: 0px;
  right: 0px;
  width: 300px;
  height: 450px;
  background: #ffffe4;
  box-shadow: 0 0 14px 5px rgb(8, 8, 8, 0.5);
}
.wallet-box .box {
  width: 300px;
  height: 430px;
  position: relative;
}
.wallet-box .wallet-footer {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
}
</style>

