<template>
    <div class="events-preset grid grid--two-columns">
        <ongoing-event-module class="grid__item grid__item--ongoingevent" />
    </div>
</template>

<script>
import OngoingEventModule from "@/components/OngoingEventModule.vue";

export default {
    name: "SpecificEventModule",
    props: ["value"],
    data: function () {
        return {
            moduleName: "Pis lort",
        };
    },
    components: { OngoingEventModule },
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
    grid-column: 2 / span 1;
}
</style>
