# Alliance 2072: Your freedom. Your future.

## The idea

One party, with a recognisable belief: people should have the freedom and confidence to build their own lives. Enterprise, ownership, liberty, responsible public finances and national security are different expressions of that belief. This is a fictional Caprican campaign, not a commentary on a real election.

## Voice

Start with the person, then the conviction, then the policy. Prefer a home, an appointment, a workshop or a salary to an abstract administrative promise. Be confident without promising that everything is easy. No invented testimonials, private memories or guarantees of a grade. The signed letter is proposed campaign copy in the requested author's voice.

Use straightforward sentences. Avoid long dashes, slogans about technology, forced wordplay and party coalition language. Keep technical commitments available in the practical sections and the manifesto, rather than making every page read like a Treasury paper.

The current manifesto is the policy source of truth: `scripts/manifesto_2072_content.py`, typeset by `scripts/build_manifesto_2072.py`. The LCA entered opposition in 2068 and seeks a new mandate in 2072 for a programme through 2076. Do not present the 2068 debt outturn or proposed 2072 goals as verified current results. New fiscal commitments start from an independent opening audit. The 2068 manifesto remains an archive.

CAPROC is an informal ideological label, not the name of the government's parties. Do not use CAPROC or its expanded name in the manifesto; refer to the government and its policies directly. Government intelligence and labour bill descriptions are user-supplied campaign context, not independently verified legal texts. Distinguish proposed powers from enacted provisions. The new programme responds through liberty restoration, voluntary workplace representation, pooled leave insurance, competition, public integrity and CU reform from within. It protects accrued rights and explains funding conditions; it is not a fully costed budget.

## Visual identity

Montserrat connects the website to the manifesto. Bodoni Moda provides a distinctive editorial display voice. The shared palette is warm white, deep purple, quiet lilac and charcoal. Use real photographs with deliberate crops; keep the user supplied city video, event images, skyline, parchment and signature. Do not add decorative scanlines, glowing interfaces or interchangeable rounded cards.

Page variation should serve the subject: a welcoming shop for enterprise, a clear patient centred opening for care, open seas for defence, and a signed letter for the mission. All sections use the same navigation, typography and final manifesto invitation.

## Working references

- [Ogilvy: Real Beauty Sketches](https://www.ogilvy.com/work/real-beauty-sketches): organise the communication around one recognisable human insight.
- [Order: Hillary for America](https://order.design/project/hillary-for-america): a disciplined, adaptable identity can coordinate many campaign formats. This is a design reference only, not a policy reference.
- [Monotype: Gotham and the Obama Foundation](https://www.monotype.com/resources/case-studies/gotham-typeface-evolution-obama-foundation): typography can be an enduring identity asset.

Photography already cleared for the manifesto is documented in `assets/manifesto-2068/sources.json`. `belief-world.jpg` uses Andy Li's port photograph; `belief-discovery.jpg` uses Louis Reed's laboratory photograph. These are illustrative settings, not claims of endorsement. Font licenses are stored beside the self hosted fonts in `public/fonts/`.

## Functional honesty

The site has no registration backend. Event cards therefore provide real calendar downloads, and the page says registration details will follow. It must not collect details and pretend a place has been reserved. Contact remains an explicit placeholder. The video starts muted, supports pause and respects reduced motion.

## Checks before publishing

Run the source build. Export against a running development server. Run `node --test tests/campaign-2072.test.mjs`. Inspect desktop and narrow mobile layouts, navigation and the manifesto download, and check the static export with its `/mr2072/` base path. For PDF changes, run `scripts/check_manifesto_2072.py` and visually inspect rendered pages. Keep unrelated work out of the commit.
