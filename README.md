# Prehistorik 2 Browser Remake

## (Reloaded, refactored edition)

### Concept

Revival experiment of the original Titus 1993 DOS game in the browser with PhaserJS game engine.

Version 1.0 / first repo: Canvas-based, full native implementation effort with vanilla physics engine written from scratch (doomed!)
Version 2.0 / second repo: PhaserJS + naive, make it work, spaghetti solution
Version 3.0 / current repo: PhaserJS + better separation + mixin behavioural patterns + events + soon: ES6, streams

### Architectural considerations, plans, roadmap
- Object composition via Object.assign versus classical OOP
- Component based structure
- Reactive functional Flux-like flow, event-driven communication
- Minimal 3rd-party usage, trying to avoid Lodash / Underscore, ImmutableJS (deep clone polyfill?), Redux (PhaserJS Signals instead!)
- Later might add these, and base it on observables & streams (KefirJS, BaconJS, RX, MobX?)


### Screenshots
![New level edited in Tiled: Hall of Ages](./docs/screenshots/hall-of-ages.png?raw=true "New level edited in Tiled: Hall of Ages")


