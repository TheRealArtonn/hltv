<template>
    <div class="module grid__item--signup">
        <h2 class="module__header">{{ moduleName }}</h2>
        <div class="module__body module__body--no-more">
            <div class="signup-process">
                <p class="signup-process__text">
                    Thank you for signing to HLTV.org
                </p>
                <p class="signup-process__text">
                    We only need you to fill in some information before your
                    account is ready.
                </p>
            </div>

            <h3 class="body__title">Personal information</h3>
            <div class="signup">
                <form action="" class="signup__input">
                    <div class="input__username">
                        <input type="text" placeholder="Username" />
                    </div>
                    <div class="input__field">
                        <input
                            class="form__input"
                            type="text"
                            placeholder="Username"
                        />
                        <input
                            class="form__input"
                            type="text"
                            placeholder="Username"
                        />
                        <input
                            class="form__input"
                            type="text"
                            placeholder="Username"
                        />
                        <input
                            class="form__input"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: [],
    data: function () {
        return {
            moduleName: "Sign up",
        };
    },
};
</script>

<style lang="scss" scoped>
.grid__item--signup {
    grid-column: 1 / span 2;
    grid-row: 1 / span 4;
}

.signup-process {
    padding: 10px;
}

.body__title {
    border-top: 1px solid;
}
</style>
