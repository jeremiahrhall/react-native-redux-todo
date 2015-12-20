import Log from '../util/log';

const log = Log('DispatchLogger');

export default function DispatchLogger({ dispatch }) {
    return (next) => {
        return (action) => {
            log.debug('Action dispatched: {}', action);
            return next(action);
        };
    };
}
