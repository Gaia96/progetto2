import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home";
import CurrentTrendingMusic from "../pages/CurrentTrendingMusic";
import Top10MostLovedAlbumsAlltime from "../pages/Top10MostLovedAlbumsAlltime";
import Top50MostLovedTracksAlltime from "../pages/Top50MostLovedTracksAlltime";
import Login from "../pages/Login";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      name: "Home",
      path: "/home",
      component: Home
    },
    {
      name: "default",
      path: "/",
      redirect: "/home"
    },
    {
      name: "CurrentTrendingMusic",
      path: "/CurrentTrendingMusic",
      component: CurrentTrendingMusic
    },
    {
      name: "Top10MostLovedAlbumsAlltime",
      path: "/Top10MostLovedAlbumsAlltime",
      component: Top10MostLovedAlbumsAlltime
    },{
      name: "Top50MostLovedTracksAlltime",
      path: "/Top50MostLovedTracksAlltime",
      component: Top50MostLovedTracksAlltime
    },
    {
      name: "Login",
      path: "/login",
      component: Login
    }
  ]
});
