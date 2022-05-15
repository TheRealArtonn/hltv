<template>
    <div class="module">
        <h2 class="module__header">{{ moduleName }}</h2>
        <div class="module__body">
            <h3 class="body__title">Ongoing events</h3>
            <div class="body__unfocused-title">Relevant to you</div>
            <div
                class="list-item"
                :class="selected === index && 'list-item--selected'"
                v-for="(item, index) in releventItems"
                :key="index"
                v-on:click="onClickActivate(index)"
            >
                <div class="list-item__left-image">
                    <img :src="require(`@/assets/img/${item.img}`)" alt="" />
                </div>
                <div class="list-item__text-box">
                    <h4 class="text-box__title">
                        {{ addElipse(item.title, 35) }}
                    </h4>
                    <div class="text-box">
                        <div v-if="item.flag">
                            <img src="" alt="" />
                        </div>
                        <p>{{ addElipse(item.text, 45) }}</p>
                    </div>
                </div>
            </div>
            <div class="body__unfocused-title">Other</div>
            <h3 class="body__title body__title--secound-title">
                Upcoming events
            </h3>
            <div class="body__unfocused-title">Relevant to you</div>
        </div>
        <div class="module__footer">Show more</div>
    </div>
</template>

<script>
export default {
    name: "EventModule",
    props: ["itemList"],
    data: function () {
        return {
            moduleName: "Events",
            selected: 0,
        };
    },
    computed: {
        releventItems() {
            return this.itemList.ongoing.filter((ongoing) => ongoing.relevant);
        },
        unreleventItems() {
            return this.itemList.ongoing.filter((ongoing) => !ongoing.relevant);
        },
    },
    methods: {
        onClickActivate(index) {
            this.selected = index;
        },
        addElipse(text, length) {
            if (text.length > length) {
                var textCut = text.substring(0, length) + "...";
                return textCut;
            } else {
                return text;
            }
        },
    },
};
</script>

// Write all of your css below, just like what you would do normally.
<style lang="scss" scoped>
//Import needed css partials, in this case we needed the variables.
@import "@/assets/styles/_variables.scss";
</style>
