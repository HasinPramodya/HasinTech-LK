import apiClient from "../utils/api-client";

export function getSuggesstionApi(search) {
  return apiClient.get(`/products/suggestion?search=${search}`);
}