<template>
	<div >
		<section class="forget-password-area">
                 <div class="container">
                       <div class="row">

                      <div class="col-md-5 middle-con">
                          <div class="forget-password-content text-center">
                              <h5>Reset password?</h5>

                              <form action="" method="post">
                                   <div class="form-group">
                                  <input style="margin-top: 20px;margin-bottom: 10px;" class="form-control" type="password" name="password" placeholder="New Password">
                                  <input class="form-control" type="password" name="confirm_password" placeholder="Confirm Password">
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