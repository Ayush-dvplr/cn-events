import '../styles/events.css'
import EventOption  from '../components/EventOption';
import SubEventOption from '../components/SubEventOption';
import ActiveEventCard from '../components/ActiveEventCard';
import ArchiveEventCard from '../components/ArchiveEventCard';
import Filter from '../components/Fliter';
import ChngPage from '../components/ChngPage';
import MobileFilter from '../components/MobileFilter';


const Events = ({event_category_list,activeEvent,activeSubEvent,handleEventOptionClick,handleSubEventOptionClick,events,tags,activeTags,handleTagClick,showTagNum,setShowTagNum,page,currentPage,validNxt,validPrev,setActiveTags,setValidNxt,setValidPrev,setOffset,setCurrentPage}) => {
    const handleMobileFilterDisplay = () => {
        document.getElementById('MobileFilterDisplay').style.display = 'none';
        document.getElementById('mobileFilterWrapper').style.display = 'block';
        document.getElementById('eventsBox').style.display = 'none';

    }
    
    return(
        <div className="eventPage">
            <div className="pageContainer">
                <div className="pageTitle">
                    <h1>EVENTS &amp; NEWS</h1>
                    <h3>Learn, Compete &amp; Grow</h3>
                </div>
                <div className='eventsWrapper'>
                    <div className='eventsContainer'>
                        <div className='eventsMenu'>
                            {event_category_list.map((option)=> {
                                return <EventOption eventOption={option} activeEvent={activeEvent} key={option.value} handleEventOptionClick={handleEventOptionClick}/>
                            })}
                        </div>
                        <div className='subEventsMenu'>
                            {event_category_list[event_category_list.findIndex((obj)=> {return obj.value == activeEvent})].subMenu.map((option)=> {
                                return <SubEventOption subEventOption={option} activeSubEvent={activeSubEvent} key={option.value} handleSubEventOptionClick={handleSubEventOptionClick}/>
                            })}
                        </div>
                        <div className='showEvents' id="eventsBox">
                        {events.length > 0 ? (<div className='eventsBox cursor'>
                        {events.map((event)=>{return event.registration_status==='PAST' ? ( <ArchiveEventCard event={event} key={event.id}/> ): (<ActiveEventCard event={event} key={event.id}/>)})}   
                        </div>) : (<div className='noEventsBox'>No events found</div>)}
                        <Filter tags={tags} activeTags={activeTags} handleTagClick={handleTagClick} showTagNum={showTagNum} setShowTagNum={setShowTagNum}/> 
                        </div>
                        {events.length>0 ? <ChngPage page={page} currentPage={currentPage} validNxt={validNxt} validPrev={validPrev} setValidNxt={setValidNxt} setValidPrev={setValidPrev} setOffset={setOffset} setCurrentPage={setCurrentPage}/> : ''}
                        
                        
                    </div>
                </div>
            </div>
            <div className='MobileFilterDisplay cursor' id='MobileFilterDisplay' onClick={handleMobileFilterDisplay}>
                            <div className='Mobilefiltericon'>
                                <img src='https://www.codingninjas.com/assets-landing/images/filter-events-wave.svg' alt='filter'/>
                            </div>
                            <div>Filter Events</div>
                        </div>
            <MobileFilter tags={tags} activeTags={activeTags} handleTagClick={handleTagClick} setActiveTags={setActiveTags}/>
        </div>
    );
}

export default Events;