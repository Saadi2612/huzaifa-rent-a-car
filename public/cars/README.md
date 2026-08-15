# Car photos

Each car in the fleet has its own folder under `public/cars/`. Inside a folder,
the file named `main.jpeg` (or `.jpg`/`.png`) is the one shown on the fleet
card; any extra numbered files (`2.jpeg`, `3.jpeg`, …) are spares, not
currently shown anywhere on the site.

`lib/photos.ts` checks the filesystem on the server, so if a `main` file is
ever missing the card falls back to a styled placeholder slot automatically —
no broken image icons, no 404s.

## Adding a new car

1. Make a folder here named after the car, e.g. `civic-2022-black/`.
2. Drop the photo in as `main.jpeg`.
3. Add an entry to the `FLEET` array in `lib/site.ts` with a matching `image`
   path (`/cars/<folder>/main.jpeg`). Set `year` and `color`; use `"–"` for
   `year` if the unit's model year isn't known. That's the whole job — the
   grid, filters and WhatsApp links all read from that array.

## Shooting notes

- Shoot every car from the **same three-quarter front angle** so the grid reads
  as one set. Mismatched angles are the single fastest way to make a fleet grid
  look cheap.
- Plain background — a wall, a clean yard, an empty car park at golden hour.
- Keep the car centred with a little headroom; cards crop to 16:10.
- Compress to under ~300 KB each before committing (Squoosh, TinyJPG).
