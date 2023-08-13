import Input from "./Input"
import { useEffect, useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha";

export default function OtherDetails({data}) {
    const [verify, setVerify] = useState(false)
    const recaptchaRef = useRef(null)
    const recaptchaKey = import.meta.env.VITE_RECAPTCHA_KEY;

    useEffect(()=>{
        if(recaptchaRef.current) {
            recaptchaRef.current.reset();
        }
    },[])

    const handleChangeReCaptcha = () => {
        setVerify(true);
    };

    return (
        <div className="form other-details">
            {data.map((item) => (
                <div key={item.id} className={`section ${item.class}`}>
                    {item.title ? 
                    (<div className="input">
                        <p>{item.title}</p>
                    </div>): null}
                    {item.inputs.map((input) => (
                        <Input key={input.id} input={input}/>
                    ))}
                </div>
            ))}
            <ReCAPTCHA
                sitekey={recaptchaKey}
                onChange={handleChangeReCaptcha}
                ref={recaptchaRef}
            />
            <div className="button">
                <input type="submit" disabled={!verify} value='Send your Club Online Aplication'/>
            </div>
            <p>By submitting this data you agree to <a href="/">Privacy Policy</a></p>
        </div>
    )
}