import Layout from "../../layout";
import CardImage from "../../component/CardImage";
import styles from "../../styles/ShowCase.module.css";

const ShowCase = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>SHOWCASE</h2>
        <h1 className={styles.textTitle}>Check out our lastest projects</h1>
        <div className={styles.carList}>
          <CardImage
            src="/VR.jpg"
            title="Qwerty VR"
            text="Lorem ipsum amet - nullam arcu tempus lorem ipsum dolor amet nulla"
          />
          <CardImage
            src="/DrawAndPlay.jpg"
            title="Draw & play"
            text="Lorem ipsum amet - nullam arcu tempus lorem ipsum dolor amet nulla"
          />
          <CardImage
            src="/SevenCycling.jpg"
            title="Seven cycling"
            text="Lorem ipsum amet - nullam arcu tempus lorem ipsum dolor amet nulla"
          />
          <CardImage
            src="/CBDDrops.jpg"
            title="CBD drops"
            text="Lorem ipsum amet - nullam arcu tempus lorem ipsum dolor amet nulla"
          />
          <CardImage
            src="/HeroAcademy.jpg"
            title="Hero fighting academy"
            text="Lorem ipsum amet - nullam arcu tempus lorem ipsum dolor amet nulla"
          />
          <CardImage
            src="/BookCover.jpg"
            title="Book cover design"
            text="Lorem ipsum amet - nullam arcu tempus lorem ipsum dolor amet nulla"
          />
        </div>
      </div>
    </Layout>
  );
};

export default ShowCase;
