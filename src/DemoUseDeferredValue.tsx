import {Suspense, useDeferredValue, useState} from "react";

function DemoUseDeferredValue(){
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);
    return (
        <>
            <div>- Tương tự như iseTransition nhưng mà đơn giản hơn (Ko recommend vì nó nhả về một biến ko có pending như useTransition)</div>
            <label>
                Search albums:
                <input value={query} onChange={e => setQuery(e.target.value)} />
            </label>
            <Suspense fallback={<h2>Loading...</h2>}>
                <p>{deferredQuery}</p>
            </Suspense>
        </>
    );
}

export default DemoUseDeferredValue
