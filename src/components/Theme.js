

function Theme(props) {
    const changeColor=(color)=>{
        
       document.body.style.backgroundColor=color;
     }
  return (
   
  <div className="px-1 rounded" style={{backgroundColor:props.cmode==='dark'? 'white':'#0c2864ef'}}>
    {props.cmode==='dark'?
        <div className="mb-1" style={{borderRadius:'50%'}}>
      <button className="btn mx-1" style={{backgroundColor:'#640c29ef'}} onClick={()=>changeColor('#640c29ef')}></button>
      <button className="btn mx-1 " style={{backgroundColor:'#0c4464ef'}} onClick={()=>changeColor('#0c4464ef')}></button>
      <button className="btn  mx-1 " style={{backgroundColor:"goldenrod"}} onClick={()=>changeColor('#cec32eef')}></button>
      <button className="btn mx-1 " style={{backgroundColor:'#0c6458ef'}} onClick={()=>changeColor('#0c6458ef')}></button>
      <button className="btn mx-1 " style={{backgroundColor:'#640c60ef'}} onClick={()=>changeColor('#640c60ef')}></button>
    </div>
    :
    <div className="mb-1" style={{borderRadius:'50%'}}>
      <button className="btn  mx-1 " style={{backgroundColor:'pink'}} onClick={()=>changeColor('pink')}></button>
      <button className="btn mx-1 " style={{backgroundColor:'lightBlue'}} onClick={()=>changeColor('lightBlue')}></button>
      <button className="btn mx-1" style={{backgroundColor:'lightyellow'}} onClick={()=>changeColor('lightyellow')}></button>
      <button className="btn mx-1" style={{backgroundColor:'#b4e0bbef'}} onClick={()=>changeColor('#b4e0bbef')}></button>
      <button className="btn mx-1" style={{backgroundColor:'lavender'}} onClick={()=>changeColor('lavender')}></button>
    </div>}
    </div>
)
}
export default Theme
