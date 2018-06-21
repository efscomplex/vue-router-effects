import Router from 'vue-router'
import Vue from 'vue'
import home from './components/home'
import contact from './components/contact'
import empresa from './components/empresa'

Vue.use(Router);
export const routes = [
    { path: '/home', name: 'Inici',component: home },
    { path: '/contact', name:'Contacte',component: contact },
    { path: '/empresa', name:'Empresa', component: empresa }
]
export default new Router({
    routes,
})