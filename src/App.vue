<template>
    <div class="wrapper">
        <login-modal :modal="loginModalValue" />
        <nav-module @login="onClickModal" />

        <div class="wrapper__content">
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
            quitModalValue: true,
            loginModalValue: false,
        };
    },
    components: { NavModule, LoginModal },
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
