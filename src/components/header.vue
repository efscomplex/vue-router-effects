<template>
  <header>
    <p style="color:red;">{{msg}}</p>
    <img src="https://images.pexels.com/photos/1168981/pexels-photo-1168981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
    <h1>El horizonte más allá de lo imaginable</h1>
    <h3> Las montañas de la lejanía en un infinito ecosistema</h3>
    <nav>
        <ul>
            <li v-for="item in getRoutes" :key="item.id">
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>
    </nav>
  </header>
</template>


<script>
    import { mapGetters } from 'vuex'
    import {routes} from '../router'  
    export default {
        props:['msg'],
        data(){
            return{
                //items:['hola'],
            }
        },
        computed: {
            getRoutes(){return routes}
        }
    };

</script>

<style lang="scss" scoped>
img {
  width: 200px;
}
</style>
