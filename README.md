# portfolio

Personal portfolio site. Retro computer rig with a keycap-styled nav.

## Run locally

No build step. Open `index.html` in a browser, or use the
VS Code **Live Server** extension for auto-reload on save.

## Files

- `index.html` — markup for the monitor, base unit, and keyboard
- `styles.css` — all styling
- `script.js` — nav panel switching

## How the sizing works

Every dimension derives from one variable, `--rig`, in `:root`:

```css
--rig: min(92vw, 140vh);
```

Each element is a decimal fraction of it (`--mon-w: calc(var(--rig) * 0.62)`),
so the whole machine scales as one object and proportions never drift.
To resize anything, change its fraction — not a pixel value.

## Palette

Eight tokens in `:root`. `--ink` is all line work and text,
`--keycap` is the case color, `--accent-deep` is the 3D depth lip.

## Layout

Desktop: keyboard left, computer right (flex `order`).
Below 760px: stacks, computer on top, keys in a row.
