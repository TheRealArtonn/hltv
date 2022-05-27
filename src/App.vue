<template>
    <div class="wrapper">
        <login-modal :modal="loginModalValue" @closedLogin="onClickModal" />
        <nav-module @login="onClickModal" />

        <div class="wrapper__content">
            <router-view />
        </div>

        <footer-module />
    </div>
</template>

<script>
import NavModule from "@/components/NavModule.vue";
import FooterModule from "./components/FooterModule.vue";
import LoginModal from "./components/LoginModal.vue";

export default {
    data: function () {
        return {
            currentPreset: 0,
            loginModalValue: false,
        };
    },

    components: { NavModule, FooterModule, LoginModal },

    methods: {
        onClickModal(value) {
            this.loginModalValue = value;
            console.log(value);
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/styles/app.scss";
</style>
