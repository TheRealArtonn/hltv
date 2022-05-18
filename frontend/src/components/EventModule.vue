<template>
    <div class="module">
        <h2 class="module__header">{{ moduleName }}</h2>
        <div class="module__body">
            <div
                v-for="(itemListSection, index) in itemListSections"
                :key="itemListSection.title"
            >
                <h3
                    v-if="itemListSection.title"
                    class="body__title"
                    :class="index > 0 && 'body__title--secound-title'"
                >
                    {{ itemListSection.title }}
                </h3>
                <div
                    v-for="itemListGroup in itemListSection.itemListGroups"
                    :key="itemListGroup.title"
                >
                    <div
                        v-if="itemListGroup.title"
                        class="body__unfocused-title"
                    >
                        {{ itemListGroup.title }}
                    </div>
                    <left-image-list-item
                        v-for="item in itemListGroup.items"
                        :key="item.id"
                        :item="item"
                        :selected="this.selectedId === item.id"
                        @favoritId="onClickSaveToLocalStorage"
                        v-on:click="this.selectedId = item.id"
                    />
                </div>
            </div>
        </div>
        <div class="module__footer">Show more</div>
    </div>
</template>

<script>
import LeftImageListItem from "@/components/LeftImageListItem.vue";
// import TextOnlyListItem from "@/components/TextOnlyListItem";

export default {
    name: "EventModule",
    props: ["itemList"],
    data: function () {
        return {
            moduleName: "Events",
            selectedId: 1,
            itemListSections: [
                {
                    title: "Ongoing",
                    itemListGroups: [
                        {
                            title: "Relevant to you",
                            items: this.itemList.ongoing.filter(
                                (ongoing) => ongoing.relevant
                            ),
                        },
                        {
                            title: "Other",
                            items: this.itemList.ongoing.filter(
                                (ongoing) => !ongoing.relevant
                            ),
                        },
                    ],
                },
                {
                    title: "Upcoming events",
                    itemListGroups: [
                        {
                            title: "Relevant to you",
                            items: this.itemList.upcoming.filter(
                                (upcoming) => upcoming.relevant
                            ),
                        },
                        {
                            title: "Other",
                            items: this.itemList.upcoming.filter(
                                (upcoming) => !upcoming.relevant
                            ),
                        },
                    ],
                },
            ],
        };
    },
    components: { LeftImageListItem },
    computed: {},
    methods: {
        onClickSaveToLocalStorage(value) {
            if (localStorage.getItem(value) === null) {
                console.log(value);
            }

            window.localStorage.setItem(
                "favoriteIds",
                JSON.stringify([1, 2, 3])
            );
        },
        // onNewNote() {
        //     this.notes.push(this.message);
        //     this.message = "";
        //     this.saveToLocalStorage();
        // },
        // saveToLocalStorage() {
        //     const jsonNotes = JSON.stringify(this.notes);
        //     localStorage.setItem("notes", jsonNotes);
        // },
        // getFromLocalStorage() {
        //     const jsonNotes = localStorage.getItem("notes");
        //     this.notes = JSON.parse(jsonNotes);
        // },
        // updateNote() {
        //     this.notes[this.noteId] = this.editNote;
        //     this.modalVisible = false;
        //     this.saveToLocalStorage();
        // },
        // deleteAll() {
        //     this.notes = [];
        //     this.saveToLocalStorage();
        // },
    },
};
</script>

// Write all of your css below, just like what you would do normally.
<style lang="scss" scoped>
//Import needed css partials, in this case we needed the variables.
@import "@/assets/styles/_variables.scss";
</style>
