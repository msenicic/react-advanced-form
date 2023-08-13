import Input from "./Input"
import Context from './Context'
import { useContext } from 'react'

export default function Propeller({data}) {
    const { formData, handleChange, register, errors } = useContext(Context)

    return (
        <div className="form propeller">
            {data.map((item,i) => (
                <div key={item.id} className={`section ${item.class}`}>
                    {item.title ? 
                    (<div className="input">
                        <p>{item.title}</p>
                    </div>): null}
                    {i==0 ? (
                        <div className="input">
                        {item.inputs[0].options.map((option,i)=>(
                            <div className="radio" key={i}>
                                <img src="" alt="" />
                                <div>
                                    <input 
                                        type="radio"
                                        id={option.label}
                                        {...register(item.inputs[0].name)}
                                        value={option.value}
                                        data-tooltip-id={item.inputs[0].name}
                                    />
                                    <label htmlFor={option.label}>{option.label}</label>
                                </div>
                            </div>
                        ))}
                        </div>
                    ) : (
                        item.inputs.map((input) => (
                            <Input key={input.id} input={input}/>
                        ))
                    )}
                </div>
            ))}
        </div>
    )
}