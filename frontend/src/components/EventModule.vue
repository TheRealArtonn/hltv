<template>
    <div class="module">
        <h2 class="module__header">{{ moduleName }}</h2>
        <div class="module__body">
            <h3 class="body__title">Test tekst</h3>
        </div>
        <div class="module__footer">Show more</div>
    </div>
</template>

<script>
export default {
    name: "EventModule",
    props: ["item"],
    data: function () {
        return {
            moduleName: "Event",
        };
    },
};
</script>

// Write all of your css below, just like what you would do normally.
<style lang="scss" scoped>
//Import needed css partials, in this case we needed the variables.
@import "@/assets/styles/_variables.scss";
</style>
