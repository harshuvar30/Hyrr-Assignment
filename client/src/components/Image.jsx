import React from "react";
import { IKImage } from "imagekitio-react";
function Image({src,className,w,h,alt}) {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      className={className}
      alt={alt}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      width={w}
      height={h}
    />
  );
}

export default Image;
