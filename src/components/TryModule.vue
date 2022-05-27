<template>
    <div class="module">
        <h2 class="module__header">fisk</h2>
        <div class="module__body">
            <!-- <div class="body__title">fisk</div> -->
            <div class="body__unfocused-title"></div>
        </div>
        <div class="module__footer">show more</div>
    </div>
    <!-- <div class="module">
        <h2 class="module__header">{{ moduleName }}</h2>
        <div class="module__body">
            <h3 class="body__title">Ongoing events</h3>
            <div class="body__unfocused-title body__border-above">
                Relevant to you
            </div>
            {{ value }}
        </div>
        <div class="module__footer">Show more</div>
    </div> -->
</template>

<script>
export default {
    name: "TryModule",
    props: ["value"],
    data: function () {
        return {
            moduleName: "Pis lort",
        };
    },
};
</script>

// Write all of your css below, just like what you would do normally.
<style lang="scss" scoped>
//Import needed css partials, in this case we needed the variables.
@import "@/assets/styles/_variables.scss";
</style>
