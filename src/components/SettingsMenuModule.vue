<template>
    <div class="module">
        <h2 class="module__header">Settings</h2>
        <div class="module__body module__body--no-more">
            <div class="body__unfocused-title body__border-above">General</div>
            <div class="list-item">Layouts</div>
            <div class="list-item">Themes</div>
            <div class="body__unfocused-title body__border-above">Personal</div>
            <div class="list-item">History</div>
            <div class="list-item">Saved</div>
            <div class="list-item">Favourite players</div>
            <div class="list-item">Favourite teams</div>
            <div class="list-item">Favourite events</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SettingsMenuModule",
    data: function () {
        return {};
    },
};
</script>

<style lang="scss" scoped></style>
