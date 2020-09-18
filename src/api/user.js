import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/awesome-admin-demo/user/login",
    method: "post",
    data
  });
}
