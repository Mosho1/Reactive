import Rx from 'rx';
import ReactiveState from './state.js';

// const log = ::console.log;
const log = () => null;

export default class Flux {

  constructor(state) {
    this.dispatcher = new rx.Subject();

    // BehaviorSuject constructed with initial state
    this.state = new ReactiveState(state);
    this.state.subscribe(s => (window._state = s) && log('New state:', s.toJS()));
  }

  dispose() {
    this.dispatcher.dispose();
    this.state.dispose();
  }

  addStore(store: Subject, initialState: Object = {}) {
    // the name of the feature in state is either the specified `feature` property of the store, or the store function's name
    const feature = store.feature || store.name;

    let p;
    this.dispatcher
      .do(() => p = performance.now())
      .withLatestFrom(this.state, ({action, payload}, state) => [state[feature], action, payload])
      .flatMapObserver(store)
      .startWith(initialState)
      .map(next => this.state.getValue().mergeDeep({[feature]: next}))
      .do(() => log('State update time:', performance.now() - p))
      .subscribe(this.state);

    return this;
  }


  addActions(actions: rx.Subject) {
    actions.subscribe(this.dispatcher);
    return this;
  }

}


