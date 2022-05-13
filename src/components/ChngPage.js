
import '../styles/ChngPage.css';

const ChngPage = ({page,currentPage,validPrev,validNxt,setValidNxt,setValidPrev,setOffset,setCurrentPage}) => {
var pageInput = currentPage;
var inputchng = false;
const handlePageChng = (dir) => {
    console.log('onclick',currentPage,pageInput,inputchng)
    let tempage = page;
    if(pageInput>1){
        if(tempage-pageInput<=0){
            setValidPrev(false);
          }else{
            setValidPrev(true);
          }
    }
      if(tempage<=pageInput){
        setValidNxt(false);
      }else{
        setValidNxt(true);
      }
    if(currentPage>0){
        if(inputchng){

                let page = pageInput;
                let offset = (pageInput-1)*20;
                document.getElementById('pageInput').value = page;
                setCurrentPage(page);
                setOffset(offset);
             
        }else{
            inputchng = false;
            if(dir==='prev'){
                let page = currentPage -1;
                let offset = (page-1)*20;
                document.getElementById('pageInput').value = page;
                setCurrentPage(page);
                setOffset(offset);
            }else{
                let page = currentPage +1;
                let offset = (page-1)*20;
                document.getElementById('pageInput').value = page;
                setCurrentPage(page);
                setOffset(offset);
            }
        }
    }

}

const handleOnchange = (e) => {
    var val = e.value;
    inputchng = true;
    if(val < 0) {e.value=Math.abs(e.value); val = Math.abs(e.value);};
    if(e.value.length > 2) {e.value = e.value.slice(0, 2);val = e.value.slice(0, 2);}
    for(let i = 0;i<=2;i++){
        if(e.value[i]==='.' || e.value[i] ==+ '-'){
            e.value = e.value.splice(0);
            val = e.value.splice(0);
        }
    }
    val = val -0;
    
    if(val > 0){
        pageInput = val;
        if(val>1){
            if(page-val<=0){
                setValidPrev(false);
              }else{
                setValidPrev(true);
              }
        }

        
           
        
          if(page<=val ){
            setValidNxt(false);
          }else{
            setValidNxt(true);
          }
    }
}
    
 return (<div className='chngPageWrapper'>
     <div className='ChngPageContainer cursor'>
     {validPrev ? (<a href='#eventsBox'><div className='chngSign' style={{backgroundImage: 'linear-gradient(to right,#f97726, #ef9c16)'}} onClick={()=>handlePageChng('prev')} >&lt;</div></a>) : (<div className='chngSign'>&lt;</div>)}
         <div>Page</div>
         <div><input id='pageInput' type={'number'} placeholder={currentPage} onChange={(e)=>{handleOnchange(e.target)}}/></div>
         <div>of {page}</div>
         {validNxt ? (<a href='#eventsBox'><div className='chngSign' style={{backgroundImage: 'linear-gradient(to right,#f97726, #ef9c16)'}} onClick={()=>handlePageChng('next')} >&gt;</div></a>) : (<div className='chngSign'>&gt;</div>)}
     </div>
 </div>);
}

export default ChngPage;