import { useEffect, useState } from 'react';
import { getEvents, getTags } from '../api';
import {event_category_list,event_sub_category_list} from '../utils'
import Events from '../pages/events'
import Loader from './Loader';


function App() {
  const [tags,setTags] = useState([]);
  const [activeTags,setActiveTags] = useState([]);
  const [activeEvent,setActiveEvent] = useState(event_category_list[0].value);
  const [activeSubEvent,setActiveSubEvent] = useState(event_sub_category_list[0]);
  const [offset,setOffset] = useState(0);
  const [page,setPage] = useState(1);
  const [currentPage,setCurrentPage] = useState(1);
  const [events,setEvents] = useState([]);
  const [activeTagsChanged,setActiveTagsChanged] = useState(1);
  const [showTagNum,setShowTagNum] = useState(10);
  const [loading,setLoading] = useState('true');
  const [validNxt,setValidNxt] = useState(true);
  const [validPrev,setValidPrev] = useState(true);


  useEffect(()=>{
    setLoading('true');
    const fetchTags = async () => {
      const response = await getTags(setLoading);
      
      if (response.success) {
        
        setTags(response.data.tags);
        

        
      }

      };


    fetchTags();
    
  },[]);

  useEffect(()=>{

    

    const fetchEvents = async () => {
      setLoading('true');
      const events = await getEvents(activeEvent,activeSubEvent,activeTags,offset,setLoading);
      if (events.success) {
        
        setEvents(events.data.events);
        setPage(events.data.page_count);
        if(currentPage<=1){
          setValidPrev(false);
        }else{
          setValidPrev(true);
        }
        if(events.data.page_count<=currentPage){
          setValidNxt(false);
        }else{
          setValidNxt(true);
        }
        
      }
    };
    fetchEvents();
  
  },[activeEvent,activeSubEvent,activeTagsChanged,offset])




  const handleEventOptionClick = (event) => {
    
    if(event!==activeEvent){
      setActiveEvent(event);
      setActiveSubEvent(event_sub_category_list[0]);
      setActiveTags([]);
      document.getElementById('viewMoreTags').style.display = 'block';
      setShowTagNum(10);
      setOffset(0);
      setCurrentPage(1);
      document.getElementById('pageInput').value = 1;
    }
  }

  const handleSubEventOptionClick = (event) => {
    if(event!==activeSubEvent){
      
      setActiveSubEvent(event);
      setActiveTags([]);
      document.getElementById('viewMoreTags').style.display = 'block';
      setShowTagNum(10);
      setShowTagNum(10);
      setOffset(0);
      setCurrentPage(1);
      document.getElementById('pageInput').value = 1;
    }
  }
  
 const handleTagClick = (tag) => {
   
  const index = activeTags.indexOf(tag);
  if(index>=0){
    let newArr = activeTags;
    newArr.splice(index,1);
    setActiveTags(newArr);
    let tagNum = activeTagsChanged;
    
    if(tagNum===1){
      tagNum=2;
    }else{
      tagNum=1;
    }
    setActiveTagsChanged(tagNum);

  }else{
    let newArr = activeTags;
    newArr.push(tag);
    setActiveTags(newArr);
    let tagNum = activeTagsChanged;
    
    if(tagNum===1){
      tagNum=2;
    }else{
      tagNum=1;
    }
    setActiveTagsChanged(tagNum);
  }  

 }
 




  return (
    <div className="App">
     {loading === 'true' ? <Loader/>: ''}
     <Events
     event_category_list={event_category_list}
     activeEvent = {activeEvent}
     activeSubEvent={activeSubEvent}
     handleEventOptionClick ={handleEventOptionClick}
     handleSubEventOptionClick = {handleSubEventOptionClick}
     events= {events}
     tags={tags}
     activeTags={activeTags}
     handleTagClick={handleTagClick}
     showTagNum={showTagNum}
     setShowTagNum={setShowTagNum}
     page={page}
     currentPage={currentPage}
     validNxt={validNxt}
     validPrev={validPrev}
     setValidNxt={setValidNxt}
     setValidPrev={setValidPrev}
     setCurrentPage={setCurrentPage}
     setOffset={setOffset}
     setActiveTags={setActiveTags}
     />
    </div>
  );
}

export default App;


