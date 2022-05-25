<template>
    <div class="module">
        <h2 class="module__header">{{ moduleName }}</h2>
        <div class="module__body module__body--no-more">
            <figure class="body__image">
                <img
                    :src="require('@/assets/img/banners/intel-esl-2022.webp')"
                    alt=""
                />
            </figure>
            <div class="toggle">
                <div class="toggle__option">Overview</div>
                <div class="toggle__option">Matches</div>
                <div class="toggle__option">Results</div>
                <div class="toggle__option">Stats</div>
                <div class="toggle__option">Hub/dedicated</div>
            </div>
            <div class="cards">
                <div class="card">
                    <div class="card__container">
                        <div class="card__title">Date</div>
                        <div class="card__data">May 2nd - May 4th 2022</div>
                    </div>
                </div>
                <div class="card">
                    <div class="card__container">
                        <div class="card__title">Prize pool</div>
                        <div class="card__data">2 spots at IEM Dallas '22</div>
                    </div>
                </div>
                <div class="card">
                    <div class="card__container">
                        <div class="card__title">Teams</div>
                        <div class="card__data">8</div>
                    </div>
                </div>
                <div class="card">
                    <div class="card__container">
                        <div class="card__title">Location</div>
                        <div class="card__data">Europe (Online)</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TryModule",
    props: [],
    data: function () {
        return {
            moduleName: "Text to be inputted",
        };
    },
};
</script>

// Write all of your css below, just like what you would do normally.
<style lang="scss" scoped>
//Import needed css partials, in this case we needed the variables.
@import "@/assets/styles/_variables.scss";

.cards {
    height: 115px;
    padding: 0 35px;
}
</style>
