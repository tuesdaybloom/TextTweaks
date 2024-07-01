import React from 'react'

function About(props) {
  return (
    <div className={`container p-4 my-3 border border-${props.emode==='light'?'dark':'light'} rounded text-${props.mode} `} style={{ backgroundColor: props.emode === 'light' ? '#ffffff' : '#111122' }}>
      <h2 className='text-center'>Know TextTweaks!!</h2>
      <ul className='custom-bullet mt-4'>
      <li><h4> On Click text transitions.</h4></li>
      <li><h4>Get the statistics of your Text</h4></li>
      <li><h4>Change the theme as per your preference.</h4></li>
      <ul className="custom-bullet"><li><p>Find the theme changer at the top of the Navbar .</p></li>
      <li><p>You can switch to dark and light mode and select the theme from each mode.</p></li></ul>
      <li ><h4>Provides Text Variations</h4></li>
      <h5 style={{paddingLeft:'20px'}}>Change your Text to the below formats by clicking on the respective buttons. </h5>
      </ul>
      <ol style={{paddingLeft:'80px'}}> 
      <li> <h6> ToUpperCase</h6></li>
      <p>Changes all your text to UpperCase, i.e. all the letters will transform to capital letters.</p>
      <li> <h6> ToLowerCase</h6></li>
      <p>Changes all your text to LowerCase, i.e. all the letters will transform to small letters.</p>
      <li> <h6> ToToggleCase</h6></li>
      <p>Changes all your text to ToggleCase, Changes all the letters of the word, except 1st letter to capital letters.</p>
      <li> <h6> ToCamelCase</h6></li>
      <p>Changes all your text to CamelCase.Changes all the letters of the word to capital letters.</p>
      <li> <h6>RemoveExtraSpace</h6></li>
      <p>Removes more than one space from your provided text, and makes your text better.</p>
      <li> <h6>CopyText</h6></li>
      <p>Helps you copy the modified text to your clipboard.</p>
      <li> <h6> ClearText</h6></li>
      <p>Clears the text from the modifier box.</p>
       </ol>
      
    </div>
  )
}

export default About
