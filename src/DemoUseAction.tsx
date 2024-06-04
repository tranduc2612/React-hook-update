import {useDebugValue, useState} from "react";

function DemoUseDebugValue(){
    const [isOnline] = useState(false);
    useDebugValue(isOnline ? 'Online' : 'Offline');
    return  <>
    hello
    </>
}

export default DemoUseDebugValue
