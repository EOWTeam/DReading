import Mock from 'mockjs';//es6语法引入mock模块
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export default {
    start() {
        let mock = new MockAdapter(axios);


        //合约创建
        mock.onPost('/ipcontract/create').reply(200, {
            msg: "ok",
            status: true
        }
        )

        //合约详细
        mock.onGet('/ipcontract/get').reply(200, {
            msg: "ok",
            status: true,
            contract: {
                owner_account: "王大毛",
                ip_name: "末世帝国",
                ip_url: "https://moshidguo.nov",
                stoke_token_name: "末世币",
                stoke_token_symbol: "MSP",
                total_supply: "1000000",
                crowdsale_amount: "300000",
                remain_amount: "3000",  //剩余
                price: "1 EOW/MSP",
                video_adaptation_right: "yes",
                game_adaptation_right: "yes",
                paper_book_publishment_right: "yes"
            }
        })

        //合约详细
        mock.onGet('/ipcontract/get').reply(200, {
            msg: "ok",
            status: true,
            contract: {
                owner_account: "王大毛",
                ip_name: "末世帝国",
                ip_url: "https://moshidguo.nov",
                stoke_token_name: "末世币",
                stoke_token_symbol: "MSP",
                total_supply: "1000000",
                crowdsale_amount: "300000",
                remain_amount: "3000",  //剩余
                price: "1 EOW/MSP",
                video_adaptation_right: "yes",
                game_adaptation_right: "yes",
                paper_book_publishment_right: "yes"
            }
        })

        //份额余额 //stake_token_get_balance
        mock.onGet('/ipcontract/stake_token_get_balance').reply(200, {
            msg: "ok",
            status: true,
            balance:233
        })

        //stack.buy
        mock.onPost('/ipcontract/stake_token_buy').reply(200, {
            msg: "ok",
            status: true
        })

        //assets.buy
        mock.onPost('/ipcontract/assets_token_buy').reply(200, {
            msg: "ok",
            status: true
        })

    }

}
