
const Filter = ({tags,activeTags,handleTagClick,showTagNum,setShowTagNum}) => {
    const distags = [...tags];
    const displayTags = distags.splice(0,showTagNum);
    const handleShowTagNum = () => {
        document.getElementById('viewMoreTags').style.display = 'none';
        setShowTagNum(tags.length);
    }
    return(<div className='filterBox'>
        <h3>TAGS</h3>
        <ul>
        {displayTags.map((tag)=>{return <li className={'tag cursor '+activeTags.map((activeTag)=>{return (activeTag===tag ? 'active_tag' : '')}).join('')} key={tag} onClick={()=>handleTagClick(tag)}>{tag}</li>})}
        <div id={'viewMoreTags' } onClick={handleShowTagNum} className={'cursor'}>See {tags.length - showTagNum} more tags</div>
        </ul>
    </div>);
}


export default Filter;