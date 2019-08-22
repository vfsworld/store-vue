<template>
    <div class="row">
        <!-- 菜单 -->
        <div class="col-sm-12 col-md-8">
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th>尺寸</th>
                        <th>价格</th>
                        <th>加入</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.name">
                    <tr>
                        <td><strong>{{item.name}}</strong></td>
                    </tr>
                    <tr v-for="option in item.options" :key="option.size">
                        <td>{{option.size}}</td>
                        <td>{{option.price}}</td>
                        <td>
                            <button 
                                @click="addToBasket(item,option)"
                                class="btn btn-sm btn-outline-success">+</button>
                        </td>
                    </tr>
                </tbody>
            </table>
    
        </div>

        <!-- 购物车 -->
        <div class="col-sm-12 col-md-4">
            <div v-if="baskets.length > 0">
                 <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>数量</th>
                            <th>品种</th>
                            <th>价格</th>
                        </tr>
                    </thead>
                    <tbody v-for="(item,index) in baskets" :key="index">
                        <tr>
                            <td>
                                <button @click="decreaseQuantity(item)" class="btn btn-sm">-</button>
                                <span>{{item.quantity}}</span>
                                <button @click="increaseQuantity(item)" class="btn btn-sm">+</button>
                            </td>
                            <td>{{item.name}}-{{item.size}}</td>
                            <td>{{item.price * item.quantity}}¥</td>
                        </tr>
                    </tbody>
                    <p>总价:{{total + "RMB"}}</p>
                    <button class="btn btn-success btn-block">提交</button> 
                </table>
            </div>
            <div v-else="this.basketText">{{this.basketText}}</div>
           
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            basketText:"购物车内还没有商品",
            baskets:[],
            // getMenuItems:{
            //     // "1" : {
            //     //     "name": "榴莲Pizza",
            //     //     "description": "这是喜欢吃榴莲朋友的最佳选择",
            //     //     "options": [{
            //     //         "size": 9,
            //     //         "price": 38
            //     //     },
            //     //     {
            //     //         "size": 12,
            //     //         "price": 48
            //     //     }]
            //     // },
            //     // "2" : {
            //     //     "name": "芝士Pizza",
            //     //     "description": "这是喜欢吃芝士Pizza",
            //     //     "options": [{
            //     //         "size": 9,
            //     //         "price": 33
            //     //     },
            //     //     {
            //     //         "size": 12,
            //     //         "price": 44
            //     //     }]
            //     // },
            //     // "3" : {
            //     //     "name": "夏威夷Pizza",
            //     //     "description": "这是夏威夷Pizza",
            //     //     "options": [{
            //     //         "size": 9,
            //     //         "price": 36
            //     //     },
            //     //     {
            //     //         "size": 12,
            //     //         "price": 46
            //     //     }]
            //     // }
            // }
        }
    },
    created(){
        //获取菜单栏数据
        this.fetchData();
    },
    computed:{
        getMenuItems(){
            //通过Vuex state获取和数据
            //return this.$store.state.menuItems
            //通过Vuex getters获取和数据
            return this.$store.getters.getMenuItems
        },
        total(){
            let totalCost = 0;
            for(let index in this.baskets){
                let individualItem = this.baskets[index];
                totalCost += individualItem.quantity * individualItem.price;
            }
            return totalCost;
        }
    },
    methods:{
        //获取菜单栏数据
        fetchData(){
            // //fetch方法
            // fetch("https://wd2723187178hbfrpk.wilddogio.com/menu.json")
            //     .then(res => res.json())
            //     .then(data => {
            //         console.log(data)
            //         this.getMenuItems = data
            //     })
            //axios方法
            // this.$axios.get("/menu.json")
            //     .then(res => this.getMenuItems = res.data)
            //     .catch(err => console.log(err))
            this.$axios.get("/menu.json")
                .then(res => this.$store.commit('setMenuItems',res.data))
                .catch(err => console.log(err))
        },
        //添加购物车事件
        addToBasket(item,option){
            //console.log(item.name,option.size,option.price)
            let basket = {
                name: item.name,
                size: option.size,
                price: option.price,
                quantity:1
            }

            if(this.baskets.length > 0){
                //过滤
                let result = this.baskets.filter((basket) => {
                    return (basket.name === item.name && basket.price === option.price)
                })
                //console.log(result)
                if(result != null && result.length > 0){
                    result[0].quantity++
                }else{
                    this.baskets.push(basket);
                }
            }else{
                this.baskets.push(basket);
            }
            //console.log(this.baskets)
        },
        //购物车累加事件
        decreaseQuantity(item){
             item.quantity--;

             if(item.quantity <= 0){
                 this.removeFromBasket(item)
             }
        },
        //购物车累减事件
        increaseQuantity(item){
            item.quantity++;
        },
        //当商品个数小于0
        removeFromBasket(item){
            this.baskets.splice(this.baskets.indexOf(item),1);
        }
    }
}
</script>
