<template>
	<div >
<h4>&nbsp; &nbsp; {{heading}}</h4>

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
                            <h4 class=""><a href="#">Already have an account?</a></h4>
                            <a href="#" class="text_color"><b><u>Login Now</u></b></a>
                        </div>

                    </div>
                </div>


            </div>


            <div class="col-md-6 login-form-2 pt-5 pb-3">
                <fieldset id="first"  v-if="firstStep">
                    <h5 class="text-center"><strong>Create Account</strong></h5>
                    <div class="hr text-center m-auto">
                        <hr>
                    </div>
                    <div class="active-status text-center">
                        <div class="col-sm-12">
                            <div class="status-1">
                                <span></span>
                            </div>
                            <div class="status-2"></div>
                        </div>
                    </div>
                    <form method="" action="">
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <div class="form-group">
                                    <input type="text"  v-model="user.firstName" class="form-control" placeholder="First Name" value="" />
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <div class="form-group">
                                    <input type="text"  v-model="user.lastName" class="form-control" placeholder="Last Name" value="" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-12">
                                <div class="form-group">
                                    <input type="text"  v-model="user.email" class="form-control" placeholder="Email or Phone Number" value="" />
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-12">
                                <div class="form-group">
                                    <input type="password" v-model="user.password" class="form-control" placeholder=" Password" value="" />
                                </div>
                            </div>

                            <div class="col-sm-12 col-md-12 col-lg-12">
                                <div class="form-group">
                                    <input type="password" v-model="user.password_confirmation" class="form-control" placeholder="Confirm Password" value="" />
                                </div>
                            </div>
                        </div>

                        <div class="row ">

                            <div class="col-sm-12 col-md-6 col-lg-6">

                                <!-- <div class="custom-control custom-checkbox mt-2">
                              <input type="checkbox" class="custom-control-input" id="customCheck" name="example1">
                              <label class="custom-control-label" for="customCheck">
                                <p class="d-inline agree_text">Agree our<a href="#" class="ForgetPwd " value="Login"><b class="text_color">&nbsp;Terms & Condition.</b></a></p>

                               </label>
                            </div>
                          -->
                            </div>

                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <div class="form-group">
                                    <button  id="next_btn1" class="btnSubmit text-white  pt-2 pb-2" @click="next_step()" type="button" value="Next">Next</button>

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
                                    <input type="submit" class="btnGoogle text-white  pt-2 pb-2" value="Sign Up with Google" />
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <div class="form-group">
                                    <input type="submit" class="btnFacebook text-white  pt-2 pb-2" value="Sign Up with Facebook" />
                                </div>
                            </div>
                        </div>
                    </form>
                </fieldset>
                <fieldset v-bind:style="secondTabStyleObject" class="nopading" style="padding: 0px 30px 0px 30px;" v-if="secondStep" id="second">
                    <div class="row ">
                        <div class="col-sm-12">
                            <h5 class="text-center"><strong>Create Account</strong></h5>
                            <div class="hr text-center m-auto">
                                <hr>
                            </div>
                        </div>

                         <div class="active-status2 text-center">
                        <div class="col-sm-12">
                            <div class="status-3">

                            </div>
                            <div class="status-4"></div>
                        </div>
                    </div>
                        <div class="col-sm-12">
                           <div class="create-checkbox-content">
                                <span class="t">I am a </span>
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" name="rsvp" checked>
                                    <span>Supplier</span>
                                </label>
                                <label class="radio">
                                    <input type="radio" name="rsvp">
                                   <span>Buyer</span>
                                </label>
                                <label class="radio" disabled>
                                    <input type="radio" name="rsvp">
                                    <span>Both</span>

                                </label>
                            </div>
                           </div>

                        </div>
                        <div class="col-md-4">
                            <p class="res-text">Country/Region</p>

                        </div>
                        <div class="col-md-8">


                <div class="form-group toogle-country">
                    <div id="basic" data-input-name="country"></div>
                </div>


                        </div>
                        <div class="col-md-4">
                            <p class="res-text">Company Name</p>
                        </div>
                        <div class="col-md-8">
                             <div class="form-group">
                            <input type="text" class="form-control" placeholder="Must be a legally registered company">
                            </div>
                        </div>


                        <div class="col-sm-12 col-md-6 col-lg-6 margin-20 m-20">

                            <div class="custom-control custom-checkbox mt-2 m-align">
                                <input type="checkbox" class="custom-control-input" id="customCheck" name="example1">
                                <label class="custom-control-label" for="customCheck">
                                    <p class="d-inline agree_text">Agree our<a href="#" class="ForgetPwd " value="Confirm"><b class="text_color">&nbsp;Terms & Condition.</b></a></p>

                                </label>
                            </div>

                        </div>

                        <div class="col-sm-12 col-md-6 col-lg-6 margin-20">

                            <div class="form-group  text-right m-align">

                                <input id="next_btn2" class="btn-signup text-white " name="next" @click="register()" type="button" value="Confirm">


                            </div>
                        </div>

                    </div>
                </fieldset>
            </div>


        </div>
    </div>
	</div>
</template>

<script>
    import axios from 'axios'

	export default {
		data() {
			return {
				heading: 'HOME > REGISTER',
				 firstStep: true,
				 secondStep: false,
                 secondTabStyleObject:{ },
                 
                userData:{
                    firstName:'',
                    lastName:'',
                    userName:'',
                    email:'',
                    phone:'',
                    userType:'',
                    password:'',
                    password_confirmation:''
                }
			}
		},
		methods:{
		    next_step() {

                axios.post(`//localhost:8080/api/account/login`,{
                    login: 'admin@gmail.com',
                    password: '123456'
                })
                .then(response => {
                    console.log(response);
                // JSON responses are automatically parsed.
                //this.posts = response.data
                })
                .catch(e => {
                    console.log(e)
                //this.errors.push(e)
                })



                this.firstStep=false;
                this.secondStep=true;
                this.secondTabStyleObject={ display : "block"};

            },

            prev_step() {
                this.firstStep=true;
                this.secondStep=false;
                this.secondTabStyleObject={ };

            },

            register() 
            {
                console.log(this.userData);

                axios.post(`http://localhost:8080/api/account/register`, this.userData)
                .then(response => {
                    console.log(response);
                    alert(response);
                // JSON responses are automatically parsed.
                //this.posts = response.data
                })
                .catch(e => {
                    console.log(e)
                //this.errors.push(e)
                })
            }
		},
		head: {
			title: 'Account Register'
		}
	}
</script>





