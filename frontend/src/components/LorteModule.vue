<template>
    <div class="module">
        <div class="module__header">{{ moduleName }}</div>
        <div class="module__body">{{ item }}</div>
        <div class="module__footer">Show more</div>
    </div>
</template>

<script>
export default {
    name: "LorteModule",
    props: ["item"],
    data: function () {
        return {
            moduleName: "Lorte",
        };
    },
};
</script>

// Write all of your css below, just like what you would do normally.
<style lang="scss" scoped>
//Import needed css partials, in this case we needed the variables.
@import "@/assets/styles/_variables.scss";
</style>
