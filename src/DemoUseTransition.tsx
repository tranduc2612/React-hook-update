import {useMemo, useState, useTransition} from "react";

const DATA = [
    "2","1","3","7"
]

function DemoUseTransition(){
    const [query, setQuery] = useState('');
    const [isPending,startTransition] = useTransition();

    const dataRender = useMemo(()=>{
        return DATA.map(item=>{
            return query == item ? <span style={{color: "red"}}>{item}</span> : <span></span>
        })
    },[query])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        startTransition(()=>{
            setQuery(e.target.value);
        })
    }

    return (
        <>
            - Tối ưu hóa tốc độ tìm kiếm như deboucing
            <br/>
            - Dùng khi mà nhập input vào ô đấy thấy rất chậm và nhập xong sau khoảng 2-4s ms load lên ô input nên phải
            dùng useTransition
            <br/>
            <label>
                Search albums:
                <input value={query} onChange={handleChange}/>
            </label>
            {
                isPending ? <p>loading...</p> :
                    <p>{dataRender}</p>

            }
        </>
    );
}

export default DemoUseTransition
