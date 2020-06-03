import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _33e5e8f2 = () => interopDefault(import('..\\pages\\account\\index.vue' /* webpackChunkName: "pages_account_index" */))
const _4d661c70 = () => interopDefault(import('..\\pages\\account\\forget-password.vue' /* webpackChunkName: "pages_account_forget-password" */))
const _6fb746b4 = () => interopDefault(import('..\\pages\\account\\forget-password-success.vue' /* webpackChunkName: "pages_account_forget-password-success" */))
const _a096a2c4 = () => interopDefault(import('..\\pages\\account\\login.vue' /* webpackChunkName: "pages_account_login" */))
const _5d050504 = () => interopDefault(import('..\\pages\\account\\register.vue' /* webpackChunkName: "pages_account_register" */))
const _55a4ddff = () => interopDefault(import('..\\pages\\account\\register-mm.vue' /* webpackChunkName: "pages_account_register-mm" */))
const _df83e218 = () => interopDefault(import('..\\pages\\account\\reset-password.vue' /* webpackChunkName: "pages_account_reset-password" */))
const _68338b2a = () => interopDefault(import('..\\pages\\account\\reset-password-success.vue' /* webpackChunkName: "pages_account_reset-password-success" */))
const _b0e1b138 = () => interopDefault(import('..\\pages\\account\\social-login.vue' /* webpackChunkName: "pages_account_social-login" */))
const _479c5640 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _33e5e8f2,
    name: "account"
  }, {
    path: "/account/forget-password",
    component: _4d661c70,
    name: "account-forget-password"
  }, {
    path: "/account/forget-password-success",
    component: _6fb746b4,
    name: "account-forget-password-success"
  }, {
    path: "/account/login",
    component: _a096a2c4,
    name: "account-login"
  }, {
    path: "/account/register",
    component: _5d050504,
    name: "account-register"
  }, {
    path: "/account/register-mm",
    component: _55a4ddff,
    name: "account-register-mm"
  }, {
    path: "/account/reset-password",
    component: _df83e218,
    name: "account-reset-password"
  }, {
    path: "/account/reset-password-success",
    component: _68338b2a,
    name: "account-reset-password-success"
  }, {
    path: "/account/social-login",
    component: _b0e1b138,
    name: "account-social-login"
  }, {
    path: "/",
    component: _479c5640,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
