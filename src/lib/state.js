import Rx from 'rx';
import get from 'lodash.get';
import set from 'lodash.set';

const setter = ({path, changes}, curState) => set(curState, path, changes);

const concat = (...args) => args.join(',').split(',').filter(Boolean)
;
class ReactiveCursor extends Rx.Subject {
	constructor(path, subject, cursor) {
		super();
		this.path = path;
		this.root = subject.root || subject;
		this.cursor = get(subject.cursor || cursor, path);
		this.map(({path, changes}) => ({
				path: concat(this.path, path),
				changes
		})).subscribe(subject);
	}

	get(path) {
		return new ReactiveCursor(path, this);
	}

	update(updater) {
		this.set(updater(this.cursor));
	}

	set(changes) {
		this.cursor = changes;
		this.onNext({changes});
	}
}

export default class ReactiveState extends Rx.BehaviorSubject {

	constructor(state) {
		super(state);
		this.updater = new Rx.Subject();
		this.updater.withLatestFrom(this, setter).subscribe(this);
	}

	get(path) {
		return new ReactiveCursor(path, this.updater, this.getValue());
	}
}
