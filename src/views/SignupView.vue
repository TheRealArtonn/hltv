<template>
    <div class="grid">
        <SignupModule />
        <RecentResultsModule />
    </div>
</template>

<script>
import SignupModule from "@/components/SignupModule.vue";
import RecentResultsModule from "@/components/RecentResultsModule.vue";
export default {
    name: "SignupView",
    data: function () {
        return {};
    },
    components: { SignupModule, RecentResultsModule },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
</style>
