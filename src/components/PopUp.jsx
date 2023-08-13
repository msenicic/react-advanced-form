import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

export default function PopUp({input}) {
    function handleClick(e) {
        e.preventDefault()
    }

    return (
        <>
        <span data-tooltip-id={`tooltip-${input.name}`} onClick={handleClick}>
            <i className="fa-solid fa-question"></i>
        </span>
        <Tooltip id={`tooltip-${input.name}`} openOnClick={true}>
            <div>
                <h4>{input.tooltip.title}</h4>
                <div dangerouslySetInnerHTML={ {__html: input.tooltip.content} }/>
            </div>
        </Tooltip>
        </>
    )
}