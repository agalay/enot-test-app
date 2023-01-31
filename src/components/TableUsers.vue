<script setup lang="ts">
import type { User } from "@/store";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import useGetID from "@/composables/useGetID";

const props = defineProps<{
  onlyFavorites?: boolean;
}>();

const favoriteUsers = ref(
  new Set<number>(JSON.parse(localStorage.getItem("favorites")) || [])
);
console.log(1)
const store = useStore();
const users = computed<User[]>(() => store.state.users);
const isLoading = computed<boolean>(() => store.state.isLoading);

onMounted(() => {
  if (!users.value) store.dispatch("getAllUsers");
});

const addToFavorites = (id: number): void => {
  favoriteUsers.value.add(id);
  localStorage.setItem("favorites", JSON.stringify([...favoriteUsers.value]));
};

const removeInFavorites = (id: number): void => {
  favoriteUsers.value.delete(id);
  localStorage.setItem("favorites", JSON.stringify([...favoriteUsers.value]));
};

const items = computed(() => {
  if (props.onlyFavorites) {
    return users.value.filter((user) =>
      favoriteUsers.value.has(useGetID(user.url))
    );
  }
  return users.value;
});
</script>

<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <p v-else-if="!users?.length">Nothing found!</p>
    <table v-else>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in items" :key="user.url">
          <td>
            <router-link
              :to="{ name: 'peoples.show', params: { id: useGetID(user.url) } }"
            >
              {{ user.name }}
            </router-link>
          </td>
          <td>{{ user.height }}</td>
          <td>{{ user.mass }}</td>
          <td>{{ user.hair_color }}</td>
          <td>
            <button
              v-if="favoriteUsers.has(useGetID(user.url))"
              @click="removeInFavorites(useGetID(user.url))"
              class="red"
            >
              Remove favorite
            </button>
            <button v-else @click="addToFavorites(useGetID(user.url))">
              Add favorite
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
