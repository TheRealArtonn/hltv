<template>
    <div class="grid">
        <SignupModule />
        <RecentResultsModule />
        <TodaysMatchesModule />
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
</style>
