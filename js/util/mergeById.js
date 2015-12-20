
import _ from 'lodash';

export default function(target, source) {
    return _.values(_.reduce(source, (result, sourceVal) => {
        if (result[sourceVal.id]) {
            result[sourceVal.id] = sourceVal;
        }
        return result;
    }, _.indexBy(target, 'id')));
}
