var vm = new Vue({
    el: '#app',
    data:{
       productList:[],
       totalMoney:0,
       productPrice:0
    },
    filters:{

    },
    mounted:function () {
        this.cartView()
    },
    methods:{
        cartView:function () {
            var _this = this;
            this.$http.get("data.json",{"id":123}).then(function (res) {
                _this.productList = res.body.result.list;
                _this.totalMoney = res.result.totalMoney;
            });
        }
    }

})