import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  className?: string;
  href?: string | false;
  /** White version on a dark background, via a CSS filter */
  onDark?: boolean;
  priority?: boolean;
};

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function Logo({
  className,
  href = "/",
  onDark = false,
  priority = false,
}: LogoProps) {
  const image = (
    <Image
      src="/logo.svg"
      alt={site.name}
      width={324}
      height={37}
      priority={priority}
      className={cx(
        "h-5 w-auto md:h-6",
        onDark && "brightness-0 invert",
        className,
      )}
    />
  );

  if (href === false) {
    return image;
  }

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center"
      aria-label={site.name}
    >
      {image}
    </Link>
  );
}
