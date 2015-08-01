import State from './lib/state.js';

window.state = new State({a: {b: {c: 1}}});
window.state.subscribe((s) => console.log('state:', s));
window.cursor = window.state.get('a');
window.deepCursor = window.cursor.get('b');
// window.deeperCursor = window.deepCursor.get('c');
window.cursor.set({b: {c: 6}, d: 100});
window.deepCursor.set({c: 10});
window.deepCursor.update(x => ({c: x.c * 10}));

// window.cursor.subscribe((s) => console.log('cursor',s));
// window.deepCursor.subscribe((s) => console.log('deepcursor',s));













