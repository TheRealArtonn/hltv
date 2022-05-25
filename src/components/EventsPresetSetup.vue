<template>
    <div class="events-preset grid">
        <event-module
            :itemList="itemList"
            class="grid__item grid__item--events"
        />
        <ongoing-event-module class="grid__item grid__item--ongoingevent" />
    </div>
</template>

<script>
import EventModule from "@/components/EventModule.vue";
import OngoingEventModule from "@/components/OngoingEventModule.vue";

//Henter json filen, med data til brug. Længere nede vil du finde itemList, som tager imod jsonfil indhold.
import EventsJsonFile from "@/assets/json/events.json";

export default {
    name: "HomeView",
    data: function () {
        return {
            itemList: EventsJsonFile,
        };
    },
    components: { EventModule, OngoingEventModule },
};
</script>

<style lang="scss" scoped>
.grid__item--events {
    grid-column: 1 / span 1;
    grid-row: 1 / span 14;
}

.grid__item--ongoingevent {
    grid-column: 2 / span 2;
    grid-row: 1 / span 4;
}
</style>
