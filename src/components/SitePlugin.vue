<template>

  <div>

    <div class="site-plugin" v-bind:class="{horizontal:isHorizontal}">

      <!--buybox-->
      <div class="buyboxbox">
        <div class="content">
          <h4>Tokenlize the Right to Earnings of IP</h4>
          <h3>
            {{stakeTokenGetBalance}}
            <span class="sign">MSP</span>
          </h3>

          <div class="text-right">
            <el-button type="primary" plain size="medium" @click="buyStock()">Buy</el-button>
          </div>
        </div>
      </div>
      <!--/buybox-->

      <!--buybox-->
      <div class="buyboxbox">
        <div class="content">
          <h4>Subject Matter</h4>
          <div class="mb10" style="font-family:ArialMT;
font-size:16px;
color:#b3b2b6;
text-align:left; margin-top:20px;width:250px;">
            <i class="el-icon-tickets" /> Right of Adaptation - Video/Game
            <el-button type="primary" plain size="mini" @click="buyAssets()">Buy</el-button>
          </div>

        </div>
      </div>
      <!--/buybox-->

      <div class="clear"></div>

    </div>
    <!--stock -->
    <el-dialog title="Tokenlize the Right to Earnings of IP" :visible.sync="buyStockBoxVisible">
      <el-form :model="stockForm">
        <el-form-item label="Amount" label-width="80">
          <el-input v-model="stockAmount" type="number" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Price" label-width="80">
          {{price}} EOW / MSP
        </el-form-item>
        <el-form-item label="Total" label-width="80">
          <h4 class="text-center">{{stockAmount*price}} EOW</h4>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer text-center">

        <el-button type="primary" @click="buyStockSubmit">Submit</el-button>
        <el-button @click="buyStockBoxVisible = false">Cancel</el-button>
      </div>
    </el-dialog>
    <!--/stock -->

    <!--stock -->
    <el-dialog title="Subject Matter" :visible.sync="buyAssetsBoxVisible">
      <el-form :model="assetsForm" class="">
        <div>

          <div class="el-form-item" label="影视改编权" border>
            <i class="el-icon-check" /> Right of Adaptation - Video</div>
          <div class=" el-form-item" label="游戏改编权" border>
            <i class="el-icon-check" /> Right of Adaptation - Game</div>
          <div class=" el-form-item" label="纸质书出版权" border>
            <i class="el-icon-check" /> Right of paper book publishment</div>

        </div>
        <h3 label="Price" class="amount text-center">
          Total: {{price}} EOW
        </h3>
      </el-form>

      <div slot="footer" class="dialog-footer text-center">
        <el-button @click="buyAssetsBoxVisible = false">Cancel</el-button>
        <el-button type="primary" @click="buyAssetsSubmit">Submit</el-button>
      </div>
    </el-dialog>
    <!--/stock -->

    <eo-wallet uid="1" ></eo-wallet>
   
  
  </div>

</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      buyAssetsBoxVisible: false,
      buyStockBoxVisible: false,
      stakeTokenGetBalance: 0,
      contract: {},
      isHorizontal: true,
      stockForm:{},

      stockAmount: '0',
      assetsForm: {},

      price: 13,
      sum_amount: 0,
      user: {},
      isHorizontal: 1,

      
    };
  },
  watch:{
    stockAmount:function(ne,io){
          console.log(ne+"|"+io);
          this.sum_amount=this.stockAmount*this.price;
    }
  },
  props: ["plugtype"],
  created() {
    let user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user);
    this.user = user;
    //
    this.getRemote();
    this.isHorizontal = this.plugtype == 0 ? false : true;
  },
  watch: {
    stockForm_amount(a, d) {}
  },
  methods: {
    //
    getRemote() {
      var that = this;
      //post remote
      axios.get("http://localhost/api/ipcontract/get", {}).then(function(res) {
        console.log(res.data);
        that.contract = res.data.contract;
      });

      //post remote
      axios.get("http://localhost/api/ipcontract/stake_token_get_balance", {}).then(function(res) {
        console.log(res.data);
        that.stakeTokenGetBalance = res.data.balance;
      });
    },
    //stock deal
    buyStock: function() {
      this.buyStockBoxVisible = true;
    },
    buyStockSubmit: function() {
      var that = this;
      var paras = {};
      //ipcontract/stake_token_buy
      //post remote
      axios.post("ipcontract/stake_token_buy", paras).then(function(res) {
        console.log(res.data);
        if (res.data.status == true) {
          that.buyStockBoxVisible = false;
          that.walletVisible=true;
        }
      });
    },
    //assets deal
    buyAssets: function() {
      this.buyAssetsBoxVisible = true;
    },
    buyAssetsSubmit: function() {
      //ipcontract/stake_token_buy
      var that = this;
      //post remote
      var paras = {};
      axios.post("ipcontract/assets_token_buy", paras).then(function(res) {
        console.log(res.data);
        if (res.data.status == true) {
          that.buyAssetsBoxVisible = false;
          that.walletVisible=true;
        }
      });
    }
  }
};
</script>



<style>


.amount {
  text-align: center;
}
.el-dialog {
  border: 5px solid #dc8700;
  background: #ffffe4;
}

.clear {
  clear: both;
}
.content h4 {
  font-family: Arial-BoldMT;
  font-size: 16px;
  color: #888889;
  text-align: left;
  margin: 5px 0px !important;
}

.content .sign {
  font-family: ArialMT;
  font-size: 19px;
  color: #b3b2b6;
  text-align: left;
}
.content h3 {
  font-family: ArialMT;
  font-size: 30px;
  color: #888889;
  text-align: left;
  margin: 15px 0px !important;
}

.site-plugin {
  background: #ffffe4;
  border: 5px solid #dc8700;
  box-shadow: 0 0 9px 2px rgba(183, 169, 169, 0.5);
  width: 100%;
  margin: 20px 0px;
}

.buyboxbox {
  display: block;
  float: left;
  width: 50%;
  min-width: 330px;
  height: 100px;
}
.buyboxbox .content {
  margin: 20px;
  position: relative;
}
.buyboxbox .content .el-button {
  position: absolute;
  top: 30px;
  right: 10px;
}
.horizontal .buyboxbox {
}
</style>

