<template>
    <div class="news-preset grid">
        <reklame-module class="grid__item grid__item--ad" />
        <news-module class="grid__item grid__item--newsmodule" />
        <recent-results-module class="grid__item--recentresults" />
        <todays-matches-module class="grid__item--todaymatch" />
        <top-rankings-module class="grid__item--toprank" />
    </div>
</template>

<script>
import NewsModule from "./NewsModule.vue";
import RecentResultsModule from "@/components/RecentResultsModule.vue";
import TodaysMatchesModule from "@/components/TodaysMatchesModule.vue";
import TopRankingsModule from "@/components/TopRankingsModule.vue";
import ReklameModule from "./ReklameModule.vue";

export default {
    name: "HomeView",
    data: function () {
        return {};
    },
    components: {
        NewsModule,
        RecentResultsModule,
        TodaysMatchesModule,
        TopRankingsModule,
        ReklameModule,
    },
};
</script>

<style lang="scss" scoped>
.grid__item--ad {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
}

.grid__item--newsmodule {
    grid-column: 1 / span 2;
    grid-row: 3 / span 9;
}

.grid__item--recentresults {
    grid-column: 3 / span 1;
    grid-row: 1 / span 7;
}

.grid__item--toprank {
    grid-column: 3 / span 1;
    grid-row: 8 / span 6;
}

.grid__item--todaymatch {
    grid-column: 3 / span 1;
    grid-row: 14 / span 7;
}
</style>
