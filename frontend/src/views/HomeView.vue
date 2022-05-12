<template>
    <div class="home grid">
        <event-module :item="value" class="grid__item grid__item--events" />
        <lorte-module :item="sort" class="grid__item grid__item--lorte" />
    </div>
</template>

<script>
import EventModule from "@/components/EventModule.vue";
import LorteModule from "@/components/LorteModule.vue";
export default {
    name: "HomeView",
    data: function () {
        return {
            value: "dildo",
            sort: "lorte is",
        };
    },
    components: { EventModule, LorteModule },
};
</script>

<style lang="scss" scoped>
.grid__item--events {
    grid-column: 1 / span 1;
    grid-row: 1 / span 9;
}

.grid__item--lorte {
    grid-column: 2 / span 2;
    grid-row: 1 / span 4;
}
</style>
