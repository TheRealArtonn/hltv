<template>
    <div class="grid">
        <SignupModule />
    </div>
</template>

<script>
import SignupModule from "@/components/SignupModule.vue";
export default {
    name: "SignupView",
    data: function () {
        return {};
    },
    components: { SignupModule },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
</style>
