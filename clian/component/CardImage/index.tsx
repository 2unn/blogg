import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/CardImage.module.css";

interface ICardImage {
  src: string;
  title: string;
  text: String;
}

const CardImage: React.FC<ICardImage> = ({ src, title, text }) => {
  const textEl = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textEl.current && overlay.current) {
      console.log(overlay.current.offsetHeight);
      overlay.current.style.transform = `translateY(${textEl.current.offsetHeight}px)`;
    }
  }, []);

  const handleOnMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    if (textEl.current && overlay.current) {
      console.log(overlay.current.offsetHeight);
      overlay.current.style.transform = `translateY( 0)`;
    }
  };

  const handleOnMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (textEl.current && overlay.current) {
      console.log(overlay.current.offsetHeight);
      overlay.current.style.transform = `translateY(${textEl.current.offsetHeight}px)`;
    }
  };

  return (
    <div
      onMouseOver={handleOnMouseOver}
      onMouseLeave={handleOnMouseLeave}
      className={styles.wrapper}
    >
      <a className={styles.link}>
        <Image
          className={styles.image}
          src={src}
          alt={title}
          height="387"
          width="387"
        />
      </a>
      <div ref={overlay} className={styles.overlay}>
        <div className={styles.title}>{title}</div>
        <div ref={textEl} className={styles.text}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default CardImage;
