import Input from "./Input"

export default function Mainsail({data}) {
    return (
        <div className="form mainsail">
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
        </div>
    )
}