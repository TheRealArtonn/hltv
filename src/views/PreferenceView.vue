<template>
    <div class="grid">
        <preference-module class="grid__item grid__item--preference" />
        <recent-results-module class="grid__item grid__item--recent" />
        <top-rankings-module class="grid__item grid__item--topranking" />
        <todays-matches-module class="grid__item grid__item--topmatches" />
    </div>
</template>

<script>
import PreferenceModule from "@/components/PreferenceModule.vue";
import RecentResultsModule from "@/components/RecentResultsModule.vue";
import TopRankingsModule from "../components/TopRankingsModule.vue";
import TodaysMatchesModule from "@/components/TodaysMatchesModule.vue";

export default {
    name: "PreferenceView",
    data: function () {
        return {};
    },
    components: {
        PreferenceModule,
        RecentResultsModule,
        TopRankingsModule,
        TodaysMatchesModule,
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.grid__item--preference {
    grid-column: 1 / span 2;
    grid-row: 1 / span 14;
}
.grid__item--recent {
    grid-column: 3 / span 1;
    grid-row: 6 / span 7;
}
.grid__item--topranking {
    grid-column: 3 / span 1;
    grid-row: 13 / span 6;
}
.grid__item--topmatches {
    grid-column: 3 / span 1;
    grid-row: 19 / span 7;
}
</style>
