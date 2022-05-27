<template>
    <div class="module">
        <h2 class="module__header">Themes</h2>

        <div class="module__body module__body--no-more">
            <div class="body__title">Choose your theme for HLTV.org</div>
        </div>
    </div>
</template>

<script>
export default {
    //emits kan indejolde variabler, arrays osv
    emits: ["selectedSetting"],
    name: "ThemeSettingsModule",
    data: function () {
        return {};
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
</style>
