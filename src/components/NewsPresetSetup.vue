<template>
    <div class="news-preset grid">
        <try-module class="grid__item grid__item--trymodule" />
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
.grid__item--trymodule {
    grid-column: 1 / span 1;
    grid-row: 1 / span 4;
}
</style>
