import '../styles/eventOption.css'

const EventOption = ({eventOption,activeEvent,handleEventOptionClick}) => {
    
    return (
        <div className='eventOptionContainer' value={eventOption.value} onClick={()=>handleEventOptionClick(eventOption.value)}>
            <div className='optionImg'>
                <img src={eventOption.value === activeEvent ?  eventOption.selectedImg : eventOption.unselectedImg} alt={eventOption.value}/>

            </div>
            <div className={`eventOptionValue  ${eventOption.value === activeEvent ? 'active' : '' }`} value={eventOption.value}>{eventOption.value.toLowerCase().replace("_"," ")}</div>
        </div>
    )
}

export default EventOption;