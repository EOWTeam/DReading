import Vue from 'vue'
import Router from 'vue-router'
import OtherWorksDetail from '@/views/OtherWorksDetail'
import WorksDetail from '@/views/WorksDetail'
import WorksDetail2 from '@/views/WorksDetail2'
import ContractAdd from '@/views/ContractAdd'
import ContractDetail from '@/views/ContractDetail'
import Login from '@/views/Login'
import Test from '@/views/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/contractadd',
      name: 'ContractAdd',
      component: ContractAdd
    },
    {
      path: '/contractdetail',
      name: 'ContractDetail',
      component: ContractDetail
    },
    {
      path: '/other',
      name: 'OtherWorksDetail',
      component: OtherWorksDetail
    },
    {
      path: '/worksdetail',
      name: 'WorksDetail',
      component: WorksDetail
    },
    {
      path: '/worksdetail2',
      name: 'WorksDetail2',
      component: WorksDetail2
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
  ]
})
