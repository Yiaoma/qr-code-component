import { FC } from 'react';

interface ImgProps {
  className?: string;
  alt: string;
  src: string;
}

export const Img: FC<ImgProps> = ({ className, alt, src }) => (
  <img src={src} alt={alt} className={className} />
);
