import {createRouter,createWebHistory} from 'vue-router'
import NotFound from './pages/NotFound';
import CoachesList from './pages/coaches/CoachesList';
import CoachesDetail from './pages/coaches/CoachesDetail';
import ContactCoaches from './pages/requests/ContactCoaches';
import CoachesRegister from './pages/coaches/CoachesRegister';
import RequestsReceived from './pages/requests/RequestsReceived';

const router = createRouter({
  history:createWebHistory(),
  routes:[
    {path:'/',redirect:'/coaches'},
    {path:'/coaches',component:CoachesList},
    {path:'/coaches/:id',component:CoachesDetail,children:[
      {path:'contact',component:ContactCoaches}
      ],props:true},
    {path:'/register',component:CoachesRegister},
    {path:'/requests',component:RequestsReceived},
    {path:'/:notFound(.*)',component:NotFound}
  ],
});

export default router;