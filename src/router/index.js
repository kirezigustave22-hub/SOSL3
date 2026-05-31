import{createRouter, createWebHistory} from "vue-router"
import home from "../view/home.vue";
import About from  "../view/about.vue";
import contact from "../view/contact.vue";
import service from "../view/service.vue";
import Kigali from   "../view/Kigali.vue"
import eastern from "../view/eastern.vue";
import southern from "../view/southern.vue";
import northern from "../view/northern.vue";
import western from "../view/western.vue";

const routes =[ 
    {
      path:"/",
     name:"home",
     component:home  
    },

    {
        path:"/about",
        name:"about",
        component:About
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
    }

    



]

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
)

export default router;
