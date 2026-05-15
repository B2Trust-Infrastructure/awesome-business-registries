# Registry API Examples

Minimal TypeScript snippets for querying official government business registries directly — no SDK, no auth keys, just `fetch`.

These examples target the **free, no-auth** registries from the [main list](../README.md). Each file is self-contained, around 30 lines, and runnable with one command.

## Run

Requires Node.js 20.6+ (built-in `tsx` support via `--experimental-strip-types`) or [`tsx`](https://github.com/privatenumber/tsx).

```bash
# Run any example
npx tsx examples/norway-brrg.ts

# Or with native Node 20.6+
node --experimental-strip-types examples/norway-brrg.ts
```

## Examples

| File                  | Registry                        | Coverage         | Auth |
| --------------------- | ------------------------------- | ---------------- | ---- |
| `vies-eu.ts`          | VIES (EU VAT validation)        | 27 EU countries  | 🟢   |
| `gleif-global.ts`     | GLEIF (Legal Entity Identifier) | Global           | 🟢   |
| `norway-brrg.ts`      | Brønnøysundregistrene           | Norway (~1M)     | 🟢   |
| `finland-prh.ts`      | PRH (Patent and Registration)   | Finland (~600K)  | 🟢   |
| `czech-ares.ts`       | ARES                            | Czechia (~2.7M)  | 🟢   |
| `poland-krs.ts`       | KRS (court register)            | Poland (~632K)   | 🟢   |
| `poland-bialalista.ts`| Biała Lista (VAT taxpayers)     | Poland           | 🟢   |
| `sec-edgar-us.ts`     | SEC EDGAR                       | US public co.    | 🟢   |

## Notes

- All snippets use sample IDs (real companies). Replace with your own to query different entities.
- Endpoints, parameters, and response shapes were verified at the time of commit but may change. Check the main list for the official documentation link.
- SEC EDGAR enforces a `User-Agent` header policy — replace the placeholder email with your real contact info before deploying.
- No external dependencies. If you want type-safe response models, generate them from each API's OpenAPI spec where available.

## License

CC0 1.0 Universal — same as the parent list. See [LICENSE](../LICENSE).
