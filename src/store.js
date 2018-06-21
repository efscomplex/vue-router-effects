import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        hData:{
            title:'el nombre de la rosa',
            description:'un libro de intriga',
            author:'Umberto Eco'
        }
    },
    getters:{
        getBooks: (state) => state.hData,
    }
});