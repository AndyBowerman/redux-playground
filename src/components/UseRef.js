import React, { useRef, useState, useEffect } from 'react'

const UseRef = () => {
    const [name, setName] = useState('')
    const count = useRef(0)
    const inputRef = useRef()
    const previousName = useRef('')

    /*
        refs are just like state, its where you can store a value. The difference is it doesn't cause anything to rerender. So in this example when getting the count of renders if I used state
        it would rerender every time name changed, increment count which would then rerender again causing an infinite loop. Ref can count but doesn't cause a rerender itself avoiding an infinite loop.

        useRef can also be used like getElement in vanilla JS. set the ref property of a jsx element to a useRef variable and it'll get the actual element.

        useRef is also a good way of storing previous state
    */

    useEffect(() => {
        count.current = count.current + 1
        previousName.current = name
    }, [name])

    const focus = () => {
        inputRef.current.focus()
    }

  return (
    <div>
      <h1>useRef</h1>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <p>My name is {name}</p>
      <p>My name used to be {previousName.current}</p>
      <p>Count how many times name has been changed? {count.current}</p>
      <button onClick={focus}>Focus</button>
    </div>
  )
}

export default UseRef
