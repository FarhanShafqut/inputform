'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  // const [state, setState] = useState('')
  const [state, setState] = useState({
    userName: '',
    email: '',
    phone:0,
  })

  console.log(state)
    // const dummy =((e)=>{
    //   console.log("onChangeHandler",e.target.value);
    //   console.log("onChangeHandler",e.target.name);
    //   setState({
    //     [e.target.name] : [e.target.value]
    //   })
    // })


  const change = (e) => {
    setState({ ...state , userName: e.target.value }); 
  };

  return (
    <>
        <div>
          <div className='w-full'>
              <div className='max-w-7xl bg-slate-300'>
                  <div>
                    <input type="text" placeholder='Enter your name' name='userName' onChange={(e)=>setState({...state,userName : e.target.value})}  />
                    {/* <input type="text" placeholder='Enter your name' name='userName' onChange={()=>setState({})} /> */}
                  </div>                                                          
                  <div>
                  <input type="text" placeholder='Enter your name' name='userName' onChange={(e)=>setState({...state,phone : e.target.value})}  />
                  </div>
                  <p>{state.userName}111</p>
                  <p>{state.phone}111</p>
              </div>
          </div>
        </div>
    </>
  )
}
