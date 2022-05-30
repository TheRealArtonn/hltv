<template>
    <div class="grid">
        <settings-menu-module
            class="grid__item grid__item--settings-menu"
            @selected-setting="onClickSelected"
        />
        <layout-settings-module
            v-if="selectedSetting === 'layouts'"
            class="grid__item grid__item--layout-module"
        />
        <theme-settings-module
            v-if="selectedSetting === 'themes'"
            class="grid__item--theme-module"
        />
        <history-settings-module
            v-if="selectedSetting === 'history'"
            class="grid__item--theme-module"
        />
    </div>
</template>

<script>
import SettingsMenuModule from "@/components/SettingsMenuModule.vue";
import LayoutSettingsModule from "../components/LayoutSettingsModule.vue";
import ThemeSettingsModule from "../components/ThemeSettingsModule.vue";
import HistorySettingsModule from "../components/HistorySettingsModule.vue";

export default {
    name: "SettingsView",
    components: {
        SettingsMenuModule,
        LayoutSettingsModule,
        ThemeSettingsModule,
        HistorySettingsModule,
    },

    data: function () {
        return {
            selectedSetting: "layouts",
        };
    },

    methods: {
        onClickSelected(value) {
            this.selectedSetting = value;
        },
    },
};
</script>

<style lang="scss" scoped>
.grid__item--settings-menu {
    grid-column: 1 / span 1;
    grid-row: 1 / span 7;
}

.grid__item--layout-module,
.grid__item--theme-module {
    grid-column: 2 / span 2;
    grid-row: 1 / span 9;
}
</style>
