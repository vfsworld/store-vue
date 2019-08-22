<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <!-- new Pizza -->
            <new-pizza></new-pizza>
        </div>
        <div class="col-sm-12 col-md-4">
            <!-- 品种展示 -->
            <h3 class="text-muted my-5">菜单</h3>
            <table class="table">
                <thead class="table table-default">
                    <tr>
                        <th>品种</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody v-for="(item,index) in getMenuItems" :key="index">
                    <tr>
                        <td>{{item.name}}</td>
                        <td>
                            <button @click="deleteMenuItem(item)" class="btn btn-outline-danger btn-sm">&times;</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import NewPizza from './NewPizza'
    export default {
        data(){
            return {
                // getMenuItem:[]
            }
        },
        components:{
            'new-pizza': NewPizza
        },
        created(){
            //获取菜单品种
            this.fetchData()
        },
        computed:{
            getMenuItems(){
                //在Vuex state中获取数据
                //return this.$store.state.menuItems
                //在Vuex state中获取数据
                return this.$store.getters.getMenuItems
            }
        },
        methods:{
            deleteMenuItem(item){
                //console.log(item.id)
                //删除品种
                // //fetch
                // fetch("https://wd2723187178hbfrpk.wilddogio.com/menu/"+item.id+"/.json",{
                //     method: 'DELETE',
                //     headers: {'Content-type':'application/json'}
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         alert('删除成功!');
                //         this.$router.push({name: 'menuLink'})
                //     })
                //     .catch(err => console.log(err))
                //axios
                this.$axios.delete("/menu/"+item.id+"/.json")
                    .then(res => {
                        return res.data
                        //alert('删除成功!');
                        //this.$router.push({name: 'menuLink'})
                    })
                    .then(data => {
                        this.$store.commit('removeMenuItems',item)
                    })
                    .catch(err => console.log(err))
                    
            },
            //获取菜单品种
            fetchData(){
                // fetch('https://wd2723187178hbfrpk.wilddogio.com/menu.json')
                this.$axios("/menu.json")
                    .then(res => res.data)
                    .then(data => {
                        //console.log(data)
                        let menuArray = [];
                        for(let key in data){
                            //console.log(key)
                            //console.log(data[key])
                            data[key].id = key;
                            menuArray.push(data[key]);
                        }
                        //console.log(menuArray)
                        // this.getMenuItem = menuArray
                        this.$store.commit('setMenuItems',menuArray)
                    })
            }
        }

        // data(){
        //     return {
        //         name:'vF'
        //     }
        // },
        // // beforeRouteEnter: (to,from,next) => {
        // //     //alert('hello ' + this.name);
        // //     next (vm => {
        // //         alert('hello ' + vm.name)
        // //     })
        // // }
        // beforeRouteLeave: (to,from,next) => {
        //     if(confirm('确认离开吗') == true){
        //         next();
        //     }else{
        //         next(false);
        //     }
        // }
    }
</script>
