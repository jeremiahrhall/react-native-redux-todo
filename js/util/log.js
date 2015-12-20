
import minilog from 'minilog';

minilog.enable();

minilog.suggest.clear().deny(/.*/, 'debug');

export default function(name) {
    return minilog(name || '');
}
