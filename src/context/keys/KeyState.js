import React, { useState } from "react"
import KeyContext from "./KeyContext"

const KeyState = (props)=>{
    const s1 = {
        "key":"0xhfdugabklafjdijpw5"
    }

    const [state, setstate] = useState({});
    const update = (data)=>{
        setstate(data)
    }
    return (
        <KeyContext.Provider value={{state , update}}>
            {props.children}
        </KeyContext.Provider>
    )
}

export default KeyState;