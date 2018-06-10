

<template>
    <div>
        <div><img src="./../assets/wenxue1/top.png" /></div>
        <div class="mainbox">
            <el-row>
                <el-col :span="8">
                    <div class="works-detail">
                        <img src="./../assets/wenxue1/pic.png" />
                    </div>

                </el-col>
                <el-col :span="16">

                    <h4>Kamila Shamsie Wins the 2018 Women’s Prize for Fiction</h4>
                    <div class="info">Editor June 6, 2018 | 1 book mentioned</div>
                    <eo-siteplugin plugtype="1"></eo-siteplugin>

                    <div class="detail">
                        Kamila Shamsie‘s Home Fire has won the 2018 Women’s Prize for Fiction! Along with the award, Shamsie takes home a £30,000 prize and the ‘Bessie’, a limited edition bronze figurine. During the ceremony in central London, 2018 Chair of Judges Sarah Sands said “in the end we chose the book which we felt spoke for our times. Home Fire is about identity, conflicting loyalties, love and politics. And it sustains mastery of its themes and its form. It is a remarkable book which we passionately recommend.” Formerly the Orange Prize and Baileys Prize, the Women’s Prize for Fiction recognizes the best English-language novel by a woman published in the U.K. in the previous year. The award celebrates “excellence, originality and accessibility in women’s writing from throughout the world.” Bonus links: Our quick guide to the 2018 Women’s Prize shortlist (it’s never too late to read the other nominees!). The Millions' future depends on your support. Become a member today. EDITOR This is the byline used for site announcements and for articles by more than one Millions contributor.

                    </div>
                </el-col>
            </el-row>

        </div>

    </div>
</template>


<script>
import axios from "axios";
export default {};
</script>



<style>
.mainbox {
  width: 1000px;
  margin: 0 auto;
}

h4 {
  font-family: BanglaMN-Bold;
  font-size: 26px;
  color: #444344;
  text-align: left;
}

.info {
  font-family: LucidaGrande;
  font-size: 20px;
  color: #aaaaac;
  text-align: left;
}
.detail {
  font-family: ArialMT;
  font-size: 20px;
  color: #4b4a4d;
  line-height: 30px;
  text-align: left;
}
</style>

