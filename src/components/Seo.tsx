import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
};

const DEFAULT_SITE_NAME = "ONE DESIGN";
const DEFAULT_OG_IMAGE = "/images/ogp.jpg"; // 無ければ好きに

export default function Seo({
  title,
  description,
  canonical,
  ogImage,
}: SeoProps) {
  const fullTitle = `${title}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description ? <meta name="description" content={description} /> : null}

      {/* OGP */}
      <meta property="og:site_name" content={DEFAULT_SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:type" content="website" />
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:image" content={ogImage ?? DEFAULT_OG_IMAGE} />

      {/* canonical */}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
    </Helmet>
  );
}