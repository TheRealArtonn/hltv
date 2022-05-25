//Developed by Arton
<template>
    <div class="list-item" :class="this.selected && 'list-item--selected'">
        <div class="list-item__left-image">
            <img :src="require(`@/assets/img/${this.item.img}`)" alt="" />
        </div>
        <div class="list-item__text-box list-item__text-box--side-icon">
            <div class="text-box__title-container">
                <h4 class="title-container__title">
                    {{ this.item.title }}
                </h4>
                <div
                    class="title-container__favorit"
                    :class="
                        favoritClicked && 'title-container__favorit--active'
                    "
                    v-on:click.stop="
                        $emit('favoritId', this.item.id),
                            onClickSelectFavorit(this.item.id)
                    "
                ></div>
            </div>
            <div class="text-box__text-container">
                <div v-if="this.item.flag">
                    <img src="" alt="" />
                </div>
                <p class="text-container__text">{{ this.item.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LeftImageListItem",
    emits: ["favoritId"],
    props: ["item", "selected"],
    data: function () {
        return {
            favoritClicked: false,
        };
    },
    methods: {
        onClickSelectFavorit(value) {
            const favoriteIds =
                JSON.parse(localStorage.getItem("favoriteIds")) || [];

            this.favoritClicked = favoriteIds.includes(value);
        },
    },
    beforeMount() {
        this.onClickSelectFavorit(this.item.id);
    },
};
</script>

// Write all of your css below, just like what you would do normally.
<style lang="scss" scoped>
//Import needed css partials, in this case we needed the variables.
@import "@/assets/styles/_variables.scss";

.list-item--selected .title-container__favorit--active,
.list-item--selected .title-container__favorit:hover {
    background-image: url(@/assets/img/icons/favorit-white-active.svg);
}
</style>
