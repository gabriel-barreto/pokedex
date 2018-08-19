import Vue from "vue";

import stringReplace from "./stringReplace.filter";
import colorsType from "./colorsTypes.filter";

Vue.filter("replace", stringReplace);
Vue.filter("typeColor", colorsType);

export default Vue;
