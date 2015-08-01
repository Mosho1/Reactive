import memoize from 'lodash.memoize';

export default function memoizeDecorator(target, key, descriptor) {
	return Object.assign(descriptor, {value: memoize(descriptor.value)});
}
