import { ref } from "vue";
import { defineStore } from "pinia";
import type { User } from "./types";

import { fetchUsers } from "../api";

export const useUserStore = defineStore("user", () => {
  const users = ref<User[]>([]);

  const getUsers = async (search: string): Promise<void> => {
    const isIds: boolean = search
      .split(",")
      .every((id) => Number.isInteger(+id));

    const names: string[] = [];
    const ids: string[] = [];

    if (isIds) {
      ids.push(...search.split(",").map((name) => name.trim()));
    } else {
      names.push(...search.split(",").map((name) => name.trim()));
    }

    const usersResponse: User[] = await fetchUsers(names, ids);
    users.value = usersResponse;
  };

  return {
    users,
    getUsers,
  };
});
