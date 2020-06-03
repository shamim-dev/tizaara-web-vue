<template>
  <div>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt porro rerum esse na.Deserunt porro
                  rerum esse na</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt porro rerum esse na. Deserunt
                  porro rerum esse na</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt porro rerum esse na. Deserunt
                  porro rerum esse na</p>
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>

          <div class="row mt-5 mb-5">
            <div class="col-md-12">
              <div class="link_account text-center">
                <h4 class=""><nuxt-link :to="{name:'account-login'}">Already have an account?</nuxt-link></h4>
                <nuxt-link :to="{name:'account-login'}" class="text_color"><b><u>Login Now</u></b></nuxt-link>
              </div>

            </div>
          </div>


        </div>


        <div class="col-md-6 login-form-2 pt-5 pb-3">
          <form @submit.prevent="submitRegister">
            <template v-if="failed">
              <div style="margin-top: 10px;" class="alert alert-danger alert-dismissible text-left">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Failed!</strong> <br>
                {{errorMessages}}
              </div>
            </template>
            <template v-if="successMessages">
              <div style="margin-top: 10px;" class="alert alert-success alert-dismissible text-left">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Success!</strong> <br>
                {{successMessages}}
              </div>
            </template>
            <fieldset id="first" v-if="firstStep">
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
                    <input v-model="formData.firstName" type="text" class="form-control" placeholder="First Name"
                           value=""/>
                    <small class="error-text" v-if="errors.firstName">{{errors.firstName[0]}}</small>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6">
                  <div class="form-group">
                    <input v-model="formData.lastName" type="text" class="form-control" placeholder="Last Name"
                           value=""/>
                    <small class="error-text" v-if="errors.lastName">{{errors.lastName[0]}}</small>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <div class="form-group">
                    <input v-model="formData.emailOrPhone" type="text" class="form-control"
                           placeholder="Email or Phone Number" value=""/>
                    <small class="error-text" v-if="errors.emailOrPhone">{{errors.emailOrPhone[0]}}</small>
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <div class="form-group">
                    <input v-model="formData.password" type="password" class="form-control" placeholder=" Password"
                           value=""/>
                    <small class="error-text" v-if="errors.password">{{errors.password[0]}}</small>
                  </div>
                </div>

                <div class="col-sm-12 col-md-12 col-lg-12">
                  <div class="form-group">
                    <input v-model="formData.password_confirmation" type="password" class="form-control"
                           placeholder="Confirm Password" value=""/>

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
                    <input type="button" @click="next_step1()" id="next_btn1" class="btnSubmit text-white  pt-2 pb-2"
                           name="" value="Next">

                  </div>
                </div>
              </div>

              <auth-social title="Sign Up"/>

            </fieldset>
            <fieldset v-bind:style="secondTabStyleObject" class="nopading" style="padding: 0px 30px 0px 30px;"
                      v-if="secondStep" id="second">
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
                    <select v-model="formData.country" id="" class="form-control">
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
                    <small class="error-text" v-if="errors.country"><br>{{errors.country[0]}}</small>
                  </div>
                </div>
                <div class="col-md-4">
                  <p class="res-text">Company Name</p>
                </div>
                <div class="col-md-8">
                  <div class="form-group">
                    <input v-model="formData.companyName" type="text" class="form-control"
                           placeholder="Must be a legally registered company">
                    <small class="error-text" v-if="errors.companyName"><br>{{errors.companyName[0]}}</small>
                  </div>
                </div>


                <div class="col-sm-12 col-md-6 col-lg-6 margin-20 m-20">

                  <div class="custom-control custom-checkbox mt-2 m-align">
                    <input v-model="formData.checkTerm" type="checkbox" class="custom-control-input" id="customCheck">
                    <label class="custom-control-label" for="customCheck">
                      <p class="d-inline agree_text">Agree our<a href="#" class="ForgetPwd " value="Confirm"><b
                        class="text_color">&nbsp;Terms & Condition.</b></a></p>

                    </label>
                  </div>

                </div>

                <div class="col-sm-12 col-md-6 col-lg-6 margin-20">

                  <div class="form-group  text-right m-align">
                    <button @click="prev_step1()"> <</button>
                    <button type="submit" :disabled=!formData.checkTerm id="next_btn2" class="btn-signup text-white"
                            value="Confirm"><span v-if="submit" class="spinner-border spinner-border-sm"
                                                  role="status"></span> {{btnConfirmText}}
                    </button>


                  </div>
                </div>

              </div>
            </fieldset>
          </form>
          <fieldset v-bind:style="mobileOtpTabStyleObject" class="nopading" style="padding: 0px 30px 0px 30px;"
                    v-if="mobileOtp" id="second">
            <form @submit.prevent="submitOtp">
              <div class="row ">
                <div class="col-sm-12">
                  <h5 class="text-center"><strong>Verify Mobile OTP</strong></h5>
                  <div class="hr text-center m-auto">
                    <hr>
                  </div>
                </div>
                <!--  <div class="col-md-4">
                    <p class="res-text">Mobile OTP</p>
                </div> -->
                <div class="col-md-12">
                  <div class="form-group">
                    <input type="hidden" v-model="verifyForm.phone" class="form-control" placeholder="Enter Your OTP">
                    <input type="text" v-model="verifyForm.otp" class="form-control" placeholder="Enter Your OTP">
                    <small class="error-text" v-if="errors.otp">{{errors.otp[0]}}</small>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6">
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 ">
                  <div class="form-group  text-right m-align">
                    <button type="submit" :disabled=otpSubmit id="next_btn1" class="btn-signup text-white"
                            value="Confirm"><span v-if="otpSubmit" class="spinner-border spinner-border-sm"
                                                  role="status"></span>{{otpSubmitBtnText}}
                    </button>


                  </div>
                </div>
              </div>
            </form>
          </fieldset>
          <div class="row" v-if="registerComplete">

            <div class="col-sm-12 col-md-6 col-lg-6">
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 ">
              <div class="form-group  text-center m-align">
                <!--  <button type="submit" id="next_btn1" class="btn-signup text-white"  value="Confirm">Login</button>  -->
                <nuxt-link to="/account/login" class="btn-signup text-white text-decoration-none">Go To Login
                </nuxt-link>


              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
  import AuthSocial from "../../components/auth/AuthSocial";

  export default {
    components: {AuthSocial},
    middleware: ['guest'],
    data() {
      return {
        heading: 'HOME > REGISTER',
        firstStep: true,
        secondStep: false,
        mobileOtp: false,
        btnConfirmText: "Confirm",
        secondTabStyleObject: {},
        mobileOtpTabStyleObject: {display: "block"},

        formData: {
          firstName: '',
          lastName: '',
          emailOrPhone: '',
          password: '',
          password_confirmation: '',
          userType: '',
          country: '',
          companyName: '',
          checkTerm: ''
        },
        verifyForm: {
          otp: '',
          phone: ''
        },
        failed: false,
        errorMessages: '',
        successMessages: '',
        registerComplete: false,
        submit: false,
        otpSubmitBtnText: 'Verify Now',
        otpSubmit: false,


      }
    },
    methods: {
      next_step1() {
        this.firstStep = false;
        this.secondStep = true;
        this.secondTabStyleObject = {display: "block"};

      },

      prev_step1() {
        this.firstStep = true;
        this.secondStep = false;
        this.secondTabStyleObject = {};

      },
      async submitRegister() {
        this.formData.checkTerm = false;
        //this.btnConfirmText='Submitting';
        this.submit = true;
        this.$toast.show('Submitting Data.....');
        await this.$axios.$post('account/register', this.formData).then((res) => {
          this.failed = false;
          this.mobileOtp = false;
          this.secondStep = false;
          //this.registerComplete=true;
          this.verifyForm.phone = res.user.phone;
          this.successMessages = res.message;
          this.resetForm();
          this.$toast.success('Form Successfully Submitted!');
          if (res.signUpBy == 'phone') {
            this.firstStep = false;
            this.secondStep = false;
            this.mobileOtp = true;
          } else {
            this.registerComplete = true;
          }
        }).catch(e => {
          this.failed = true;
          this.submit = false;
          this.formData.checkTerm = true;
          this.btnConfirmText = 'Confirm';
          this.errorMessages = e.response.data.messages;
          this.$toast.error('Register Failed');
        });

      },
      async submitOtp() {
        this.$toast.show('Validating OTP.....');
        this.otpSubmit = true;
        this.otpSubmitBtnText = 'Verifiying OTP';
        await this.$axios.$post('account/verify-otp', this.verifyForm).then((res) => {
          this.failed = false;
          this.mobileOtp = false;

          if (res.status == 'success') {
            this.registerComplete = true;
            this.successMessages = "Your Mobile Verified Successfully! Please, Login to manage your account!";
            this.$toast.success('Your Mobile Verified Successfully! Please, Login to manage your account!');
          } else {

            this.otpSubmit = false;
            this.failed = true;
            this.successMessages = '';
            this.mobileOtp = true;
            this.errorMessages = res.messages;
            this.$toast.error(res.messages);
          }


        }).catch(e => {
          this.otpSubmit = false;
          this.failed = true;
          this.successMessages = '';
          this.mobileOtp = true;
          this.errorMessages = 'OTP verification Failed!';
          this.$toast.error('OTP verification Failed!');
        });

      },
      resetForm() {
        var self = this; //you need this because *this* will refer to Object.keys below`
        Object.keys(this.formData).forEach(function (key, index) {
          self.formData[key] = '';
        });
      }

    },
    head: {
      title: 'Account Register'
    }
  }
</script>





