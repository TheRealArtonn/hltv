<template>
    <div class="grid">
        <SignupModule class="grid__item--signup" />
        <RecentResultsModule class="grid__item--recentresults" />
        <TodaysMatchesModule class="grid__item--todaymatch" />
    </div>
</template>

<script>
import SignupModule from "@/components/SignupModule.vue";
import RecentResultsModule from "@/components/RecentResultsModule.vue";
import TodaysMatchesModule from "@/components/TodaysMatchesModule.vue";
export default {
    name: "SignupView",
    data: function () {
        return {};
    },
    components: { SignupModule, RecentResultsModule, TodaysMatchesModule },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.grid__item--signup {
    grid-column: 1 / span 2;
    grid-row: 1 / span 8;
}

.grid__item--recentresults {
    grid-column: 3 / span 1;
    grid-row: 1 / span 7;
}

.grid__item--todaymatch {
    grid-column: 3 / span 1;
    grid-row: 8 / span 9;
}
</style>
