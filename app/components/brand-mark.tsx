export function BrandMark({ large = false }: { large?: boolean }) {
  return (
    <svg
      className={large ? "brand-mark brand-mark--large" : "brand-mark"}
      viewBox="0 390 1254 450"
      role="img"
      aria-label="GMFB — Great Marketing for Businesses"
    >
      {/* Frame the artwork without the supplied PNG's empty top and bottom margins. */}
      <image href="/assets/gmfb-logo.png" width="1254" height="1254" />
    </svg>
  );
}
