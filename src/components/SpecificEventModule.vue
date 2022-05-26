<template>
    <div class="events-preset grid grid--two-columns">
        <ongoing-event-module class="grid__item grid__item--ongoingevent" />
        <group-play class="grid__item grid__item--groupplay" />
    </div>
</template>

<script>
import OngoingEventModule from "@/components/OngoingEventModule.vue";
import GroupPlay from "@/components/GroupPlay.vue";

export default {
    name: "SpecificEventModule",
    props: ["value"],
    data: function () {
        return {};
    },
    components: { OngoingEventModule, GroupPlay },
};
</script>

// Write all of your css below, just like what you would do normally.
<style lang="scss" scoped>
//Import needed css partials, in this case we needed the variables.
@import "@/assets/styles/_variables.scss";

.grid--two-columns {
    grid-template-columns: repeat(2, 1fr);
    grid-column: 2 / span 2;
    padding: 0px;
}

.grid__item--ongoingevent {
    grid-column: 1 / span 2;
    grid-row: 1 / span 4;
}

.grid__item--groupplay {
    grid-column: 1 / span 2;
    grid-row: 5 / span 4;
}
</style>
