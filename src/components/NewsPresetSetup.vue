<template>
    <div class="news-preset grid">
        <try-module class="grid__item grid__item--trymodule" />
        <news-module class="grid__item grid__item--newsmodule" />
    </div>
</template>

<script>
import TryModule from "./TryModule.vue";
import NewsModule from "./NewsModule.vue";

export default {
    name: "HomeView",
    data: function () {
        return {};
    },
    components: { NewsModule, TryModule },
};
</script>

<style lang="scss" scoped>
.grid__item--trymodule {
    grid-column: 3 / span 1;
    grid-row: 1 / span 4;
}

.grid__item--newsmodule {
    grid-column: 1 / span 2;
    grid-row: 1 / span 9;
}
</style>
