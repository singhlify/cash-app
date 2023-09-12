import NextImage from "next/image";
import { ReactElement } from "react";

interface ImageProps {
  alt: string;
  src: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
}

const Image = ({
  alt = "",
  src = "",
  width = undefined,
  height = undefined,
  className = "",
  fill = false,
}: ImageProps): ReactElement => {
  return (
    <NextImage
      alt={alt}
      className={className}
      src={src}
      width={width}
      height={height}
      fill={fill}
    />
  );
};

export default Image;
