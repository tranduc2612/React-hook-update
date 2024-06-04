import {useEffect, useInsertionEffect, useLayoutEffect, useState} from "react";

function DemoUseInsertionEffect(){
    const [theme,setTheme] = useState(true)
    useInsertionEffect(()=>{
        console.log(1)
        const style = document.createElement('style')
        style.innerHTML = `*{color: ${theme ? 'black' : 'pink'}}`
        document.head.appendChild(style)
        return ()=>{
            // ko xóa là nó cư append vào thẻ head day
            document.head.removeChild(style)
        }
    },[theme])
    useLayoutEffect(() => {
        console.log(2)
    }, []);

    useEffect(() => {
        console.log(3)
    }, []);
    return (
        <>

            - Sử dụng useInsertion Effect khi voi CSS
            <br/>
            - No sẽ chạy trc useLayoutEffect và useEffect
            <br/>
            <button onClick={(()=>{
                setTheme(!theme)
            })}>Change Theme</button>
        </>
    );
}

export default DemoUseInsertionEffect
