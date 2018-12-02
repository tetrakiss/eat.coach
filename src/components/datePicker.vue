

<template>

<el-date-picker v-model="date" type="date" format="dd-MM-yyyy" placeholder="Выберите дату">
</el-date-picker>

</template>

<script>

export default {
    data() {
        return {

            date: '',

        };
    }
};

</script>
