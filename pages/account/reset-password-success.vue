<template>
	<div>
		<section class="forget-password-area">
                <div class="container">
                    <div class="row">

                        <div class="col-md-5 middle-con">
                            <div class="forget-password-content text-center">

                                <div style="margin-top: 10px;" class="alert alert-success alert-dismissible text-left">
                                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                                    <strong>Success!</strong> <br>Success!  Password update to may use your new password. </div>


                                    <div>
                                    <nuxt-link to="/account/login" style="margin-top: 20px;" class="btn-signup text-white bottom-m" name="next" type="button">Back to Login</nuxt-link>

                                    </div>

                                <p class="forgot-b" style="margin-top: 20px;margin-bottom: 20px;">Now to Tizaara? <span><nuxt-link to="/account/register">Register Now</nuxt-link></span></p>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
	</div>
</template>