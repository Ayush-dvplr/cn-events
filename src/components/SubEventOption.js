import '../styles/subEventOption.css'

const SubEventOption = ({subEventOption,activeSubEvent,handleSubEventOptionClick}) => {
    
    return (
        <div className='subEventOptionContainer' onClick={()=>handleSubEventOptionClick(subEventOption.value)}>
            <div className={`subEventOptionValue  ${subEventOption.value === activeSubEvent ? 'active' : '' }`} value={subEventOption.value}>{subEventOption.text}</div>
        </div>

    )
}

export default SubEventOption;