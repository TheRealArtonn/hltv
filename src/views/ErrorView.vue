<template>
    <div class="not-found">404 page not found</div>
</template>

<script>
export default {
    name: "ErrorView",
    data: function () {
        return {};
    },
    components: {},
};
</script>

<style lang="scss" scoped>
.not-found {
    height: calc(100vh - 282px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: 700;
}
</style>
