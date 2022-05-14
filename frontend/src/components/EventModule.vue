<template>
    <div class="module">
        <h2 class="module__header">{{ moduleName }}</h2>
        <div class="module__body">
            <h3 class="body__title body__border-below">Ongoing events</h3>
            <div class="body__unfocused-title">Relevant to you</div>
            <div class="list-item">
                <div class="list-item__left-image"></div>
            </div>
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
            moduleName: "Events",
        };
    },
};
</script>

// Write all of your css below, just like what you would do normally.
<style lang="scss" scoped>
//Import needed css partials, in this case we needed the variables.
@import "@/assets/styles/_variables.scss";
</style>
