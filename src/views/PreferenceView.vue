<template>
    <div class="grid">
        <PreferenceModule class="grid__item grid__item--preference" />
    </div>
</template>

<script>
import PreferenceModule from "@/components/PreferenceModule.vue";
export default {
    name: "PreferenceView",
    data: function () {
        return {};
    },
    components: { PreferenceModule },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.grid__item--preference {
    grid-column: 1 / span 2;
    grid-row: 1 / span 14;
}
</style>
