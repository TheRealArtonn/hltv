<template>
    <div class="list-item" :class="this.selected && 'list-item--selected'">
        <div class="list-item__left-image">
            <img :src="require(`@/assets/img/${this.item.img}`)" alt="" />
        </div>
        <div class="list-item__text-box list-item__text-box--side-icon">
            <h4 class="text-box__title">
                {{ this.item.title }}
            </h4>
            <div class="text-box__text">
                <div v-if="this.item.flag">
                    <img src="" alt="" />
                </div>
                <p>{{ this.item.text }}</p>
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
};
</script>

// Write all of your css below, just like what you would do normally.
<style lang="scss" scoped>
//Import needed css partials, in this case we needed the variables.
@import "@/assets/styles/_variables.scss";
</style>
