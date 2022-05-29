<template>
    <div class="module">
        <h2 class="module__header">Todays matches</h2>
        <div class="module__body">
            <h3 class="body__unfocused-title">Relevant to you</h3>

            <p class="list-heading">PGL Major Antwerp 2022 Challengers stage</p>
            <div class="list-item--grid">
                <div class="item_team--1">
                    <div class="team__flag team__flag--dk"></div>
                    <h3 class="team__name">Astralis</h3>
                </div>
                <div class="item_team--2">
                    <div class="team__flag team__flag--pl"></div>
                    <!-- h3 body__title ikke child af body, fokert BEM -->
                    <h3 class="team__name">Skade</h3>
                </div>
                <div class="matches__time--3">12:10</div>
            </div>

            <div class="body__unfocused-title body__border-above">Other</div>

            <p class="list-heading">PGL Major Antwerp 2022 Challengers stage</p>
            <div class="list-item--grid">
                <div class="item_team--1">
                    <div class="team__flag team__flag--dk"></div>
                    <h3 class="team__name">Ecstatic</h3>
                </div>
                <div class="item_team--2">
                    <div class="team__flag team__flag--fr"></div>
                    <!-- h3 body__title ikke child af body, fokert BEM -->
                    <h3 class="team__name">Vitality</h3>
                </div>
                <div class="matches__time--3">14:00</div>
            </div>

            <p class="list-heading">PGL Major Antwerp 2022 Challengers stage</p>
            <div class="list-item--grid">
                <div class="item_team--1">
                    <div class="team__flag team__flag--br"></div>
                    <h3 class="team__name">B4</h3>
                </div>
                <div class="item_team--2">
                    <div class="team__flag team__flag--se"></div>
                    <!-- h3 body__title ikke child af body, fokert BEM -->
                    <h3 class="team__name">Finest</h3>
                </div>
                <div class="matches__time--3">20:00</div>
            </div>
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

.list-heading {
    font-size: $secondary-font-size;
    font-weight: 700;
    padding: $general-padding $general-padding 0 $general-padding;
}

.list-item--grid {
    border: 1px solid rgba(178, 34, 34, 0);

    width: 100%;
    height: auto;

    display: grid;
    grid-template-areas:
        "a a c"
        "b b c";

    .team__flag--dk {
        background-image: url(../assets/img/flags/denmark.svg);
    }

    .team__flag--pl {
        background-image: url(../assets/img/flags/poland-3.svg);
    }

    .team__flag--fr {
        background-image: url(../assets/img/flags/france.svg);
    }

    .team__flag--br {
        background-image: url(../assets/img/flags/brazil.svg);
    }

    .team__flag--se {
        background-image: url(../assets/img/flags/sweden.svg);
    }

    .item_team--1 {
        grid-area: a;
        display: flex;
        border-bottom: 1px solid $element-border-color;
        padding: $general-padding;

        .team__flag {
            align-self: center;
            border-radius: 10px;
            width: 37px;
            height: 28px;

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

    .item_team--2 {
        grid-area: b;
        display: flex;
        padding: $general-padding;

        .team__flag {
            align-self: center;
            border-radius: 10px;
            width: 37px;
            height: 28px;

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
