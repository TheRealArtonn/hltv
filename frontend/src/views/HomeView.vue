<template>
    <div class="home grid">
        <event-module :item="value" class="grid__item grid__item--events" />
        <lorte-module :item="sort" class="grid__item grid__item--lorte" />
        <asian-module :item="yellow" class="grid__item grid__item--asian" />
    </div>
</template>

<script>
import EventModule from "@/components/EventModule.vue";
import LorteModule from "@/components/LorteModule.vue";
import AsianModule from "@/components/AsianModule.vue";
export default {
    name: "HomeView",
    data: function () {
        return {
            value: "dildo",
            sort: "lorte is",
            yellow: "noodles",
        };
    },
    components: { EventModule, LorteModule, AsianModule },
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

.grid__item--asian {
    grid-column: 2 / span 2;
    grid-row: 10 / span 3;
}
</style>
