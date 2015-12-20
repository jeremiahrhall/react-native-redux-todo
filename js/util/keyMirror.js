
import _ from 'lodash';

export default function keyMirror(arr) {
    if (arr instanceof Array) {
        return _.reduce(arr, (result, arrItem) => {
            result[arrItem] = arrItem;
            return result;
        }, {});
    }

    return _.reduce(arr, (result, v, k) => {
        result[k] = k;
        return result;
    }, {});
}
