<template>
	<div >
		 <section class="forget-password-area">
                 <div class="container">
                       <div class="row">

                      <div class="col-md-5 middle-con">
                          <div class="forget-password-content text-center">
                              <h5>Forget your password?</h5>
                              <p>Enter your below to receive your password <br>  reset instruction</p>
                              <form action="" method="post">
                                   <div class="form-group">
                                  <input class="form-control" type="email" name="email" placeholder="Email Address">
                              </div>
                              </form>
                             <div class="d-flex justify-content-between m-bo">
                                <div>
                                <nuxt-link to="/account/login" class="btn_danger text-decoration-none">Return to login</nuxt-link >
                                </div>
                                 <div>
                                 <nuxt-link to="/account/forget-password-success" class="btn-signup text-white bottom-m" name="next"  type="button">Request Reset</nuxt-link>
                                 </div>
                             </div>
                             <p class="forgot-b">Now to Tizaara? <span><nuxt-link to="/account/register">Register Now</nuxt-link></span></p>
                          </div>
                      </div>

                  </div>
                 </div>

              </section>
	</div>
</template>