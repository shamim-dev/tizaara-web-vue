<template>
	<div >
   <section class="forget-password-area">
     <div class="container">
      <template v-if="isFailed">
        <div style="margin-top: 10px;" class="alert alert-danger alert-dismissible text-left">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <strong>Failed!</strong> <br> 
          {{errorMessages}}
        </div>
      </template>
      <template v-if="isSuccess">
        <div style="margin-top: 10px;" class="alert alert-success alert-dismissible text-left">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <strong>Success!</strong> <br> 
          {{successMessages}}
        </div>
      </template>
      <div class="row">

        <div v-if="forgetPassForm" class="col-md-5 middle-con">
          <div class="forget-password-content text-center">
           <form @submit.prevent='submitForgetRequest'>
            <h5>Forget your password?</h5>
            <p>Enter your below to receive your password <br>  reset instruction</p>

            <div class="form-group">
              <input class="form-control" v-model='forgetPassData.emailOrPhone' type="text"  placeholder="Enter Email Or Phone" required="">
              <small class="error-text" v-if="errors.emailOrPhone">{{errors.emailOrPhone[0]}}</small>
            </div>
            <div class="d-flex justify-content-between m-bo">
              <div>
                <nuxt-link to="/account/login" class="btn_danger text-decoration-none">Return to login</nuxt-link >
              </div>
              <div>
                <button type="submit" :disabled=formSubmit id="next_btn1" class="btn-signup text-white bottom-m"  value="Confirm">
                  <span v-if="formSubmit" class="spinner-border spinner-border-sm" role="status"></span> {{formSubmitBtnText}}</button>
                </div>
              </div>
              <p class="forgot-b">Now to Tizaara? <span><nuxt-link to="/account/register">Register Now</nuxt-link></span></p>
            </form>
          </div>
        </div>

        <div v-if="resetPassForm" class="col-md-5 middle-con">
          <div class="forget-password-content text-center">
            <form @submit.prevent="submitResetPassForm">
              <h5>Reset password?</h5>

              <div class="form-group">
                <input type="hidden" v-model="resetPassData.userId" class="form-control" >
                <input style="margin-top: 20px;margin-bottom: 10px;" class="form-control" type="text" v-model="resetPassData.verificationToken"  placeholder="Enter OTP"> 
                <small class="error-text" v-if="errors.verificationToken">{{errors.verificationToken}}</small>
                <input style="margin-top: 20px;margin-bottom: 10px;" class="form-control" type="password" v-model="resetPassData.password" placeholder="New Password">
                <small class="error-text" v-if="errors.password">{{errors.password[0]}}</small>
                <input class="form-control" type="password" v-model="resetPassData.password_confirmation" name="password_confirmation" placeholder="Confirm Password">
              </div>

              <div class="d-flex justify-content-between m-bo">
                <div>
                  <nuxt-link to="/account/login" class="btn_danger text-decoration-none">Return to login</nuxt-link >
                </div>
                <div>

                 <button type="submit" :disabled=formSubmit id="next_btn1" class="btn-signup text-white bottom-m"  value="Confirm">
                  <span v-if="formSubmit" class="spinner-border spinner-border-sm" role="status"></span> {{formSubmitBtnText}}</button>

                  <!--  <nuxt-link to="/account/forget-password-success" class="btn-signup text-white bottom-m" name="next"  type="button">{{formSubmitBtnText}}</nuxt-link> -->
                </div>
              </div>
              <p class="forgot-b">Now to Tizaara? <span><nuxt-link to="/account/register">Register Now</nuxt-link></span></p>
            </form>
          </div>
        </div>

      </div>
    </div>

  </section>
</div>
</template>

<script>
  export default {
    middleware: ['guest'],
    data() {
      return {
        heading: 'Forget Password', 
        forgetPassForm:true,
        resetPassForm:false,
        isFailed:false,
        isSuccess:false,
        isComplete:false,
        formSubmit:false,
        successMessages:'',
        errorMessages:'',
        formSubmitBtnText:'Send Request',
        forgetPassData:{
          emailOrPhone:''
        },
        resetPassData:{
          userId:'',
          userName:'',
          verificationToken:'',
          password:'',
          password_confirmation:''
        },
      }
    },
    methods:{
     async submitForgetRequest(){
      this.$toast.show('Sending Request...');
      this.formSubmit=true;
      this.formSubmitBtnText='Sending...';
      await this.$axios.$post('account/forget-password', this.forgetPassData).then((res) => {

        if(res.status=='success'){
              this.formSubmit=false;
              this.isFailed=false;
              this.isSuccess=true;
              this.isComplete=true;
              this.forgetPassForm=false,
              this.resetPassForm=true,
              this.formSubmitBtnText='Reset Password';
              this.successMessages=res.message;
              this.resetPassData.userName=res.userName;
              this.resetPassData.userId=res.userId;
              this.$toast.success('Success! check your email or phone');
              //this.$router.push('/account/forget-password-success');
            }else{
              this.formSubmit=false;
              this.isFailed=true;
              this.isSuccess=false;
              this.successMessages='';
              this.errorMessages=res.message;
              this.$toast.error(res.message);
          }
          }).catch(e => {
            this.formSubmit=false;
            this.isFailed=true;
            this.isSuccess=false;
            this.errorMessages=e.response.data.message;
            this.formSubmitBtnText='Send Request';
            this.failed=true;
            //this.errorMessages=e.response.data.messages;
            this.$toast.error('Reset Password Failed!');
          });
        },

        async submitResetPassForm(){
          this.$toast.show('Sending Request...');
          this.formSubmit=true;
          this.formSubmitBtnText='Sending...';
          await this.$axios.$post('account/password-reset-save', this.resetPassData).then((res) => {
            if(res.status=='success'){
              this.formSubmit=false;
              this.isFailed=false;
              this.isSuccess=true;
              this.isComplete=true;
              this.forgetPassForm=false,
              this.resetPassForm=true,
              this.formSubmitBtnText='Reset Password';
              this.successMessages=res.message;
              this.$toast.success(res.message);
              this.$router.push('/account/forget-password-success');
            }else{
              this.formSubmit=false;
              this.isFailed=true;
              this.successMessages='';
              this.errorMessages=res.message;
              this.$toast.error(res.message);
            }
          }).catch(e => {
            console.log(e.response);
             this.formSubmitBtnText='Reset Password';
            this.formSubmit=false;
            this.isFailed=true;
            this.isSuccess=false;
            this.errorMessages=e.response.data.message;
            this.$toast.error(e.response.data.message);
          });
        }




      }
    }
  </script>