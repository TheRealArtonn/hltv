<template>
    <div class="event-module">
        <div class="votes__icon"></div>
        <div class="likes">{{ item.likes }}</div>
        <div class="votes__icon votes__icon--down">{{ item.dislikes }}</div>
        <div class="dislikes">1</div>
    </div>
</template>

<script>
export default {
    name: "EventModule",
    props: ["item"],
};
</script>

// Write all of your css below, just like what you would do normally.
<style lang="scss" scoped>
//Import needed css partials, in this case we needed the variables.
@import "@/assets/scss/_variables.scss";

.event-module {
    color: $titties-color;
}
</style>
