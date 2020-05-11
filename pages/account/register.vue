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
                    <form @submit.prevent="submitRegister"> 
                        <template v-if="failed">
                          <div style="margin-top: 10px;" class="alert alert-danger alert-dismissible text-left">
                            <button type="button" class="close" data-dismiss="alert">&times;</button>
                            <strong>Register Failed!</strong> <br> 
                           {{errorMessages}}
                        </div>
                    </template>
                    <template v-if="successMessages">
                          <div style="margin-top: 10px;" class="alert alert-success alert-dismissible text-left">
                            <button type="button" class="close" data-dismiss="alert">&times;</button>
                            <strong>Register Success!</strong> <br> 
                                {{successMessages}}
                        </div>
                    </template>
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

                        
                            <div class="row">
                                <div class="col-sm-12 col-md-6 col-lg-6">
                                    <div class="form-group">
                                        <input v-model="formData.firstName" type="text" class="form-control" placeholder="First Name" value="" />
                                        <small class="error-text" v-if="errors.firstName">{{errors.firstName[0]}}</small>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-6 col-lg-6">
                                    <div class="form-group">
                                        <input v-model="formData.lastName" type="text" class="form-control" placeholder="Last Name" value="" />
                                        <small class="error-text" v-if="errors.lastName">{{errors.lastName[0]}}</small>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group">
                                        <input v-model="formData.email" type="text" class="form-control" placeholder="Email Address" value="" />
                                        <small class="error-text" v-if="errors.email">{{errors.email[0]}}</small>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group">
                                        <input v-model="formData.password" type="password" class="form-control" placeholder=" Password" value="" />
                                        <small class="error-text" v-if="errors.password">{{errors.password[0]}}</small>
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <div class="form-group">
                                        <input v-model="formData.password_confirmation" type="password" class="form-control" placeholder="Confirm Password" value="" />

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
                            <input  type="button"  @click="next_step1()" id="next_btn1" class="btnSubmit text-white  pt-2 pb-2"  name="" value="Next">  

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
                            <input v-model="formData.userType" type="radio" value="1" name="rsvp" checked>
                            <span>Supplier</span>
                        </label>
                        <label class="radio">
                            <input v-model="formData.userType" type="radio" value="2" name="rsvp">
                            <span>Buyer</span>
                        </label>
                        <label class="radio" disabled>
                            <input v-model="formData.userType" type="radio" value="3" name="rsvp">
                            <span>Both</span>

                        </label>

                    </div>
                    <small class="error-text" v-if="errors.userType"><br>{{errors.userType[0]}}</small>
                </div>

            </div>
            <div class="col-md-4">
                <p class="res-text">Country/Region</p>

            </div>
            <div class="col-md-8">


                <div class="form-group toogle-country">
                   <!--  <div id="basic" data-input-name="country"></div> -->
                    <select v-model="formData.countryId"  id="" class="form-control" >
                        <option value="">Select Country</option>
                        <option value="1">Bangladesh</option>
                        <option value="2">Afghanistan</option>
                        <option value="3">Bhutan</option>
                        <option value="4">India</option>
                        <option value="5">Maldives</option>
                        <option value="6">Nepal</option>
                        <option value="7">Pakistan</option>
                        <option value="8">Sri Lanka</option>
                    </select>
                </div>
            </div>
            <div class="col-md-4">
                <p class="res-text">Company Name</p>
            </div>
            <div class="col-md-8">
               <div class="form-group">
                <input v-model="formData.companyName" type="text" class="form-control" placeholder="Must be a legally registered company">
            </div>
        </div>


        <div class="col-sm-12 col-md-6 col-lg-6 margin-20 m-20">

            <div class="custom-control custom-checkbox mt-2 m-align">
                <input v-model="formData.checkTerm" type="checkbox" class="custom-control-input" id="customCheck" >
                <label class="custom-control-label" for="customCheck">
                    <p class="d-inline agree_text">Agree our<a href="#" class="ForgetPwd " value="Confirm"><b class="text_color">&nbsp;Terms & Condition.</b></a></p>

                </label>
            </div>

        </div>

        <div class="col-sm-12 col-md-6 col-lg-6 margin-20">

            <div class="form-group  text-right m-align">
                <button @click="prev_step1()"> < </button>
                <button type="submit"  :disabled=!formData.checkTerm id="next_btn2" class="btn-signup text-white"  value="Confirm">Confirm</button> 


            </div>
        </div>

    </div>
</fieldset>
 </form>
</div>


</div>
</div>
</div>
</template>

<script>
	export default {
        middleware: ['guest'],
		data() {
			return {
				heading: 'HOME > REGISTER',
				 firstStep: true,
				 secondStep: false,
				 secondTabStyleObject:{ },

                 formData:{
                    firstName:'',
                    lastName:'',
                    email:'',
                    password:'',
                    password_confirmation:'',
                    userType:'',
                    countryId:'',
                    checkTerm:''
                 },
                 failed:false,
                 errorMessages:'',
                 successMessages:'',

			}
		},
		methods:{
            next_step1() {
                this.firstStep=false;
                this.secondStep=true;
                this.secondTabStyleObject={ display : "block"};

            },

            prev_step1() {
                this.firstStep=true;
                this.secondStep=false;
                this.secondTabStyleObject={ };

            },
            async submitRegister(){
                this.$toast.show('Submitting Data.....');
              await this.$axios.$post('account/register', this.formData).then((res) => {
                  this.failed=false;
                  this.successMessages=res.message;
                  this.resetForm();
              }).catch(e => {
                  this.failed=true;
                  this.errorMessages='Please, check input carefully.';
                  this.$toast.error('Register Failed');
              });

            },
            resetForm() {
                //console.log('Reseting the form')
                var self = this; //you need this because *this* will refer to Object.keys below`

                Object.keys(this.formData).forEach(function(key,index) {
                  self.formData[key] = '';
              });
            }

        },
		head: {
			title: 'Account Register'
		}
	}
</script>





