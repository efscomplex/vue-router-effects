<template>
  <div id="app">
    <transition appear appear-active-class="bounce-enter-active">
        <myheader/>
    </transition>
    <section>   
        <transition name="bounce" mode="out-in"> 
            <router-view></router-view>
        </transition>
    </section> 
  </div>
</template>

<script>
import header from "./components/header";
import contact from "./components/contact";
import home from "./components/home";
import empresa from "./components/empresa";
export default {
  name: "App",
  components: {
    myheader: header,
    contact,
    home,
    empresa,
  }
};
</script>
<style lang="scss">
    @import './styles/effects.scss';
</style>

