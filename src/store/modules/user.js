import { getToken, setToken } from "../../utils/auth";
import { login } from "@/api/user";

const getDefaultState = () => {
  return {
    token: getToken(),
    name: "",
    avator: ""
  };
};
const state = getDefaultState();

const mutations = {
  RESET_STATE: state => {
    Object.assign(state, getDefaultState());
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  }
};

const actions = {
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise(() => {
      login({
        username: username.trim(),
        password: password
      }).then(res => {
        console.log(res);
        const { data } = res;
        commit("SET_TOKEN", data.token);
        setToken(data.token);
      });
    });
  }
};

export default {
  namespace: true,
  state,
  mutations,
  actions
};
