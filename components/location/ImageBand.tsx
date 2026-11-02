import Image, { type StaticImageData } from "next/image";

interface ImageBandProps {
  src: StaticImageData;
  alt: string;
  title: string;
}

/** Full-bleed photo band with a navy wash and a centred title. */
export function ImageBand({ src, alt, title }: ImageBandProps) {
  return (
    <section className="relative isolate mt-16 overflow-hidden py-16 md:py-24 lg:mt-28">
      <Image
        src={src}
        alt={alt}
        fill
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-secondary/75" />
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
          {title}
        </h2>
      </div>
    </section>
  );
}
