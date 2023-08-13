import PopUp from './PopUp'
import Context from './Context'
import { useContext } from 'react'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

export default function Input({input}) {
    const { register, errors } = useContext(Context)

    return (
        <div className="input">
            <label htmlFor={input.name}>{input.label}{input.tooltip ? (<PopUp input={input}/>) : null}</label>
            {
                input.type === 'select' ? (
                    <select 
                        id={input.name} 
                        {...register(input.name)}
                    >
                        {input.options.map((item, i) => (
                            <option key={i} value={item.value}>{item.label}</option>
                        ))}
                    </select>
                ) : input.type === 'textarea' ? (
                    <textarea
                        id={input.name}
                        {...register(input.name)}
                    />
                ) : input.type === 'radio' ? (
                    <div className="radio">
                        {input.options.map((item, i)=>(
                            <div key={i}>
                                <input 
                                    type="radio"
                                    id={item.label}
                                    {...register(input.name)}
                                    value={item.value}
                                />
                                <label htmlFor={item.label}>{item.label}</label>
                            </div>
                        ))}
                    </div>
                ) : input.type === 'number' ? (
                    <input
                        id={input.name}
                        type={input.type}
                        {...register(input.name, {valueAsNumber: true})}
                    />
                ) : (
                    <input
                        id={input.name}
                        type={input.type}
                        {...register(input.name)}
                    />
                )
            }
            {errors[input.name]?.message &&  
                <>
                    <span data-tooltip-id={`tooltips-${input.name}`} className='error'>
                        <i className="fa-solid fa-xmark"></i>
                    </span>
                    <Tooltip id={`tooltips-${input.name}`}>
                        <div>
                            {errors[input.name]?.message}
                        </div>
                    </Tooltip>
                </>
            }           
        </div>
    )
}