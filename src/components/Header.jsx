import Context from "./Context"
import { useContext } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Mousewheel, Navigation, FreeMode } from "swiper"

import "swiper/scss"
import "swiper/scss/free-mode"

export default function Header() {
    const { currentStepIndex, goTo, swiperRef } = useContext(Context)
    
    return (
        <div className="header">
            <Swiper
                modules={[ FreeMode, Navigation, Mousewheel ]}
                slidesPerView={"auto"}
                spaceBetween={20}
                freeMode={true}
                mousewheel={true}
                initialSlide={currentStepIndex}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper
                }}
            >
                <SwiperSlide onClick={()=>goTo(0)} className={currentStepIndex + 1 === 1 ? "active" : null}>General</SwiperSlide>
                <SwiperSlide onClick={()=>goTo(1)} className={currentStepIndex + 1 === 2 ? "active" : null}>Rig</SwiperSlide>
                <SwiperSlide onClick={()=>goTo(2)} className={currentStepIndex + 1 === 3 ? "active" : null}>Mainsail</SwiperSlide>
                <SwiperSlide onClick={()=>goTo(3)} className={currentStepIndex + 1 === 4 ? "active" : null}>Headsail</SwiperSlide>
                <SwiperSlide onClick={()=>goTo(4)} className={currentStepIndex + 1 === 5 ? "active" : null}>Spinnaker</SwiperSlide>
                <SwiperSlide onClick={()=>goTo(5)} className={currentStepIndex + 1 === 6 ? "active" : null}>Propeller</SwiperSlide>
                <SwiperSlide onClick={()=>goTo(6)} className={currentStepIndex + 1 === 7 ? "active" : null}>Other details</SwiperSlide>
            </Swiper>
        </div>
    )
}