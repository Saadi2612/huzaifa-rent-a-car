# Car photos

Drop real photos here using the **exact filenames below**. Nothing else needs to
change — until a file exists the site renders a styled placeholder slot, and the
moment you save a real image at the same path it switches to the real photo
automatically (`lib/photos.ts` checks the filesystem on the server).

| Filename           | Used for                          | Recommended size    |
| ------------------ | --------------------------------- | ------------------- |
| `hero.jpg`         | Big hero image                    | 1600 × 1200 (4:3)   |
| `garage.jpg`       | "Why us" service-yard image       | 1200 × 960 (5:4)    |
| `alto.jpg`         | Suzuki Alto VXL card              | 1200 × 750 (16:10)  |
| `cultus.jpg`       | Suzuki Cultus VXL card            | 1200 × 750 (16:10)  |
| `corolla.jpg`      | Toyota Corolla GLi card           | 1200 × 750 (16:10)  |
| `civic.jpg`        | Honda Civic Oriel card            | 1200 × 750 (16:10)  |
| `fortuner.jpg`     | Toyota Fortuner card              | 1200 × 750 (16:10)  |
| `revo.jpg`         | Toyota Hilux Revo card            | 1200 × 750 (16:10)  |
| `grand-cabin.jpg`  | Toyota Hiace Grand Cabin card     | 1200 × 750 (16:10)  |
| `audi-a6.jpg`      | Audi A6 card                      | 1200 × 750 (16:10)  |

## Shooting notes

- Shoot every car from the **same three-quarter front angle** so the grid reads
  as one set. Mismatched angles are the single fastest way to make a fleet grid
  look cheap.
- Plain background — a wall, a clean yard, an empty car park at golden hour.
- Keep the car centred with a little headroom; cards crop to 16:10.
- Compress to under ~300 KB each before committing (Squoosh, TinyJPG).

## Adding a new car

1. Add the photo here.
2. Add an entry to the `FLEET` array in `lib/site.ts` with a matching `image`
   path. That is the whole job — the grid, filters and WhatsApp links all read
   from that array.
