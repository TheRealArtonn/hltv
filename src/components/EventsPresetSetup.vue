<template>
    <div class="events-preset grid">
        <event-module
            :itemList="itemList"
            class="grid__item grid__item--events"
        />
        <!-- content that's going to be changed depending on event module -->
        <ongoing-event-module class="grid__item grid__item--ongoingevent" />
        <group-play class="grid__item grid__item--groupplay" />
        <teams-attending-module class="grid__item grid__item--teams" />
    </div>
</template>

<script>
import EventModule from "@/components/EventModule.vue";
import OngoingEventModule from "@/components/OngoingEventModule.vue";
import GroupPlay from "@/components/GroupPlay.vue";
import TeamsAttendingModule from "./TeamsAttendingModule.vue";

//Henter json filen, med data til brug. Længere nede vil du finde itemList, som tager imod jsonfil indhold.
import EventsJsonFile from "@/assets/json/events.json";

export default {
    name: "EventsPresetSetup",
    data: function () {
        return {
            itemList: EventsJsonFile,
        };
    },
    components: {
        EventModule,
        OngoingEventModule,
        GroupPlay,
        TeamsAttendingModule,
    },
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

.grid__item--groupplay {
    grid-column: 2 / span 2;
    grid-row: 5 / span 4;
}

.grid__item--teams {
    grid-column: 2 / span 2;
    grid-row: 9 / span 6;
}
</style>
