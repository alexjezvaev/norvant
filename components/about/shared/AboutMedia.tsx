import Image from "next/image";

type AboutMediaProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  imageClassName?: string;
  className?: string;
};

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function AboutMedia({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority,
  imageClassName = "object-cover object-center",
  className,
}: AboutMediaProps) {
  return (
    <div
      className={cx(
        "relative h-full min-h-72 overflow-hidden md:min-h-0",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={imageClassName}
        priority={priority}
      />
    </div>
  );
}
