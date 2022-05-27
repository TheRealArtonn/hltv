<template>
    <div class="module">
        <h2 class="module__header">Pis lort</h2>
        <div class="module__body">
            <h3 class="body__title">Ongoing events</h3>
            <div class="body__unfocused-title body__border-above">
                Relevant to you
            </div>
            <div class="list-item">tekst</div>
            <div class="list-item">tekst</div>
            <div class="list-item">tekst</div>
        </div>
        <div class="module__footer">Show more</div>
    </div>
</template>

<script>
export default {
    name: "TryModule",
    data: function () {
        return {};
    },
};
</script>

<style lang="scss" scoped>
//Import needed css partials, in this case we needed the variables.
@import "@/assets/styles/_variables.scss";
</style>
