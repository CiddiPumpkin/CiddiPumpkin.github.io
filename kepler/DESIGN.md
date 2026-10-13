# Kepler website

## Direction

Quiet editorial layout for a small independent app studio. Warm paper, graphite type, fine dividing lines, a lilac Plander showcase, and two muted puzzle illustrations. The orbital symbol is an original SVG drawing connecting the Kepler name with the future Cosmos series. No external fonts, frameworks, cookies, or analytics are loaded by this page. A small local script handles Korean/English text and remembers only the chosen language in browser localStorage.

The opening statement establishes the studio; the first product is demonstrated by a real screen; future releases are explicitly marked; studio and support information close the page. This order can grow without redesigning the whole site.

## References and transformation

These are references for principles, not copied templates or assets:

- [Linear — Behind the latest design refresh](https://linear.app/now/behind-the-latest-design-refresh): quiet secondary information and clear attention hierarchy. Applied to release labels and metadata, without copying its product or dark interface.
- [Things](https://culturedcode.com/things/): product screenshots as evidence rather than decoration. Applied with an actual Plander screenshot in a distinct lilac stage.
- [Teenage Engineering](https://teenage.engineering/): restrained technical labels and confident product typography. Applied as small uppercase catalog labels around a warmer editorial composition.
- [Dribbble — Minimal Editorial Photography Website UI](https://dribbble.com/shots/27563444-Minimal-Editorial-Photography-Website-UI): generous whitespace and editorial rhythm. Adapted to app information rather than a photography portfolio.
- [Dribbble — Minimalist editorial portfolio website for design agency](https://dribbble.com/shots/27139244-Minimalist-editorial-portfolio-website-for-design-agency): deliberate grid and type scale. Adapted into a released-product feature followed by a two-product upcoming section.
- [DesignMunk — Linear design export](https://designmunk.com/linear/): third-party design.md-style extraction, **not an official Linear design specification**. Consulted for hierarchy and spacing principles only. No code, assets, fonts, or copied tokens incorporated.

## Content and source of truth

- Kepler / 케플러 is the studio identity provided by the owner.
- Plander: iOS released; Android coming soon.
- Sudoku: Cosmos and Nonogram: Cosmos: both iOS and Android coming soon.
- Do not convert upcoming labels into store buttons until the owner confirms release and provides URLs.
- Support: `plander.cs@gmail.com`, verified in Plander's contact implementation.
- Plander privacy policy: copied without content changes from `Plander/Resources/HTML/plander_privacy_policy.html`. Owner should review policy applicability when app behavior changes.
- Sudoku privacy policy points to the existing `/sudoku-cosmos-privacy/` page. Nonogram privacy policy will be linked when available; no fabricated policy.
- Plander screenshot: `marketing/app-store-v5/screenshots/01-calendar.png`, reduced to 1000 pixels tall for web. Real iOS UI with demonstration events, captured for marketing; it is not a new interface mockup. Source capture records disclose skipped ads/permissions for capture.
- Icon: `Plander/Resources/Images.xcassets/AppIcon.appiconset/1024.png`, reduced to 160 pixels.
- Sudoku and Nonogram artwork are original decorative CSS symbols, not representations of shipping UI.
- No personal phone number, address, business certificate, or unrelated personal contact details published.

## Maintenance

Static files intentionally have no Jekyll front matter, so the existing blog layout does not apply. Keep styles scoped in this directory. Preview by serving the parent folder and visiting `/kepler/`, or serve this folder directly (the Sudoku privacy URL requires the actual site root).

For a new app, follow the semantic `article.future` structure, create original decorative art or supply a genuine product screenshot, add the correct platform availability and policy. For a release, update its status copy and add a real App Store / Google Play link. Never use a disabled or dummy store link.

## Accessibility and privacy

Native headings and navigation, keyboard skip link, visible focus, descriptive screenshot alt text, decorative art hidden from assistive technology. Responsive single-column layout at 760px, reduced-motion preference honored. No submitted forms or website analytics; support opens the user's mail client. The language preference stays in the visitor's browser and is not transmitted. External destination sites have their own policies.

## Languages

The native language selector in the top-right header offers 한국어 and English. Korean is the default; a valid saved choice is restored on return. Storage failures do not prevent switching. Without JavaScript, all Korean content and links remain usable and the inactive selector stays hidden. On phones, navigation occupies a second row to keep the wordmark and selector clear.

`language.js` contains the complete keyed dictionary. `data-i18n` marks trusted static markup; `data-i18n-content`, `data-i18n-alt`, and `data-i18n-aria-label` mark translated metadata and accessible descriptions. Update both languages when product copy or availability changes. The English brand headline and app names remain shared. Existing linked privacy policies retain their own language and legal content; selecting English does not translate legal documents or the embedded Korean app screenshot.

## Verification checklist

- Review Korean and English desktop and mobile renders, including 320px viewport.
- Test keyboard language selection, saved choice after reload, unavailable localStorage, and the usable Korean page with JavaScript disabled.
- Confirm no horizontal overflow, link overlap, missing assets, or inaccessible focus indicators.
- Follow iOS App Store, email, Plander and Sudoku privacy links.
- Verify GitHub Pages deployment and live page after publishing.
- Organization/site verification is a separate task: publishing this page does not itself complete Search Console or Play Console verification.
