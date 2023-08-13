import Input from "./Input"

export default function Headsail({data}) {
    return (
        <div className="form headsail">
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