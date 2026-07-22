# poly-slide

> A 2D flat-design arcade game built with Phaser.js. Dodge falling obstacles and grab power-ups to survive.

PolySlide is a fast-paced survival game where you control a player at the bottom of the screen, dodging falling shapes (pentagons, hexagons, heptagons, octagons, and circles) while collecting power-ups. The longer you survive, the faster things get.

![Screenshots](https://i.imgur.com/4Lsysx4.png)

## Features

- **Touch/mouse controls** — Tap left or right side of the screen to move
- **Progressive difficulty** — Speed and spawn rate increase as your score grows
- **Power-ups** — Collect items for temporary advantages:

| Power-up | Effect |
| --- | --- |
| Slow-motion (Watch) | Everything moves at half speed for 10 seconds |
| Shield | Protects you from one collision |

- **Pause menu** — Pause and resume at any time
- **Enemy variety** — Different shapes with unique rotation speeds as you progress

## Prerequisites

- [Node.js](https://nodejs.org/) and npm

## Installation

```bash
npm install http-server -g
http-server poly-slide/
```

Open [http://localhost:8080](http://localhost:8080) in your browser. Use Chrome Dev Tools device mode for the smartphone preview.

## Usage

1. Open the game in your browser
2. Tap/click **Start** on the main menu
3. Tap the left or right side of the screen to move your player
4. Avoid enemies, collect power-ups, and survive as long as possible

## Acknowledgments

- Thanks [Masy](https://github.com/masy) for the textures & game concept

## License (MIT)

Copyright © 2017 [navopw](https://github.com/navopw) & [Masy](https://github.com/masy)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
