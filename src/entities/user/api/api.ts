import type { User } from "../model/types";
import { api } from "shared/api";

export const fetchUsers = async (
  names: string[],
  ids: string[]
): Promise<User[]> => {
  return await api.get("users", {
    params: {
      id: ids,
      username: names,
    },
    paramsSerializer: {
      indexes: null,
    },
  });
};
