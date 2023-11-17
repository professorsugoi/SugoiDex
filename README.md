# SugoiDex

![screenshot](public/screenshot.png '/gallery[page]')

## Opting out of pre-rendering in hybrid mode [x](https://docs.astro.build/en/guides/server-side-rendering/#opting-out-of-pre-rendering-in-hybrid-mode)

For a mostly static site configured as output: hybrid, add `export const prerender = false` to any files that should be server-rendered on demand

---

- [x] api working yipee / basic setup
- [x] pagination
- [ ] filters
- [ ] basic styling
- [ ] webhook to trigger build on sheet edit
- [ ] host this bad boye
- [ ] look into https://humaan.com/modaal/

## Resources

- [Astro](https://astro.build/) - Framework
- Google Sheets - CMS/DB (maybe one day we'll use the 'serious' cms's.. but not today)
- Inspired by [Charadex](https://github.com/cheeriko/charadex)! (Also I used their sheets template)
- [sheet.spacet.me](https://github.com/dtinth/sheet.spacet.me) - API for turning your google sheets into JSON
- [Astro Headless UI](https://github.com/BryceRussell/astro-headless-ui) - pagination component
