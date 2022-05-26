<template>
    <div class="wrapper">
        <nav-module />

        <div class="wrapper__content">
            <login-modal />
            <router-view />
        </div>
    </div>
</template>

<script>
import NavModule from "@/components/NavModule.vue";
import LoginModal from "./components/LoginModal.vue";

export default {
    data: function () {
        return {
            currentPreset: 0,
        };
    },
    components: { NavModule, LoginModal },
    methods: {},
};
</script>

<style lang="scss">
@import "@/assets/styles/app.scss";
</style>
