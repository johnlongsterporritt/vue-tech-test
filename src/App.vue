<template>
    <div id="wrapper">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <header class="d-flex align-items-center justify-content-between">
                        <img
                            alt="Vue logo"
                            class="logo"
                            src="@/assets/logo.svg"
                            width="250"
                            height="125"
                        />

                        <div class="wrapper">
                            <nav>
                                <RouterLink to="/">Home</RouterLink>
                                <RouterLink to="/about">About</RouterLink>
                                <RouterLink to="/contact">Contact</RouterLink>
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
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Khula:wght@300;400;600&display=swap');
    @import "@/assets/main.css";
</style>