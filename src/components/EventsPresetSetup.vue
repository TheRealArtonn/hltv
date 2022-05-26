<template>
    <div class="events-preset grid">
        <event-module
            :itemList="itemList"
            class="grid__item grid__item--events"
        />
        <specific-event-module class="grid__item grid__item--specific-event" />
    </div>
</template>

<script>
import EventModule from "@/components/EventModule.vue";
import SpecificEventModule from "./SpecificEventModule.vue";

//Henter json filen, med data til brug. Længere nede vil du finde itemList, som tager imod jsonfil indhold.
import EventsJsonFile from "@/assets/json/events.json";

export default {
    name: "EventsPresetSetup",
    data: function () {
        return {
            itemList: EventsJsonFile,
        };
    },
    components: { EventModule, SpecificEventModule },
};
</script>

<style lang="scss" scoped>
.grid__item--events {
    grid-column: 1 / span 1;
    grid-row: 1 / span 14;
}

.grid__item--specific-event {
    grid-column: 2 / span 2;
}
</style>
