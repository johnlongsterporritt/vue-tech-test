<template>
    <div id="wrapper">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <header class="">
                        <div id="MainNav" class="wrapper">
                            <nav class="navbar navbar-expand-md navbar-dark">
                                <a class="navbar-brand" href="/"><img
                                    alt="Vue logo"
                                    class="logo"
                                    src="@/assets/logo.svg"
                                    width="250"
                                    height="125"
                                /></a>

                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                  <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">
                                        <li class="nav-item"><RouterLink to="/">Home</RouterLink></li>
                                        <li class="nav-item"><RouterLink to="/about">About</RouterLink></li>
                                        <li class="nav-item"><RouterLink to="/contact">Contact</RouterLink></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </header>

                    <div class="row">
                        <div class="col-12">
                            <RouterView />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div> 
</template>

<script setup>
    import { RouterLink, RouterView } from "vue-router";
    import "https://code.jquery.com/jquery-3.6.0.min.js";
    import "https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js";
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Khula:wght@300;400;600&display=swap');
    @import "@/assets/main.css";
</style>