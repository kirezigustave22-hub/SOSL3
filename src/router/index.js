import{createRouter, createWebHistory} from "vue-router"
import home from "../views/home.vue";
import about from  "../views/about.vue";
import contact from "../views/contact.vue";
import service from "../views/service.vue";
import Kigali from   "../views/Kigali.vue"
import eastern from "../views/eastern.vue";
import southern from "../views/southern.vue";
import northern from "../views/northern.vue";
import western from "../views/western.vue";
import images from "../views/images.vue";
import login from "../views/login.vue";
import Dashboard from "../views/Dashboard.vue";     

const routes =[ 
    {
      path:"/",
     name:"home",
     component:home  
    },

    {
        path:"/about",
        name:"about",
        component:about
    },

    {
       path:"/contact",
     name:"contact",
     component:contact  
    },

    {
     path:"/service",
     name :"service",
     component:service  
    },

    {
        path:"/kigali",
        name:"Kigali",
        component:Kigali

    },

    {
     path:"/eastern",
        name:"eastern",
        component:eastern   

    },

    {
        path:"/southern",
        name:"southern",
        component:southern
    },
    {
      path:"/northern",
        name:"northern",
        component:northern   

    },

    {
         path:"/western",
        name:"western",
        component:western
    },

    {
        path:"/images",
        name:"images",
        component:images
    },

    {
        path:"/login",
        name:"login",
        component:login
    },

    {
        path:"/Dashboard",
        name:"Dashboard",
        component:Dashboard

    }
    
    

    



]

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
)

export default router;
