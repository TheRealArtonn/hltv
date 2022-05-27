<template>
    <div class="home">
        <div>
            presets:
            <button v-on:click="onClickSelectPreset(0)">News</button
            ><button v-on:click="onClickSelectPreset(1)">Events</button>
        </div>
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

        console.log(this.currentPreset);
    },
};
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
}
</style>
