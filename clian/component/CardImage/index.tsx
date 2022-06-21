import Image from "next/image";
import styles from "../../styles/CardImage.module.css";

interface ICardImage {
  src: string;
  title: string;
  text: String;
}

const CardImage: React.FC<ICardImage> = ({ src, title, text }) => {
  return (
    <div className={styles.wrapper}>
      <a className={styles.link}>
        <Image
          className={styles.image}
          src={src}
          alt={title}
          height="387"
          width="387"
        />
      </a>
      <div className={styles.overlay}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default CardImage;
