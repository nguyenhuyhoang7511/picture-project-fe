import { Login } from "components/form/login";
import { Register } from "components/form/register";
import { Home } from "pages/Home";
import { RouteConfig } from "./types";

export const ROUTES = {
    Home: '/',
    Orders: '/orders',
    Schedules: '/schedules',
    Albums: '/albums',
    AlbumDetails: '/albums/:id',
    Login: {
       index: '/login',
       admin: '/login/admin',
       user: '/login/user',
       callback: 'google/callback'
    },
    register :'/register'
 };

export const routes : RouteConfig[] = [
    {
        path : ROUTES.Home ,
        component : (
            <Home />
        )
    },
    {
        path : ROUTES.Login.index ,
        component : (
            <Login />
        )
    },
    {
        path : ROUTES.register ,
        component : (
            <Register />
        )
    },
]