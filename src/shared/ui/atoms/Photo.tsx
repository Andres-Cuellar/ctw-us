import Image from "next/image";
import type { ReactNode } from "react";
import type { Media } from "@/content/types";
import { cn } from "@/shared/lib/cn";

interface PhotoProps {
  media: Media;
  /** Tailwind sizing for the frame, e.g. an aspect ratio. */
  className?: string;
  /** `sizes` for next/image; defaults to half the viewport on desktop. */
  sizes?: string;
  /** Scroll depth of the image inside its frame. 0 disables it. */
  depth?: number;
  priority?: boolean;
  /** Opens like a shutter on scroll. Needs a motion scope around it. */
  reveal?: boolean;
  /** Overlays set on top of the photo: captions, badges. */
  children?: ReactNode;
}

/**
 * A graded photograph in a sign frame. The image sits in an oversized layer so
 * it can drift on scroll without exposing the frame's edges.
 */
export function Photo({
  media,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  depth = 0.18,
  priority = false,
  reveal = true,
  children,
}: PhotoProps) {
  return (
    <figure
      className={cn("photo", className)}
      {...(reveal ? { "data-img-reveal": true } : {})}
    >
      <div
        className="absolute inset-x-0 -inset-y-[15%]"
        {...(depth ? { "data-parallax": depth } : {})}
      >
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
      {children}
    </figure>
  );
}
