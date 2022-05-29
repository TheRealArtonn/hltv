<template>
    <img class="reklame" src="@/assets/img//ads/thin.jpg" alt="reklame nft" />
</template>

<script>
export default {
    name: "ReklameModule",
    data: function () {
        return {};
    },
};
</script>

<style lang="scss" scoped>
//Import needed css partials, in this case we needed the variables.
@import "@/assets/styles/_variables.scss";

.reklame {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}
</style>
