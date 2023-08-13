import Context from "./Context"
import { useContext } from "react"

export default function Buttons() {
    const { isFirstStep, isLastStep, back, next, swiperRef} = useContext(Context)

    return (
        <div className="buttons">
            <button disabled={isFirstStep} onClick={()=>{back();swiperRef.current?.slidePrev()}}>Previous</button>
            <button disabled={isLastStep} onClick={()=>{next();swiperRef.current?.slideNext()}}>Next</button>
        </div>
    )
}