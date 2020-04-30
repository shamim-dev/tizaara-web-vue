<template>
 <section class="header_section">
        <div class="container-fluid">

            <div class="row">
                <div class="col-md-3">
                    <nav class="navbar navbar-expand-lg navbar-light">

                        <nuxt-link to="/" class="navbar-brand"><img src="~assets/img/logo.png" width="100%" class="img-fluid" alt="Logo"></nuxt-link>

                        </a>
                    </nav>

                </div>

                <div class="col-md-6 ">

                    <div class="search_box mt-4">

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <button class="btn dropdown-toggle border_left" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><b>Products</b> </button>

                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                    <div role="separator" class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                            <span class="break_search mt-1">|</span>
                            <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="What you are looking here......">
                            <div class="input-group-append">
                                <button class="btn btn_bg_danger text-white" type="button">Search</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-md-3">
                    <div class="login_register mt-5">
                        <span ><strong>
                         <nuxt-link to="/account/login" class="btn_danger text-decoration-none">Login</nuxt-link > / <nuxt-link to="/account/register" class="btn_danger text-decoration-none">Register</nuxt-link>
                         </strong></span>
                    </div>
                </div>
            </div>
            <hr>

        </div>
    </section>
</template>