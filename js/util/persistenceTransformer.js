import transit from 'transit-immutable-js';
import Immutable from 'immutable';

export default {

    in(state) {
        if (state && typeof state === 'object') {
            if (state.toJS) {
                return transit.toJSON(state.toJS());
            }

            if (state.toJSON) {
                return transit.toJSON(state.toJSON());
            }

            return transit.toJSON(state);
        }

        return state;
    },

    out(raw) {
        if (typeof raw === 'string') {
            return Immutable.fromJS(transit.fromJSON(raw));
        }

        return raw;
    }

};
