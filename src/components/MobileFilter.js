import '../styles/MobileFilter.css';

const MobileFilter = ({tags,activeTags,handleTagClick,setActiveTags}) => {

    const handleBackFilter = () => {
        document.getElementById('mobileFilterWrapper').style.display = 'none';
        document.getElementById('MobileFilterDisplay').style.display = 'flex';
        document.getElementById('eventsBox').style.display = 'flex';
        
    }
  return (
      <div className='mobileFilterWrapper' id='mobileFilterWrapper'>
        
        
          <div className='mobileFilterHeading'>
              <div className='mobileback' onClick={handleBackFilter}>
                  <a href='#eventsBox'>
                  <img src='https://www.codingninjas.com/assets-landing/images/events-back.svg' alt='back'/>
                  </a>
              </div>
              <div className='mobileTitle'>Filter Events</div>
          </div>
          <div className='mobileTagBox'>
              <ul>
              {tags.map((tag)=>{return <li className={'mobileTag cursor '+activeTags.map((activeTag)=>{return (activeTag===tag ? 'active_mobile_tag' : '')}).join('')} key={tag} onClick={() =>handleTagClick(tag)}>{tag}</li>})}
              </ul>
          </div>
          
          
        
        
      </div>
  );
}

export default MobileFilter;