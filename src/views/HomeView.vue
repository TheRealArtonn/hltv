<template>
    <div class="home">
        <news-preset-setup v-if="this.currentPreset === 0" />
        <events-preset-setup v-else-if="this.currentPreset === 1" />
    </div>
</template>

<script>
import EventsPresetSetup from "@/components/EventsPresetSetup.vue";
import NewsPresetSetup from "@/components/NewsPresetSetup.vue";

export default {
    name: "HomeView",
    data: function () {
        return {
            currentPreset: 0,
        };
    },
    components: { EventsPresetSetup, NewsPresetSetup },
    methods: {
        onClickSelectPreset(index) {
            this.currentPreset = index;

            localStorage.setItem("currentPreset", index);
        },
    },
    beforeMount() {
        this.currentPreset = Number(localStorage.getItem("currentPreset")) || 0;
    },
};
</script>

<style lang="scss" scoped></style>
