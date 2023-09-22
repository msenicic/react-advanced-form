import { createContext, useEffect, useRef, useState } from "react";
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

    const [vh, setVh] = useState(()=>window.innerHeight * 0.01);

    useEffect(() => {
        const setActualVh = () => {
            setVh(window.innerHeight * 0.01);
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        setActualVh();
        window.addEventListener('resize', setActualVh);

        return () => {
            window.removeEventListener('resize', setActualVh);
        };
    }, [vh]);

    useEffect(() => {
        localStorage.setItem("currentStepIndex", JSON.stringify(currentStepIndex))
    }, [currentStepIndex])

    function onSubmit(data) {
        alert('Your data has been sent successfully');
        console.log(data)
        reset();
        localStorage.removeItem("formData")
        localStorage.removeItem("currentStepIndex")
        goTo(0);
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