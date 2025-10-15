// C:\web\my-final-blog\src\app\_components\cover-image.tsx

import cn from "classnames";
// MODIFIED: Import AnimatedLink instead of the standard Link
import { AnimatedLink } from "./animated-link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  size?: "default" | "large";
};

const CoverImage = ({ title, src, slug, size = "default" }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      width={1300}
      height={630}
      className="w-full h-auto rounded-md"
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        // MODIFIED: Use AnimatedLink here
        <AnimatedLink
          href={slug.startsWith("/") ? slug : `/posts/${slug}`}
          aria-label={title}
          className={cn("block overflow-hidden", {
            "transition-[max-height] duration-500 ease-in-out max-h-80 hover:max-h-[600px] rounded-md":
              size === "default",
          })}
        >
          {image}
        </AnimatedLink>
      ) : (
        <div className="overflow-hidden rounded-md">{image}</div>
      )}
    </div>
  );
};

export default CoverImage;