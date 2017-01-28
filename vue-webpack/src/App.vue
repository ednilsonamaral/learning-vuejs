<template>
    <app-header></app-header>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <app-jumbotron class="col-md-6"></app-jumbotron>

                <div class="col-md-6 basic-margin-top">
                    <app-main-banner title="Main Component" description="Hello, motherfucker!!!"></app-main-banner>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from './components/Header.vue';
import AppJumbotron from './components/Jumbotron.vue';
import AppMainBanner from './components/MainBanner.vue';

export default {
  components: { AppHeader, AppJumbotron, AppMainBanner },
};
</script>

<style>
body{
    background: #dcdcdc;
    color: #333333;
}

.basic-margin-top{
    margin-top: 100px;
}
</style>
