<template>
    <div class="wrapper">
        <nav-module />

        <div class="wrapper__content">
            <router-view />
        </div>
    </div>
</template>

<script>
import NavModule from "@/components/NavModule.vue";

export default {
    data: function () {
        return {
            currentPreset: 0,
        };
    },
    components: { NavModule },
    methods: {},
};
</script>

<style lang="scss">
@import "@/assets/styles/app.scss";
</style>
