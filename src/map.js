export default {
  blue: {
    stations: [{x: 140, y: 100}, {x: 200, y: 200}, {x: 200, y: 300, sharedWith: 'red'}, {x: 200, y: 400}, {x: 200, y: 500}, {x: 200, y: 550}],
    current: 0,
    next: 1,
    dir: 0,
    count: 100,
  },
  green: {
    stations: [ {x: 450, y: 50},{x: 450, y: 100}, {x: 450, y: 180}, {x: 450, y: 260, sharedWith: 'red'}, {x: 450, y: 320}, {x: 450, y: 380}],
    current: 0,
    next: 1,
    dir: 0,
    count: 20,
  },
  red: {
    stations: [{x: 200, y: 300, sharedWith: 'blue'}, {x: 300, y: 260}, {x: 350, y: 260}, {x: 450, y: 260, sharedWith: 'green'}, {x: 550, y: 260},{x: 650, y: 360}, {x: 700, y: 400}],
    current: 0,
    next: 1,
    dir: 0,
    count: 300,
  }
};