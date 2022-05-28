<template>
    <div class="module">
        <h2 class="module__header">Teams Attending</h2>
        <div class="module__body module__body--no-more">
            <div class="module-cards">
                <div class="module-card">
                    <div class="module-card-selected">
                        <div></div>
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

.module-card-selected {
    width: 100%;
    height: 100%;
    border: 5px solid $main-color;
    border-radius: 5px;
    position: absolute;
}
</style>
