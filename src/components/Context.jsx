import { createContext, useEffect, useRef } from "react";
import General from "./General"
import Headsail from "./Headsail"
import Mainsail from "./Mainsail"
import OtherDetails from "./OtherDetails"
import Propeller from "./Propeller"
import Rig from "./Rig"
import Spinnaker from "./Spinnaker"
import { useMultistepForm } from "../hook/useMultistepForm"
import { useForm } from "react-hook-form";
import { DATA_FORM_SCHEMA, FORM_DATA } from "../data/index";
import { yupResolver } from "@hookform/resolvers/yup"
import useFormPersist from "react-hook-form-persist"

export const Context = createContext(null);

export const ContextProvider = ({children}) => {
    const {steps, currentStepIndex, step, isFirstStep, next, back, isLastStep, goTo } = useMultistepForm([
        <General data={FORM_DATA[0]} />,
        <Rig data={FORM_DATA[1]}/>,
        <Mainsail data={FORM_DATA[2]}/>,
        <Headsail data={FORM_DATA[3]}/>,
        <Spinnaker data={FORM_DATA[4]}/>,
        <Propeller data={FORM_DATA[5]}/>,
        <OtherDetails data={FORM_DATA[6]}/>
    ])

    const swiperRef = useRef(null);

    const { register, handleSubmit, watch, setValue, reset, formState: {errors} } = useForm({
        resolver: yupResolver(DATA_FORM_SCHEMA),
        mode: 'onChange',
    })

    useFormPersist("formData",{ watch, setValue, storage: window.localStorage });

    useEffect(() => {
        localStorage.setItem("currentStepIndex", JSON.stringify(currentStepIndex))
    }, [currentStepIndex])

    function onSubmit(data) {
        console.log(data)
        reset();
        localStorage.removeItem("formData")
        localStorage.removeItem("currentStepIndex")
    }

    function onErrors() {
        goTo(0);
    }

    const value = {
        steps,
        currentStepIndex,
        step,
        isFirstStep,
        next,
        back,
        isLastStep,
        goTo,
        onSubmit,
        swiperRef,
        handleSubmit,
        errors,
        onErrors,
        register,
    }

    return(
        <Context.Provider value={value}>{children}</Context.Provider>
    )
}

export default Context;