<template>
	<div>
		<h4>&nbsp; &nbsp;HOME > LOGIN</h4>
           <div class="container login-container">
                <div class="row">
                    <div class="col-md-6 login-form-1 pt-5 pb-3 m-hide">
                       <div class="row">
                           <div class="col-md-12">
                               <h5 class="text-center pb-2"><b>Why We're Better?</b></h5>
                           </div>
                       </div>

                       <div class="row mt-3">
                           <div class="col-md-2">
                               <div class="icon text-center">
                                   <i class="fas fa-cog"></i>
                               </div>
                           </div>
                           <div class="col-md-10">

                               <div class="text">
                                   <p><strong>Smart Guidance</strong></p>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt porro rerum esse na.Deserunt porro rerum esse na</p>
                                   <a href="#">Learn More</a>
                               </div>
                           </div>
                       </div>

                       <div class="row mt-3">
                           <div class="col-md-2">
                               <div class="icon text-center">
                                   <i class="fab fa-staylinked"></i>
                               </div>
                           </div>
                           <div class="col-md-10">

                               <div class="text">
                                   <p><strong>Learning Platform</strong></p>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt porro rerum esse na. Deserunt porro rerum esse na</p>
                                   <a href="#">Learn More</a>
                               </div>
                           </div>
                       </div>

                       <div class="row mt-3">
                           <div class="col-md-2">
                               <div class="icon text-center">
                                   <i class="fas fa-users"></i>
                               </div>
                           </div>
                           <div class="col-md-10">

                               <div class="text">
                                   <p><strong>Biggest Community</strong></p>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt porro rerum esse na. Deserunt porro rerum esse na</p>
                                   <a href="#">Learn More</a>
                               </div>
                           </div>
                       </div>

                       <div class="row mt-5 mb-5">
                           <div class="col-md-12">
                              <div class="link_account text-center">
                                  <h4 class=""><a href="#">Don't have account?</a></h4>
                                  <nuxt-link to="/account/register" class="text_color"><b><u>Register Now?</u></b></nuxt-link>
                              </div>

                           </div>
                       </div>


                    </div>


                    <div class="col-md-6 login-form-2 pt-5 pb-3">
                        <h5 class="text-center"><strong>Welcome back!</strong></h5>
                        <div class="hr text-center m-auto">
                            <hr>
                        </div>

                        <form @submit.prevent="loginSubmit">

                           <div class="row mt-5">
                               <div class="col-sm-12 col-md-12 col-lg-12">
                                   <div class="form-group">
                                        <input v-model="form.login" type="text" class="form-control" placeholder="Email or Phone Number" autofocus required />
                                    </div>
                               </div>
                               <div class="col-sm-12 col-md-12 col-lg-12">
                                   <div class="form-group">
                                        <input v-model="form.password" type="password" class="form-control" placeholder=" Enter Password" required />
                                    </div>
                               </div>
                           </div>

                           <div class="row ">
                               <div class="col-sm-12 col-md-6 col-lg-6">
                                   <div class="form-group">
                                        <input type="submit" class="btnSubmit text-white  pt-2 pb-2" value="Log In" />
                                    </div>
                               </div>
                               <div class="col-sm-12 col-md-6 col-lg-6">
                                   <div class="form-group mt-2 text-center">
                                   <nuxt-link to="/account/forget-password" class="ForgetPwd " value="Login">Forget Password?</nuxt-link>
                                    </div>
                               </div>
                           </div>



                            <div class="col-md-12 mt-4 mb-1">
                              <div class="login-or">
                                 <hr class="hr-or">
                                 <span class="span-or">or</span>
                              </div>
                           </div>


                           <div class="row">
                               <div class="col-sm-12 col-md-6 col-lg-6">
                                   <div class="form-group">
                                        <input type="submit" class="btnGoogle text-white  pt-2 pb-2" value="Log In with Google" />
                                    </div>
                               </div>
                               <div class="col-sm-12 col-md-6 col-lg-6">
                                   <div class="form-group">
                                        <input type="submit" class="btnFacebook text-white  pt-2 pb-2" value="Log In with Facebook" />
                                    </div>
                               </div>
                           </div>


                        </form>
                    </div>
                </div>
            </div>
	</div>
</template>

<script>
    export default{
        data(){
         return{
            form:{
                login:'',
                password:''
            }
         }
        },

        methods:{
              async loginSubmit() {
                  try {
                    let response = await this.$auth.loginWith('local', { data: this.form })
                    console.log(response)
                  } catch (err) {
                    console.log(err)
                  }

                   this.$router.push('/account');
                }

        }
    }
</script>