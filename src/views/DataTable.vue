<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-data-table
                :headers="headers"
                :items="users"
                show-expand
        >
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Username",
          sortable: false,
          value: "username",
        },
        { text: "", value: "data-table-expand" },
      ],
      users: [
        {
          username: "Tester",
        },
      ]
    };
  },
};
</script>
