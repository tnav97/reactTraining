import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate=useNavigate();
    return (<><p>Home</p>
    
        <button onClick={()=>{navigate('order',{replace:true})}}>Place order</button>
        </>
    )
}


