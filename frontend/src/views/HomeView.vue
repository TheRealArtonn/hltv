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
        };
    },
    components: { EventModule },
};
</script>

<style lang="scss" scoped>
.grid {
    width: 1400px;
    height: auto;
    background-color: blanchedalmond;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 70px;
    gap: 25px;
    padding: 25px;
}

.grid__item {
    min-width: 450px;
    height: 100%;
}

.grid__item--events {
    grid-column: 1 / 1;
    grid-row: 1 / span 9;
}
</style>
