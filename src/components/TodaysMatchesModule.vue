<template>
    <div class="module">
        <h2 class="module__header">Todays matches</h2>
        <div class="module__body">
            <h3 class="body__unfocused-title">Relevant to you</h3>

            <div class="list-item--grid">
                <div class="item_team--1">
                    <img
                        class="team__flag"
                        src="../assets/img/flags/denmark.svg"
                        alt="Danish Flag"
                    />
                    <h3 class="team__name">Astralis</h3>
                </div>
                <div class="item_team--2">
                    <div class="team__flag"></div>
                    <!-- h3 body__title ikke child af body, fokert BEM -->
                    <h3 class="team__name">Skade</h3>
                </div>
                <div class="matches__time--3">12:10</div>
            </div>

            <div class="body__unfocused-title body__border-above">Other</div>
            <!-- <h3 class="body__title">PGL</h3>
            <div class="matches">
                <div class="matches__teams">
                    <div class="list-item">
                        <div class="item_team">
                            <img
                                src="../assets/img/flags/denmark.svg"
                                alt="Danish Flag"
                            />
                            <h3 class="body__title">Estatic</h3>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item_team">
                            <img
                                src="../assets/img/flags/france.svg"
                                alt="Danish Flag"
                            />
                            <h3 class="body__title">Vitality</h3>
                        </div>
                    </div>
                </div>
                <div class="matches__time">
                    <div class="time"><h2>12.10</h2></div>
                </div>
            </div>
            <h3 class="body__title">PGL</h3>
            <div class="matches">
                <div class="matches__teams">
                    <div class="list-item">
                        <div class="item_team">
                            <img
                                src="../assets/img/flags/brazil.svg"
                                alt="Danish Flag"
                            />
                            <h3 class="body__title">Astralis</h3>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="item_team">
                            <img
                                src="../assets/img/flags/sweden.svg"
                                alt="Danish Flag"
                            />
                            <h3 class="body__title">Skade</h3>
                        </div>
                    </div>
                </div>
                <div class="matches__time">
                    <div class="time"><h2>12.10</h2></div>
                </div>
            </div> -->
        </div>
        <div class="module__footer">see all matches</div>
    </div>
</template>
<script>
export default {
    props: [],
    data: function () {
        return {
            moduleName: "Sign up",
        };
    },
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

.grid__item--todaymatch {
    grid-column: 3 / span 1;
    grid-row: 8 / span 9;
}

.list-item--grid {
    width: 100%;
    height: auto;

    display: grid;
    grid-template-areas:
        "a a c"
        "b b c";

    .item_team--1 {
        grid-area: a;
        display: flex;

        .team-flag {
            width: 37;
            height: auto;
        }
    }

    .item_team--2 {
        grid-area: b;
        display: flex;
        padding: $general-padding;

        .team__flag {
            align-self: center;
            border-radius: 10px;
            width: 37px;
            height: 28px;
            background-image: url(../assets/img/flags/poland-3.svg);
            background-size: 37px;
            background-repeat: no-repeat;
            background-position: center;
        }

        .team__name {
            font-size: 2rem;
            font-weight: 700;
            align-self: center;
            padding-left: 10px;
        }
    }

    .matches__time--3 {
        grid-area: c;

        justify-self: center;
        align-self: center;
        font-size: $primary-font-size;
        font-weight: 700;
    }

    &:hover {
        background-color: $list-select-bg;
        border-top: 1px solid $list-select-border;
        border-bottom: 1px solid $list-select-border;
    }

    &--selected,
    &--selected:hover {
        background-color: $header-gradient-background-color;
        color: $secondary-font-color;
        border-top: 1px solid $list-select-border;
        border-bottom: 1px solid $list-select-border;
    }
}
</style>
