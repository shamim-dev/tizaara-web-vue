<template>
  <div>
    <div class="col-md-12 mt-4 mb-1">
      <div class="login-or">
        <hr class="hr-or">
        <span class="span-or">or</span>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6">
        <div class="form-group">
          <input type="button" @click="socialLogin('google')" class="btnGoogle text-white  pt-2 pb-2"
                 :value="title+' with Google'"/>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6">
        <div class="form-group">
          <input type="button" @click="socialLogin('facebook')" class="btnFacebook text-white  pt-2 pb-2"
                 :value="title+' with Facebook'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["title"],
    name: "AuthSocial",
    methods: {
      socialLogin(provider = 'facebook') {
        this.popUp(provider);
        window.addEventListener('message', e => {
          this.$auth.setUserToken(e.data.userToken.token).then(() => {
            this.$router.push('/account')
          })
        }, false);
      },

      popUp(provider) {
        let width = 300, height = 500;
        let left = (screen.width / 2) - (width / 2), top = (screen.height / 2) - (height / 2);

        window.open(process.env.API_BSE_URL + '/account/login/' + provider, left, top);
      }
    }
  }
</script>

<style scoped>

</style>
