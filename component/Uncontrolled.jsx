import React, { useRef } from 'react'

export default function Uncontrolled() {
    const nameRef=useRef(null);
    const passwordRef=useRef(null);
    const emailRef=useRef(null);

    function Submit(event){
        event.preventDefault();
        console.log({
            name:nameRef.current.value,
            password:passwordRef.current.value,
            email:emailRef.current.value
        })
    }

  return (
    <div>
      <form action="">
        <input type="text" id='r1' ref={nameRef} />
        <input type="text" id='r2' ref={passwordRef}/>
        <input type="text" id='r3' ref={emailRef}/>
        <input type="submit" onClick={Submit} />
      </form>
    </div>
  )
}
