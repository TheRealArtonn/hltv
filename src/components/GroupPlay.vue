<template>
    <div class="module">
        <h2 class="module__header">{{ moduleName }}</h2>
        <div class="module__body module__body--no-more">
            <table class="body__table">
                <colgroup>
                    <col span="1" class="main-col" />
                    <col span="1" class="secondary-col" />
                    <col span="1" class="secondary-col" />
                    <col span="1" class="secondary-col" />
                    <col span="1" class="secondary-col" />
                    <col span="1" class="secondary-col" />
                </colgroup>

                <thead>
                    <tr>
                        <th class="td--align-left">Group Stage</th>
                        <th>M</th>
                        <th>RW</th>
                        <th>RL</th>
                        <th>RD</th>
                        <th>Record</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="td--align-left td--bold td--icon">
                            <img
                                class="img"
                                src="@/assets/img/teams/team-1.jpg"
                                alt=""
                            />
                            Faze
                        </td>
                        <td>3</td>
                        <td>81</td>
                        <td>71</td>
                        <td>32</td>
                        <td>3 - 0</td>
                    </tr>
                    <tr>
                        <td class="td--align-left td--bold td--icon">
                            <img
                                class="img"
                                src="@/assets/img/teams/team-2.jpg"
                                alt=""
                            />
                            Na'vi
                        </td>
                        <td>4</td>
                        <td>81</td>
                        <td>75</td>
                        <td>38</td>
                        <td>3 - 1</td>
                    </tr>
                    <tr>
                        <td class="td--align-left td--bold td--icon">
                            <img
                                class="img"
                                src="@/assets/img/teams/team-3.jpg"
                                alt=""
                            />
                            Ence
                        </td>
                        <td>4</td>
                        <td>81</td>
                        <td>75</td>
                        <td>38</td>
                        <td>3 - 1</td>
                    </tr>
                    <tr>
                        <td class="td--align-left td--bold td--icon">
                            <img
                                class="img"
                                src="@/assets/img/teams/team-4.jpg"
                                alt=""
                            />
                            G2
                        </td>
                        <td>4</td>
                        <td>81</td>
                        <td>75</td>
                        <td>38</td>
                        <td>3 - 1</td>
                    </tr>
                    <tr>
                        <td class="td--align-left td--bold td--icon">
                            <img
                                class="img"
                                src="@/assets/img/teams/team-5.jpg"
                                alt=""
                            />
                            Vitality
                        </td>
                        <td>4</td>
                        <td>81</td>
                        <td>75</td>
                        <td>38</td>
                        <td>3 - 1</td>
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

.main-col {
    text-align: right;
}

.secondary-col {
    width: 6%;
}

.body__table {
    width: 100%;
    font-size: 1.2rem;
    color: $primary-font-color;
    // background-color: $primary-font-color;
    border-collapse: collapse;
    border-bottom: 1px solid $element-border-color;
}

.body__table tr:nth-child(even) {
    background-color: #f9f9f9;
}

.body__table th {
    height: 26px;
    border-bottom: 1px solid $element-border-color;
}

.body__table td {
    height: 45px;
    text-align: center;
    border-width: 1px;
    border-color: $element-border-color;
    border-style: solid;
}

.td--align-left,
td.td--align-left {
    text-align: left;
    padding-left: 15px;
}

.td--bold,
td.td--bold {
    font-size: 1.6rem;
    font-weight: 600;
}

.body__table thead {
    background-color: #f9f9f9;
}

.td--icon {
    display: flex;
    align-items: center;
}

.img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    object-fit: contain;
    margin-right: 10px;
}
</style>
