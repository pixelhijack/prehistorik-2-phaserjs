# Prehistorik 2 Browser Remake

## (Reloaded, refactored edition)

### Concept

Revival experiment of the original Titus 1993 DOS game in the browser with PhaserJS game engine, as an homage to the original creators (Eric Zmiro).

- Version 1.0 / first repo: Canvas-based, full native implementation effort with vanilla physics engine written from scratch (doomed!) 
- Version 2.0 / second repo: PhaserJS + naive, make it work, spaghetti solution http://pixelhijack.github.io/
- Version 3.0 / current repo: PhaserJS + better separation + mixin behavioural patterns + events + soon: ES6, streams http://pixelhijack.herokuapp.com/

### Architectural considerations, plans, roadmap
- Object composition via Object.assign versus classical OOP
- Component based structure
- Reactive functional Flux-like flow, event-driven communication
- Minimal 3rd-party usage, trying to avoid Lodash / Underscore, ImmutableJS (deep clone polyfill?), Redux (PhaserJS Signals instead!)
- Later might add these, and base it on observables & streams (KefirJS, BaconJS, RX, MobX?)

### Level editing with Tiled & Shoebox

Original assets (level maps, tilesets and spritesheets) found on a russian forum page.

![Original assets: spritesheet](./resources/showcase/pre2atlas.png?raw=true "Original assets: spritesheet")

![Original assets: Level 1 tileset](./resources/showcase/tileset1.png?raw=true "Original assets: Level 1 tileset")

As a first attempt, I tried to create levels in Tiled from the tilesets but fitting 16x16 pixel tiles together was a neverending, exhausting quest. 

![Original Level 1 Shoebox split, Tiled edited](./resources/showcase/original-level-1.png?raw=true "Original Level 1 Shoebox split, Tiled edited")

With Shoebox new horizonts opened: splitting the level maps into tilesets made it possible not only to copy and paste complete pieces of levels, but combine them in ways not used before. 
I removed the helper lines with Photoshop, and also combined different level maps to get joint tilemaps which made possible to create levels from mixed assets (like original Prehistorik 2 level 1 + level 5 elements combined).

![Original Level 1 parts new arrange](./resources/showcase/original-level-1-cuts.png?raw=true "Original Level 1 parts new arrange")

![Combined level parts editing in Tiled](./resources/showcase/combined-levelmap.png?raw=true "Combined level parts editing in Tiled")

![Mixed level parts editing in Tiled split in Shoebox](./resources/showcase/mixed-level-parts.png?raw=true "Mixed level parts editing in Tiled split in Shoebox")

![Mixed level parts editing in Tiled](./resources/showcase/mixed-level-parts2.png?raw=true "Mixed level parts editing in Tiled")

This is how brand new levels are created. 

### Screenshots of new levels
![New level edited in Tiled: Hall of Ages](./resources/screenshots/hall-of-ages.png?raw=true "New level edited in Tiled: Hall of Ages")
![New level edited in Tiled: Great Abyss](./resources/screenshots/great-abyss.png?raw=true "New level edited in Tiled: Great Abyss")
![New level edited in Tiled: Green Hell](./resources/screenshots/green-hell.png?raw=true "New level edited in Tiled: Green Hell")
![New level edited in Tiled: Green Hell 2](./resources/screenshots/green-hell2.png?raw=true "New level edited in Tiled: Green Hell 2")
![New level edited in Tiled: Downfall Rifts](./resources/screenshots/downfall-rifts.png?raw=true "New level edited in Tiled: Downfall Rifts")
![New level edited in Tiled: Rise of the Tide](./resources/screenshots/rise-of-the-tide.png?raw=true "New level edited in Tiled: Rise of the Tide")
![New level edited in Tiled: Stairway From Heaven](./resources/screenshots/stairway-from-heaven.png?raw=true "New level edited in Tiled: Stairway From Heaven")
![New level edited in Tiled: Stairway From Heaven 2](./resources/screenshots/stairway-from-heaven2.png?raw=true "New level edited in Tiled: Stairway From Heaven 2")


