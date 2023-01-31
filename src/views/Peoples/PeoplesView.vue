<script setup lang="ts">
import TableUsers from "@/components/TableUsers.vue";
import { reactive, watch } from "vue";
import type { User } from "@/store";
import useGetID from "@/composables/useGetID";


const debounce = (
  fn: { apply: (arg0: any, arg1: IArguments) => void },
  ms: number
) => {
  let timeout: number;
  return function () {
    const fnCall = () => {
      fn.apply(this, arguments);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
};

const searchState = reactive<{
  isLoading: boolean;
  field: null | string;
  items: null | User[];
  fetch: () => void;
}>({
  isLoading: false,
  field: null,
  items: null,
  fetch: debounce(async () => {
    try {
      searchState.items = null;
      searchState.isLoading = true;
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${searchState.field}`
      );
      const { results } = await response.json();
      searchState.items = results;
    } catch (e) {
      console.error("API error", e);
    } finally {
      searchState.isLoading = false;
    }
  }, 300),
});

watch(
  () => searchState.field,
  (val) => {
    if (val) {
      searchState.fetch();
    } else {
      searchState.items = null;
    }
  }
);
</script>

<template>
  <div class="search-box">
    <input type="text" v-model="searchState.field" placeholder="Search..." />
    <div v-if="searchState.isLoading || searchState.items" class="search-box__section">
      <p v-if="searchState.isLoading">Loading...</p>
      <div v-if="searchState.items">
        <ul v-if="searchState.items?.length">
          <li v-for="item in searchState.items" :key="item.url">
            <router-link
              :to="{ name: 'peoples.show', params: { id: useGetID(item.url) } }"
            >
              <h5>{{ item.name }}</h5>
            </router-link>
          </li>
        </ul>
        <p v-else>
          Nothing found!
        </p>
      </div>
    </div>
  </div>
  <TableUsers />
</template>

<style scoped>
.search-box {
  width: 400px;
  margin: 0 auto 20px auto;
}
.search-box input {
  padding: 10px 20px;
  margin-bottom: 5px;
  width: 100%;
}

.search-box__section {
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  padding: 10px;
}

.search-box__section ul {
  list-style: none;
  padding: 0;
}

.search-box li {
  padding: 10px;
  text-align: left;
  font-size: 16px;
}

.search-box li:not(:last-child) {
  border-bottom: 1px solid #eee;
}
</style>
