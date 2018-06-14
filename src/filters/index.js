import Vue from 'vue';

import stringReplace from './stringReplace.filter';

Vue.filter('replace', stringReplace);

export default Vue;
