import React, { useState } from 'react'


const Add = () => {
  const [add,setAdd]=useState('AddProgram')
  const handleAdd=(value)=>{
      setAdd(value)
  }
  return (

    <>
   

    <div className='container mt-5'>

<small><div className='btn-group' >
  <button type='button' onClick={()=>handleAdd("AddProgram")} className={`btn  btn-outline-primary ${add==='AddProgram'?'active':' '}`}>Add Program's</button>
  <button type='button' onClick={()=>handleAdd("AddDevotees")} className={`btn btn-outline-primary ${add==='AddDevotees'?'active':' '}`}>Add Devotee's</button>
</div></small>
{add==='AddProgram' && 
 <div>hello
  </div>
}
{add==='AddDevotees' && 
 <div>devotees
  </div>
}
      
    </div>
  </>
  )
}

export default Add