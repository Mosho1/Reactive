import React from 'react';
import Rx from 'rx';

export default function ReactiveDecorator(BaseComponent) {

	const observableTypesKeys = Object.keys(BaseComponent.observableTypes);

	return class ReactiveComponent extends React.Component {

		constructor(props) {
			super(props);
			const observables = observableTypesKeys.reduce((obj, k) => (obj[k] = props[k], obj), {});

			this.WrappedComponent = class WrappedBaseComponent extends BaseComponent {
				constructor(_props) {
					super(_props);
					this.observables = observables;
				}
			};

			observableTypesKeys.forEach(k => delete props[k]);

			Rx.Observable.merge(props).subscribe(::this.setState);
		}

		render() {
			return <this.WrappedComponent {...this.state}/>;
		}
	};
}
