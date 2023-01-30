import { createStore } from "vuex";

export type User = {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: Array<string>;
  gender: "male" | "female";
  hair_color: "blond";
  height: string | number;
  homeworld: string;
  mass: string | number;
  name: string;
  skin_color: "fair";
  species: Array<string>;
  starships: Array<string>;
  url: string;
};

const store = createStore({
  state: {
    users: null as User[] | null,
    isLoading: false,
  },
  mutations: {
    setAllUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    async getAllUsers({ commit, state }) {
      try {
        state.isLoading = true;
        const response = await fetch("https://swapi.dev/api/people");
        const { results } = await response.json();
        commit("setAllUsers", results);
      } catch (e) {
        console.error(e);
      } finally {
        state.isLoading = false;
      }
    },
  },
});

export default store;
