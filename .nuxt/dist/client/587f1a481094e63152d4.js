(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{245:function(t,e,r){"use strict";r.r(e);r(44);var o=r(13),c={middleware:["guest"],data:function(){return{form:{login:"",password:""}}},methods:{loginSubmit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.$toast.show("Logging in..."),e.next=4,t.$auth.loginWith("local",{data:t.form}).catch((function(e){console.log(e),t.$toast.error("Failed Logging In")}));case 4:t.$auth.loggedIn&&(t.$toast.success("Successfully Logged In"),t.$router.push("/account")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.$toast.error("Username or Password wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},n=r(28),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h4",[t._v("   HOME > LOGIN")]),t._v(" "),r("div",{staticClass:"container login-container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 login-form-1 pt-5 pb-3 m-hide"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("div",{staticClass:"row mt-5 mb-5"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"link_account text-center"},[t._m(4),t._v(" "),r("nuxt-link",{staticClass:"text_color",attrs:{to:"/account/register"}},[r("b",[r("u",[t._v("Register Now?")])])])],1)])])]),t._v(" "),r("div",{staticClass:"col-md-6 login-form-2 pt-5 pb-3"},[t._m(5),t._v(" "),t._m(6),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.loginSubmit(e)}}},[t.errors.message?[r("div",{staticClass:"alert alert-danger alert-dismissible text-left",staticStyle:{"margin-top":"10px"}},[r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert"}},[t._v("×")]),t._v(" "),r("strong",[t._v("Login Failed!")]),t._v(" "),r("br"),t._v(" \n                                "+t._s(t.errors.message)+".\n                              ")])]:t._e(),t._v(" "),r("div",{staticClass:"row mt-5"},[r("div",{staticClass:"col-sm-12 col-md-12 col-lg-12"},[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.login,expression:"form.login"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email or Phone Number",required:""},domProps:{value:t.form.login},on:{input:function(e){e.target.composing||t.$set(t.form,"login",e.target.value)}}}),t._v(" "),t.errors.login?r("small",{staticClass:"error-text"},[t._v(t._s(t.errors.login[0]))]):t._e()])]),t._v(" "),r("div",{staticClass:"col-sm-12 col-md-12 col-lg-12"},[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:" Enter Password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),t.errors.password?r("small",{staticClass:"error-text"},[t._v(t._s(t.errors.password[0]))]):t._e()])])]),t._v(" "),r("div",{staticClass:"row "},[t._m(7),t._v(" "),r("div",{staticClass:"col-sm-12 col-md-6 col-lg-6"},[r("div",{staticClass:"form-group mt-2 text-center"},[r("nuxt-link",{staticClass:"ForgetPwd ",attrs:{to:"/account/forget-password",value:"Login"}},[t._v("Forget Password?")])],1)])]),t._v(" "),t._m(8),t._v(" "),t._m(9)],2)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("h5",{staticClass:"text-center pb-2"},[e("b",[this._v("Why We're Better?")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"icon text-center"},[e("i",{staticClass:"fas fa-cog"})])]),this._v(" "),e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"text"},[e("p",[e("strong",[this._v("Smart Guidance")])]),this._v(" "),e("p",[this._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt porro rerum esse na.Deserunt porro rerum esse na")]),this._v(" "),e("a",{attrs:{href:"#"}},[this._v("Learn More")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"icon text-center"},[e("i",{staticClass:"fab fa-staylinked"})])]),this._v(" "),e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"text"},[e("p",[e("strong",[this._v("Learning Platform")])]),this._v(" "),e("p",[this._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt porro rerum esse na. Deserunt porro rerum esse na")]),this._v(" "),e("a",{attrs:{href:"#"}},[this._v("Learn More")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"icon text-center"},[e("i",{staticClass:"fas fa-users"})])]),this._v(" "),e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"text"},[e("p",[e("strong",[this._v("Biggest Community")])]),this._v(" "),e("p",[this._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt porro rerum esse na. Deserunt porro rerum esse na")]),this._v(" "),e("a",{attrs:{href:"#"}},[this._v("Learn More")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{},[e("a",{attrs:{href:"#"}},[this._v("Don't have account?")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"text-center"},[e("strong",[this._v("Welcome back!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hr text-center m-auto"},[e("hr")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-12 col-md-6 col-lg-6"},[e("div",{staticClass:"form-group"},[e("input",{staticClass:"btnSubmit text-white  pt-2 pb-2",attrs:{type:"submit",value:"Log In"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-12 mt-4 mb-1"},[e("div",{staticClass:"login-or"},[e("hr",{staticClass:"hr-or"}),this._v(" "),e("span",{staticClass:"span-or"},[this._v("or")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-6 col-lg-6"},[e("div",{staticClass:"form-group"},[e("input",{staticClass:"btnGoogle text-white  pt-2 pb-2",attrs:{type:"submit",value:"Log In with Google"}})])]),this._v(" "),e("div",{staticClass:"col-sm-12 col-md-6 col-lg-6"},[e("div",{staticClass:"form-group"},[e("input",{staticClass:"btnFacebook text-white  pt-2 pb-2",attrs:{type:"submit",value:"Log In with Facebook"}})])])])}],!1,null,null,null);e.default=component.exports}}]);