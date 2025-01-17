import { ref } from "vue";
import { defineStore } from "pinia";
import type { User } from "./types";

import { fetchUsers, fetchUserById } from "../api";

export const useUserStore = defineStore("user", () => {
  const users = ref<User[]>([]);
  const selectedUser = ref<User | null>(null);

  const getUserById = async (userId: string): Promise<void> => {
    const userResponse = await fetchUserById(userId);
    selectedUser.value = userResponse || null;
  };

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

  const clearUsers = (): void => {
    users.value = [];
  };

  const clearSelectedUser = (): void => {
    selectedUser.value = null;
  };

  const setSelectedUser = (userId: string): void => {
    const candidate = users.value.find(({ id }) => id === userId);
    if (!candidate) {
      selectedUser.value = null;
      return;
    }

    selectedUser.value = candidate;
  };

  return {
    users,
    selectedUser,
    getUsers,
    getUserById,
    clearSelectedUser,
    setSelectedUser,
    clearUsers,
  };
});
