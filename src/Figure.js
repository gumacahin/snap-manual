import React from 'react';
import Image from '@theme/IdealImage';

export default function Figure({caption, src, alt, children}) {

  if (children) {
    return (
      <figure className="figure">
        {children}
        <figcaption className="figure-caption">{ caption }</figcaption>
      </figure>
    );
  }

  return (
        <figure className="figure">
          <Image img={require(`@site/static/img/${src}`)} alt={alt} />
          <figcaption className="figure-caption">{caption}</figcaption>
        </figure>
  );
}
