import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../styles/OurWork.module.css";
import { Navigation, Pagination } from "swiper/modules";
import Btn from "./Btn";

const OurWork: React.FC = () => {
  
  return (
    <section className={styles.ourWorkSection}>
      <h2 className={styles.title}>OUR WORK</h2>
      <Swiper
        className={styles.carousel}
        modules={[Pagination, Navigation]}
        slidesPerView={1.2}
        spaceBetween={15}
        centeredSlides={true}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        
      >
        <SwiperSlide className={styles.slide}>
          <img src="/assets/work1.jpg" alt="work 1" className={styles.image} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src="/assets/work2.jpg" alt="work 2" className={styles.image} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src="/assets/work3.jpg" alt="work 3" className={styles.image} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src="/assets/work4.jpg" alt="work 4" className={styles.image} />
        </SwiperSlide>
      </Swiper>
      <Btn text={'Work With Us'}/>
    </section>
  );
};

export default OurWork;
