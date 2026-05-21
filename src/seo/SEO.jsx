import { Helmet } from 'react-helmet-async';
import { SITE, absUrl, buildTitle } from './siteConfig';

/**
 * <SEO/> — universal meta-tag manager.
 *
 * Renders:
 *  - <title>, meta description, keywords
 *  - canonical link
 *  - Open Graph + Twitter Card
 *  - geo / locale meta
 *  - any number of JSON-LD blocks (passed via `jsonLd` prop)
 *
 * Props:
 *  - title           string (page-specific, brand suffix added automatically)
 *  - description     string
 *  - keywords        string
 *  - canonical       string (path, e.g. "/treatments")
 *  - image           string (absolute URL or path)
 *  - jsonLd          object | object[]   one or many schema.org objects
 *  - noindex         bool   (default false)
 *  - type            "website" | "article" | "medical.business"
 */
export default function SEO({
  title,
  description = SITE.defaultDescription,
  keywords = SITE.defaultKeywords,
  canonical,
  image,
  jsonLd,
  noindex = false,
  type = 'website',
}) {
  const fullTitle = buildTitle(title);
  const canonicalUrl = absUrl(canonical || '/');
  const ogImage = image ? absUrl(image) : SITE.ogImage;
  const blocks = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet prioritizeSeoTags>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE.brand} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content={SITE.brand} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitterHandle} />
      <meta name="twitter:creator" content={SITE.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo */}
      <meta name="geo.region" content={SITE.geo.region} />
      <meta name="geo.placename" content={SITE.geo.placename} />
      <meta name="geo.position" content={`${SITE.geo.latitude};${SITE.geo.longitude}`} />
      <meta name="ICBM" content={`${SITE.geo.latitude}, ${SITE.geo.longitude}`} />

      {/* JSON-LD */}
      {blocks.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
}
