<template>
    <div class="module">
        <h2 class="module__header">Teams Attending</h2>
        <div class="module__body module__body--no-more">
            <div class="module-cards">
                <div class="module-card">
                    <div class="module-card-above module-card-above--selected">
                        <div
                            class="module-card-above__text module-card-above__text--current"
                        >
                            Current
                        </div>
                    </div>
                    <img
                        class="module-card__img"
                        src="@/assets/img/teams/team-1.jpg"
                        alt=""
                    />
                    <div class="module-card__text">
                        <div class="text__title">FaZe</div>
                        <div class="text__info">Spring Groups Winner</div>
                    </div>
                </div>
                <div class="module-card">
                    <div class="module-card-above">
                        <div class="module-card-above__text">#2</div>
                    </div>
                    <img
                        class="module-card__img"
                        src="@/assets/img/teams/team-2.jpg"
                        alt=""
                    />
                    <div class="module-card__text">
                        <div class="text__title">Na'Vi</div>
                        <div class="text__info">Spring Groups Runner-up</div>
                    </div>
                </div>
                <div class="module-card">
                    <div class="module-card-above">
                        <div class="module-card-above__text">#3</div>
                    </div>
                    <img
                        class="module-card__img"
                        src="@/assets/img/teams/team-3.jpg"
                        alt=""
                    />
                    <div class="module-card__text">
                        <div class="text__title">ENCE</div>
                        <div class="text__info">Spring Showdown Europe</div>
                    </div>
                </div>
                <div class="module-card">
                    <div class="module-card-above">
                        <div class="module-card-above__text">#4</div>
                    </div>
                    <img
                        class="module-card__img"
                        src="@/assets/img/teams/team-4.jpg"
                        alt=""
                    />
                    <div class="module-card__text">
                        <div class="text__title">G2</div>
                        <div class="text__info">Spring Groups Runner-up</div>
                    </div>
                </div>
                <div class="module-card">
                    <div class="module-card-above">
                        <div class="module-card-above__text">#5</div>
                    </div>
                    <img
                        class="module-card__img"
                        src="@/assets/img/teams/team-5.jpg"
                        alt=""
                    />
                    <div class="module-card__text">
                        <div class="text__title">Vitality</div>
                        <div class="text__info">Spring Groups Winner</div>
                    </div>
                </div>
                <div class="module-card">
                    <div class="module-card-above">
                        <div class="module-card-above__text">#6</div>
                    </div>
                    <img
                        class="module-card__img"
                        src="@/assets/img/teams/team-6.jpg"
                        alt=""
                    />
                    <div class="module-card__text">
                        <div class="text__title">Big</div>
                        <div class="text__info">Spring Groups Runner-up</div>
                    </div>
                </div>
                <div class="module-card">
                    <div class="module-card-above">
                        <div class="module-card-above__text">#7</div>
                    </div>
                    <img
                        class="module-card__img"
                        src="@/assets/img/teams/team-7.jpg"
                        alt=""
                    />
                    <div class="module-card__text">
                        <div class="text__title">OG</div>
                        <div class="text__info">Spring Showdown Europe</div>
                    </div>
                </div>
                <div class="module-card">
                    <div class="module-card-above">
                        <div class="module-card-above__text">#8</div>
                    </div>
                    <img
                        class="module-card__img"
                        src="@/assets/img/teams/team-8.jpg"
                        alt=""
                    />
                    <div class="module-card__text">
                        <div class="text__title">paiN</div>
                        <div class="text__info">Spring Groups Runner-up</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TeamsAttendingModule",
    data: function () {
        return {};
    },
};
</script>

<style lang="scss" scoped>
//Import needed css partials, in this case we needed the variables.
@import "@/assets/styles/_variables.scss";

.module-cards {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: $secondary-padding;
}

.module-card {
    width: 194px;
    height: 223px;
    background-color: $element-background-color;
    border: 1px solid $element-border-color;
    border-radius: 5px;
    overflow: hidden;
    position: relative;

    &:hover {
        cursor: pointer;
        border: 1px solid $list-select-border;
        background-color: $list-select-bg;
    }

    &__img {
        width: 194px;
        height: 160px;
        object-fit: cover;
    }

    &__text {
        padding: $general-padding;

        .text__title {
            font-size: $primary-font-size;
            font-weight: 700;
        }
        .text__info {
            font-size: $unfocused-font-size;
        }
    }
}
.module-card-above {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    position: absolute;

    &--selected {
        border: 5px solid $main-color;
    }

    &__text {
        width: 33px;
        font-size: 1.2rem;
        color: $secondary-font-color;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 0px 0px 5px 0px;
        padding: 10px;

        &--current {
            width: 60px;
            background-color: $main-color;
        }
    }
}
</style>
