<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import type { User } from "@/store";
import useGetID from "@/composables/useGetID";

const {
  params: { id },
} = useRoute();
const router = useRouter();

const store = useStore();
const users = computed<User[]>(() => store.state.users);
const isLoading = computed<boolean>(() => store.state.isLoading);
let currentUser = ref<User | null>(null);

const favoriteUsers = ref(
  new Set<number>(JSON.parse(localStorage.getItem("favorites")) || [])
);

onMounted(async () => {
  if (!users.value) await store.dispatch("getAllUsers");
  const userFind = users.value.find((item) => useGetID(item.url) === +id);
  if (userFind) {
    currentUser.value = userFind;
  } else {
    await router.push({ name: "404" });
  }
});

const addToFavorites = (id: number): void => {
  favoriteUsers.value.add(id);
  localStorage.setItem("favorites", JSON.stringify([...favoriteUsers.value]));
};
</script>

<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <table>
        <tr v-if="currentUser && !favoriteUsers.has(useGetID(currentUser.url))">
          <td colspan="2">
            <button @click="addToFavorites(useGetID(currentUser.url))">
              Add favorite
            </button>
          </td>
        </tr>
        <tr v-for="(value, key) in currentUser" :key="key">
          <th>
            {{ key.replace("_", " ") }}
          </th>
          <td>
            {{ value }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
table th {
  text-transform: capitalize;
  width: 20%;
}
</style>
