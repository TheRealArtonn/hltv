<template>
    <div class="module">
        <h2 class="module__header">Themes</h2>

        <div class="module__body module__body--no-more">
            <div class="body__title">Choose your theme for HLTV.org</div>

            <div class="module__theme-options">
                <div>Day Theme</div>
                <div>Night Theme</div>
                <div>Auto</div>
            </div>
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

.module__theme-options {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    padding: 0 $secondary-padding;

    div {
        background-color: $main-color;
        height: 200px;

        display: flex;
        justify-content: center;
        align-items: center;

        color: $secondary-font-color;
        font-size: $primary-font-size;

        cursor: pointer;
    }
}
</style>
