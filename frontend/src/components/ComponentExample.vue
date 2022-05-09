<template>
    <div class="votes">
        <div class="votes__icon"></div>
        <div class="likes">{{ item.likes }}</div>
        <div class="votes__icon votes__icon--down">{{ item.dislikes }}</div>
        <div class="dislikes">1</div>
    </div>
</template>

<script>
export default {
    name: "voteModule",
    props: ["item"],
};
</script>

// Write all of your css below, just like what you would do normally.
<style lang="scss" scoped>
//Import needed css partials, in this case we needed the variables.
@import "@/assets/scss/_variables.scss";

.titties {
    color: $titties-color;
}
</style>
