<template>
    <div class="wrapper">
        <nav-module />

        <div class="wrapper__content">
            <router-view />
        </div>
        <footer-module />
    </div>
</template>

<script>
import NavModule from "@/components/NavModule.vue";
import FooterModule from "./components/FooterModule.vue";

export default {
    data: function () {
        return {
            currentPreset: 0,
        };
    },
    components: { NavModule, FooterModule },
    methods: {},
};
</script>

<style lang="scss">
@import "@/assets/styles/app.scss";
</style>
