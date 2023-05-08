import React, { useState, useCallback, useEffect } from 'react'

/*
    useCallback is the same as useMemo except it returns the whole function rather than the return value of that function. You use it when comparing an array or object and you don't want them to recreate any time anything else changes. The difference with useCallback is because it returns the whole function rather than just the results you can pass it parameters and use it else where in your code.
*/

const UseCallback = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    const doubleNumber = () => {
        return number * 2;
    }

    const returnTheme = useCallback((color1, color2) => {
        return {
            backgroundColor: dark ? color1 : color2,
            color: dark ? color2 : color1
        }            
    }, [dark])

    useEffect(() => {
        console.log('Theme changed')
    }, [returnTheme])

  return (
    <div>
      <h1>useCallback</h1>
      <input type='number' value={number} onChange={(e) => setNumber(e.target.value * 1)} style={returnTheme('red', 'white')} />
      <p>{doubleNumber()}</p>
      <button onClick={() => setDark(!dark)}>Change theme</button>
    </div>
  )
}

export default UseCallback
