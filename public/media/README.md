# Media assets

The Figma export was flat screenshots, so no source images came with the design.
Every image slot renders a tinted placeholder until a real file is dropped here.

To swap one in:

1. Save the file in this folder, e.g. `public/media/radical-toast.jpg`
2. Open `src/content/site.ts` and set that item's `src` to `/media/radical-toast.jpg`

## What each slot expects

| Where | Field | Aspect | Suggested size |
|---|---|---|---|
| Hero marquee | `galleryRowOne` / `galleryRowTwo` `.src` | 4:5 portrait | 650 x 812 |
| Client logos | `clientLogos[].src` | free, on white | max height 46px @2x |
| Service cards | `services.items[].src` | 3:4 portrait | 500 x 666 |
| Video testimonials | `videoTestimonials.items[].poster` | 9:16 portrait | 540 x 960 |
| Video testimonials | `videoTestimonials.items[].videoSrc` | 9:16 portrait | mp4 (h.264) |
| Written testimonials | `testimonials[].avatar` | 1:1 | 80 x 80 |

`videoSrc` is the one that changes behaviour rather than just appearance: while it
is `null` the play glyph is decorative, and once it is set the card renders a real
`<video>` with a working play/pause button.
