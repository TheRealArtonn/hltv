<template>
    <div class="news-preset grid">
        <!-- Smid components her ind -->
        <try-module class="grid__item grid__item--trymodule" />
        <span>test</span>
    </div>
</template>

<script>
import TryModule from "./TryModule.vue";
export default {
    name: "HomeView",
    data: function () {
        return {};
    },
    components: { TryModule },
};
</script>

<style lang="scss" scoped>
.grid__item--events {
    grid-column: 1 / span 1;
    grid-row: 1 / span 14;
}
.grid__item--trymodule {
    grid-column: 1 / span 1;
    grid-row: 1 / span 6;
}
</style>
