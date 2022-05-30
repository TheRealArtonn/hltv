<template>
    <div class="module">
        <h2 class="module__header">Layouts</h2>

        <div class="module__body module__body--no-more">
            <div class="body__title">Choose your layout for HLTV.org</div>
            <div class="module__options">
                <div>
                    <div
                        class="module__options-btn module__options-btn--news"
                        v-on:click="onClickSelectPreset(0), checkPreset('news')"
                        :class="
                            currentPreset === 0 &&
                            'module__options-btn--selected'
                        "
                    ></div>

                    <h3 class="module__options-heading">news</h3>
                </div>

                <div>
                    <div
                        class="module__options-btn module__options-btn--events"
                        v-on:click="
                            onClickSelectPreset(1), checkPreset('events')
                        "
                        :class="
                            currentPreset === 1 &&
                            'module__options-btn--selected'
                        "
                    ></div>
                    <h3 class="module__options-heading">events</h3>
                </div>

                <div>
                    <div class="module__options-btn"></div>
                    <h3 class="module__options-heading">betting</h3>
                </div>

                <div>
                    <div class="module__options-btn"></div>
                    <h3 class="module__options-heading">custom</h3>
                </div>
            </div>
            <div class="module__btn-wrapper">
                <button class="module__btn" onclick="history.back()">
                    Save and back
                </button>
            </div>
        </div>
    </div>
</template>

<script>
// import EventsPresetSetup from "@/components/EventsPresetSetup.vue";
// import NewsPresetSetup from "@/components/NewsPresetSetup.vue";

export default {
    //emits kan indejolde variabler, arrays osv
    name: "LayoutSettingsModule",
    data: function () {
        return {
            currentPreset: 0,
            // selectedLayout: "news",
        };
    },
    // components: { EventsPresetSetup, NewsPresetSetup },
    methods: {
        onClickSelectPreset(index) {
            this.currentPreset = index;

            localStorage.setItem("currentPreset", index);
        },
        checkPreset(value) {
            this.selectedLayout = value;
        },
    },
    beforeMount() {
        this.currentPreset = Number(localStorage.getItem("currentPreset")) || 0;
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.module__options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 25px 10px 25px;
    gap: 25px;
    border-bottom: 1px solid $element-border-color;

    .module__options-btn {
        height: 270px;

        background-color: $unfocused-font-color;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            // background-color: $blue-hover-color;
            opacity: 0.9;
        }

        &--selected {
            background-color: $main-color;
        }
    }

    .module__options-heading {
        height: 30px;

        display: flex;
        justify-content: center;
        align-items: center;
        // TO-DO: lav en font størrelse til headings og en padding på 25px
        font-size: 2rem;
    }
}

.module__btn-wrapper {
    display: flex;
    justify-content: flex-end;
    padding: 29px 25px 25px 0px;
    .module__btn {
        height: 50px;
        width: 180px;

        background-color: $main-color;
        border: none;
        border-radius: 5px;

        font-size: 1.6rem;
        font-weight: 700;
        color: $secondary-font-color;
        cursor: pointer;

        &:hover {
            background-color: $blue-hover-color;
        }
    }
}
</style>
