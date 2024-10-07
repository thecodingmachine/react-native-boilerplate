import {instance} from "@/services/instance";
import {userSchema} from "@/types/schemas/user";

export const UserServices = {
  fetchOne: async (id: number) => {
    const response = await instance.get(`users/${id}`).json();
    return userSchema.parse(response);
  }
}
