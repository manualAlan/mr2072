# Alliance 2072: Your freedom. Your future.

Campaign website for the Alliance in the fictional Republic of Caprica. A single, confident identity built around enterprise, personal freedom and opportunity.

## Live site

[View the LCA campaign](https://manualalan.github.io/mr2072/)

## Local development

```bash
npm install
npm run dev
```

The application is built with React and vinext. A Pages-safe static edition is generated into `docs/` with:

```bash
npm run export:pages
node --test tests/campaign-2072.test.mjs
```

Keep the development server running on port 3000 while exporting. GitHub Pages serves `main:/docs` at `/mr2072/`.

Campaign portraits and the Alliance logo were supplied for this project. Supporting photography and fonts are stored locally. See [CAMPAIGN_DIRECTION.md](CAMPAIGN_DIRECTION.md) for the voice, design references and asset notes. Event calendar downloads work without a backend; event registration and contact are not yet available.

The current 32-page manifesto is generated from `scripts/manifesto_2072_content.py` by `scripts/build_manifesto_2072.py`; validate it with `scripts/check_manifesto_2072.py` and rendered-page review. It covers a return to government after four years in opposition and a programme through 2076. The website download is `public/manifesto/caprica-your-freedom-your-future-2072.pdf`. Keep the 2068 edition as an archive.
