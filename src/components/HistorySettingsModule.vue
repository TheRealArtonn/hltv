<template>
    <div class="module">
        <h2 class="module__header">History</h2>

        <div class="module__body module__body--no-more">
            <div class="body__title">
                History of Favourited players, events and matches
            </div>
        </div>
    </div>
</template>

<script>
export default {
    //emits kan indejolde variabler, arrays osv
    emits: ["selectedSetting"],
    name: "HistorySettingsModule",
    data: function () {
        return {};
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
</style>
