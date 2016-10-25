# Prehistorik 2 Browser Remake

## (Reloaded, refactored edition)

### Concept

Revival experiment of the original Titus 1993 DOS game in the browser with PhaserJS game engine.

- Version 1.0 / first repo: Canvas-based, full native implementation effort with vanilla physics engine written from scratch (doomed!) 
- Version 2.0 / second repo: PhaserJS + naive, make it work, spaghetti solution http://pixelhijack.github.io/
- Version 3.0 / current repo: PhaserJS + better separation + mixin behavioural patterns + events + soon: ES6, streams http://pixelhijack.herokuapp.com/

### Architectural considerations, plans, roadmap
- Object composition via Object.assign versus classical OOP
- Component based structure
- Reactive functional Flux-like flow, event-driven communication
- Minimal 3rd-party usage, trying to avoid Lodash / Underscore, ImmutableJS (deep clone polyfill?), Redux (PhaserJS Signals instead!)
- Later might add these, and base it on observables & streams (KefirJS, BaconJS, RX, MobX?)

### Level editing in Tiled
...description coming soon

### Screenshots
![New level edited in Tiled: Hall of Ages](./docs/screenshots/hall-of-ages.png?raw=true "New level edited in Tiled: Hall of Ages")
![New level edited in Tiled: Great Abyss](./docs/screenshots/great-abyss.png?raw=true "New level edited in Tiled: Great Abyss")
![New level edited in Tiled: Green Hell](./docs/screenshots/green-hell.png?raw=true "New level edited in Tiled: Green Hell")
![New level edited in Tiled: Green Hell 2](./docs/screenshots/green-hell2.png?raw=true "New level edited in Tiled: Green Hell 2")
![New level edited in Tiled: Downfall Rifts](./docs/screenshots/downfall-rifts.png?raw=true "New level edited in Tiled: Downfall Rifts")
![New level edited in Tiled: Rise of the Tide](./docs/screenshots/rise-of-the-tide.png?raw=true "New level edited in Tiled: Rise of the Tide")
![New level edited in Tiled: Stairway From Heaven](./docs/screenshots/stairway-from-heaven.png?raw=true "New level edited in Tiled: Stairway From Heaven")
![New level edited in Tiled: Stairway From Heaven 2](./docs/screenshots/stairway-from-heaven2.png?raw=true "New level edited in Tiled: Stairway From Heaven 2")


