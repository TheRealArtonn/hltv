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
                    v-on:click.stop="consoleLog(this.item.id)"
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
    props: ["item", "selected"],
    data: function () {
        return {};
    },
    methods: {
        consoleLog(value) {
            console.log(value);
        },
    },
};
</script>

// Write all of your css below, just like what you would do normally.
<style lang="scss" scoped>
//Import needed css partials, in this case we needed the variables.
@import "@/assets/styles/_variables.scss";
</style>
