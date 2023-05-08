import React, { useState, useMemo, useEffect } from 'react'

/*
    whenever anything updates in React it runs through all the code again from top to bottom
    if you have something that's slow to complete you can use useMemo
    the useMemo hook stops something from being recomputed unless something in the dependency array is changed
    it caches the original result and when running through the code if the input is the same it doesn't recalculate it just uses the original result it had cached.
*/

const UseMemo = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    const slowFunction = () => {
        for(let i = 0; i < 1000000000; i++) {} // delays the output to make it slow for the example
        return number * 2;
    }

    const theme = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }        
    }, [dark])

    const doubleNumber = useMemo(() => {
        return slowFunction()
    }, [number])

    /*
        FIRST USE CASE
        if doubleNumber isn't in a useMemo every time it updates the slowFunction is also called and you can see the delay. If you wrap it in a useMemo it caches the result and only recalculates it when the thing in the dependency array changes. So you can update theme without calling slow function.

        SECOND USE CASE
        when comparing objects or arrays in JS they ref the memory space so even if they are the same they will call as if updated. useEffect below calls when theme is updated. However if anything on the page is changed theme is recreated and has a new memory ref so will call the use efect even if theme has the same values. Therefore if you put it in a useMemo it caches the object and doesn't rerender it unless its values are updated and the useEffect will only call when you want it to.
    */

        useEffect(() => {
            console.log('Theme changed')
        }, [theme])
        
  return (
    <div>
      <h1>useMemo</h1>
      <input type='number' value={number} onChange={(e) => setNumber(e.target.value * 1)} style={theme} />
      <p>{doubleNumber}</p>
      <button onClick={() => setDark(!dark)}>Change theme</button>
    </div>
  )
}

export default UseMemo
