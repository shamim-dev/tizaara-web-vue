exports.ids=[4],exports.modules={62:function(r,e,o){"use strict";o.r(e);var t={middleware:["guest"],data:()=>({form:{login:"",password:""}}),methods:{async loginSubmit(){try{this.$toast.show("Logging in..."),await this.$auth.loginWith("local",{data:this.form}).catch(r=>{console.log(r),this.$toast.error("Failed Logging In")}),this.$auth.loggedIn&&(this.$toast.success("Successfully Logged In"),this.$router.push("/account"))}catch(r){this.$toast.error("Username or Password wrong")}}}},l=o(1),component=Object(l.a)(t,(function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("div",[r._ssrNode("<h4>   HOME &gt; LOGIN</h4> "),r._ssrNode('<div class="container login-container">',"</div>",[r._ssrNode('<div class="row">',"</div>",[r._ssrNode('<div class="col-md-6 login-form-1 pt-5 pb-3 m-hide">',"</div>",[r._ssrNode('<div class="row"><div class="col-md-12"><h5 class="text-center pb-2"><b>Why We\'re Better?</b></h5></div></div> <div class="row mt-3"><div class="col-md-2"><div class="icon text-center"><i class="fas fa-cog"></i></div></div> <div class="col-md-10"><div class="text"><p><strong>Smart Guidance</strong></p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt porro rerum esse na.Deserunt porro rerum esse na</p> <a href="#">Learn More</a></div></div></div> <div class="row mt-3"><div class="col-md-2"><div class="icon text-center"><i class="fab fa-staylinked"></i></div></div> <div class="col-md-10"><div class="text"><p><strong>Learning Platform</strong></p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt porro rerum esse na. Deserunt porro rerum esse na</p> <a href="#">Learn More</a></div></div></div> <div class="row mt-3"><div class="col-md-2"><div class="icon text-center"><i class="fas fa-users"></i></div></div> <div class="col-md-10"><div class="text"><p><strong>Biggest Community</strong></p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt porro rerum esse na. Deserunt porro rerum esse na</p> <a href="#">Learn More</a></div></div></div> '),r._ssrNode('<div class="row mt-5 mb-5">',"</div>",[r._ssrNode('<div class="col-md-12">',"</div>",[r._ssrNode('<div class="link_account text-center">',"</div>",[r._ssrNode('<h4><a href="#">Don\'t have account?</a></h4> '),o("nuxt-link",{staticClass:"text_color",attrs:{to:"/account/register"}},[o("b",[o("u",[r._v("Register Now?")])])])],2)])])],2),r._ssrNode(" "),r._ssrNode('<div class="col-md-6 login-form-2 pt-5 pb-3">',"</div>",[r._ssrNode('<h5 class="text-center"><strong>Welcome back!</strong></h5> <div class="hr text-center m-auto"><hr></div> '),r._ssrNode("<form>","</form>",[r._ssrNode((r.errors.message?'<div class="alert alert-danger alert-dismissible text-left" style="margin-top: 10px;"><button type="button" data-dismiss="alert" class="close">×</button> <strong>Login Failed!</strong> <br>'+r._ssrEscape(" \n                                "+r._s(r.errors.message)+".\n                              ")+"</div>":"\x3c!----\x3e")+' <div class="row mt-5"><div class="col-sm-12 col-md-12 col-lg-12"><div class="form-group"><input type="text" placeholder="Email or Phone Number" required="required"'+r._ssrAttr("value",r.form.login)+' class="form-control"> '+(r.errors.login?'<small class="error-text">'+r._ssrEscape(r._s(r.errors.login[0]))+"</small>":"\x3c!----\x3e")+'</div></div> <div class="col-sm-12 col-md-12 col-lg-12"><div class="form-group"><input type="password" placeholder=" Enter Password" required="required"'+r._ssrAttr("value",r.form.password)+' class="form-control"> '+(r.errors.password?'<small class="error-text">'+r._ssrEscape(r._s(r.errors.password[0]))+"</small>":"\x3c!----\x3e")+"</div></div></div> "),r._ssrNode('<div class="row ">',"</div>",[r._ssrNode('<div class="col-sm-12 col-md-6 col-lg-6"><div class="form-group"><input type="submit" value="Log In" class="btnSubmit text-white  pt-2 pb-2"></div></div> '),r._ssrNode('<div class="col-sm-12 col-md-6 col-lg-6">',"</div>",[r._ssrNode('<div class="form-group mt-2 text-center">',"</div>",[o("nuxt-link",{staticClass:"ForgetPwd ",attrs:{to:"/account/forget-password",value:"Login"}},[r._v("Forget Password?")])],1)])],2),r._ssrNode(' <div class="col-md-12 mt-4 mb-1"><div class="login-or"><hr class="hr-or"> <span class="span-or">or</span></div></div> <div class="row"><div class="col-sm-12 col-md-6 col-lg-6"><div class="form-group"><input type="submit" value="Log In with Google" class="btnGoogle text-white  pt-2 pb-2"></div></div> <div class="col-sm-12 col-md-6 col-lg-6"><div class="form-group"><input type="submit" value="Log In with Facebook" class="btnFacebook text-white  pt-2 pb-2"></div></div></div>')],2)],2)],2)])],2)}),[],!1,null,null,"4ebf2c06");e.default=component.exports}};