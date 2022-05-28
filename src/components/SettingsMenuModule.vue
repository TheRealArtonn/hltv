<template>
    <div class="module">
        <h2 class="module__header">Settings</h2>
        <div class="module__body module__body--no-more">
            <div class="body__unfocused-title body__border-above">General</div>
            <div
                class="list-item"
                :class="
                    localSelectedSetting === 'layouts' && 'list-item--selected'
                "
                @click="emitValue('layouts')"
            >
                Layouts
            </div>
            <div
                class="list-item"
                :class="
                    localSelectedSetting === 'themes' && 'list-item--selected'
                "
                @click="emitValue('themes')"
            >
                Themes
            </div>
            <div class="body__unfocused-title body__border-above">Personal</div>
            <div
                class="list-item"
                :class="
                    localSelectedSetting === 'history' && 'list-item--selected'
                "
                @click="emitValue('history')"
            >
                History
            </div>
            <div
                class="list-item"
                :class="
                    localSelectedSetting === 'saved' && 'list-item--selected'
                "
                @click="emitValue('saved')"
            >
                Saved
            </div>
            <div
                class="list-item"
                :class="
                    localSelectedSetting === 'players' && 'list-item--selected'
                "
                @click="emitValue('players')"
            >
                Favourite players
            </div>
            <div
                class="list-item"
                :class="
                    localSelectedSetting === 'teams' && 'list-item--selected'
                "
                @click="emitValue('teams')"
            >
                Favourite teams
            </div>
            <div
                class="list-item"
                :class="
                    localSelectedSetting === 'events' && 'list-item--selected'
                "
                @click="emitValue('events')"
            >
                Favourite events
            </div>
        </div>
    </div>
</template>

<script>
export default {
    //emits kan indejolde variabler, arrays osv
    emits: ["selectedSetting"],
    name: "SettingsMenuModule",
    data: function () {
        return {
            localSelectedSetting: "layouts",
        };
    },
    methods: {
        emitValue(value) {
            this.$emit("selectedSetting", value);
            this.localSelectedSetting = value;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
.list-item {
    // maybe too big irl
    font-size: $secondary-font-size * 2;
    font-weight: 700;
}
</style>
