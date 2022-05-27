<template>
    <div class="grid">
        <settings-menu-module class="grid__item grid__item--lort" />
    </div>
</template>

<script>
import SettingsMenuModule from "@/components/SettingsMenuModule.vue";
export default {
    name: "SettingsView",
    components: { SettingsMenuModule },
};
</script>

<style lang="scss" scoped>
.grid__item--lort {
    grid-column: 1 / span 1;
    grid-row: 1 / span 4;
}
</style>
