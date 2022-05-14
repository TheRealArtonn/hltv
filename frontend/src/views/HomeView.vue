<template>
    <div class="home grid">
        <event-module :item="value" class="grid__item grid__item--events" />
    </div>
</template>

<script>
import EventModule from "@/components/EventModule.vue";

export default {
    name: "HomeView",
    data: function () {
        return {
            value: "dildo",
            sort: "lorte is",
            yellow: "noodles",
        };
    },
    components: { EventModule },
};
</script>

<style lang="scss" scoped>
.grid__item--events {
    grid-column: 1 / span 1;
    grid-row: 1 / span 9;
}
</style>
