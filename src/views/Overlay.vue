<template>
  <v-container fluid>
    <v-dialog :value="true" max-width="600">
      <v-card>
        <v-card-text>
          <v-select :items="items" label="Standard"></v-select>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: ["foo", "bar"]
    };
  }
};
</script>
