import { boot } from "quasar/wrappers";
import * as moment from "moment";

export default boot(({ app }) => {
  app.config.globalProperties.$moment = moment;
});

export { moment };
