import Image from "next/image";

export function BrandMark({ large = false }: { large?: boolean }) {
  return (
    <span className={large ? "brand-mark brand-mark--large" : "brand-mark"}>
      <Image src="/figma/gmfb-logo.png" alt="GMFB — Great Marketing for Businesses" fill sizes={large ? "210px" : "188px"} loading={large ? "lazy" : "eager"} />
    </span>
  );
}
