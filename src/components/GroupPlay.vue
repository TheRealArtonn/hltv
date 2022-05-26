<template>
    <div class="module module__body--no-more">
        <h2 class="module__header">{{ moduleName }}</h2>
        <div class="module__body">
            <table class="body__table">
                <thead>
                    <tr>
                        <th>Header</th>
                        <th>Header</th>
                        <th>Header</th>
                        <th>Header</th>
                        <th>Header</th>
                        <th>Header</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "GroupPlay",
    props: ["value"],
    data: function () {
        return {
            moduleName: "Group play",
        };
    },
};
</script>

// Write all of your css below, just like what you would do normally.
<style lang="scss" scoped>
//Import needed css partials, in this case we needed the variables.
@import "@/assets/styles/_variables.scss";

.body__table {
    width: 100%;
    font-size: 1.2rem;
    color: $primary-font-color;
    // background-color: $primary-font-color;
    border-collapse: collapse;
    border-width: 1px;
    border-color: $element-border-color;
    border-style: solid;
}

.body__table tr:nth-child(even) {
    background-color: #f9f9f9;
}

.body__table th {
    height: 26px;
    border-width: 1px;
    border-color: $element-border-color;
    border-style: solid;
}

.body__table td {
    height: 45px;
    border-width: 1px;
    border-color: $element-border-color;
    border-style: solid;
}

.body__table thead {
    background-color: #f9f9f9;
}
</style>
