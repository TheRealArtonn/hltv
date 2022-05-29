<template>
    <div class="grid">
        <preference-module class="grid__item grid__item--preference" />
        <recent-results-module class="grid__item grid__item--recent" />
        <top-rankings-module class="grid__item grid__item--topranking" />
        <todays-matches-module class="grid__item grid__item--topmatches" />
        <reklame-module-thin class="grid__item--ad-thin" />
        <reklame-module-wide class="grid__item--ad-wide" />
    </div>
</template>

<script>
import PreferenceModule from "@/components/PreferenceModule.vue";
import RecentResultsModule from "@/components/RecentResultsModule.vue";
import TopRankingsModule from "../components/TopRankingsModule.vue";
import TodaysMatchesModule from "@/components/TodaysMatchesModule.vue";
import ReklameModuleThin from "@/components/ReklameModuleThin.vue";
import ReklameModuleWide from "@/components/ReklameModuleWide.vue";

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
        ReklameModuleThin,
        ReklameModuleWide,
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.grid__item--preference {
    grid-column: 1 / span 2;
    grid-row: 1 / span 11;
}
.grid__item--ad-wide {
    grid-column: 1 / span 2;
    grid-row: 12 / span 2;
}

.grid__item--ad-thin {
    grid-column: 3 / span 1;
    grid-row: 1 / span 5;
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
