import { store } from "quasar/wrappers";
import { createStore, createLogger } from "vuex";

import webContents from "./webcontents";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    plugins: process.env.DEBUGGING
      ? [
          createLogger({
            collapsed: false,
            filter(mutation, stateBefore, stateAfter) {
              return mutation.type !== "aBlocklistedMutation";
            },
            actionFilter(action, state) {
              return action.type !== "aBlocklistedAction";
            },
            transformer(state) {
              return state.subTree;
            },
            mutationTransformer(mutation) {
              return mutation.type;
            },
            actionTransformer(action) {
              return action.type;
            },
            logActions: true,
            logMutations: true,
            logger: console,
          }),
        ]
      : [],
    modules: {
      webContents,
    },
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
