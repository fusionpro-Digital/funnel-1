# Fonts for the generated share image

`src/app/opengraph-image.tsx` renders the Open Graph image with Satori, which
needs raw TrueType files (the `next/font` pipeline only exposes WOFF2 to the
browser). These static instances were downloaded from Google Fonts.

| File | Family | Copyright |
|---|---|---|
| `Geist-Bold.ttf` | Geist 700 | Copyright 2023 Vercel, in collaboration with basement.studio |
| `PlayfairDisplay-SemiBoldItalic.ttf` | Playfair Display 600 Italic | Copyright 2017 The Playfair Display Project Authors |

Both are licensed under the SIL Open Font License 1.1, reproduced in
`OFL.txt` in this folder.
