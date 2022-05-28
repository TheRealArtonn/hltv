<template>
    <div class="news-preset grid">
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
    },
};
</script>

<style lang="scss" scoped>
.grid__item--trymodule {
    grid-column: 3 / span 1;
    grid-row: 1 / span 4;
}

.grid__item--newsmodule {
    grid-column: 1 / span 2;
    grid-row: 1 / span 9;
}

.grid__item--recentresults {
    grid-column: 3 / span 1;
    grid-row: 1 / span 8;
}

.grid__item--toprank {
    grid-column: 3 / span 1;
    grid-row: 9 / span 5;
}

.grid__item--todaymatch {
    grid-column: 3 / span 1;
    grid-row: 14 / span 9;
}
</style>
