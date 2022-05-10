<template>
    <div class="home grid"></div>
</template>

<script>
export default {
    name: "HomeView",
    components: {},
};
</script>

<style lang="scss" scoped>
.grid {
    width: 1400px;
    height: auto;
    background-color: blanchedalmond;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(70px, auto);
    gap: 25px;
    padding: 25px;
}

.grid__item {
    min-width: 450px;
    height: 100%;
}
</style>
