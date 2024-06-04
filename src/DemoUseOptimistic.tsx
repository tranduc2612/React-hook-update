import {useState} from "react";

type TodoType = {
    id: string,
    title: string,
    sending: boolean
}

function DemoUseOptimistic(){
    const [value, setValue] = useState("");

    const [todo,setTodo] = useState<TodoType[]>([
        {
            id: "1",
            title: "Hello World",
            sending: false,
        }
    ])
    const [todoOptimistic, setTodoOptimistic] = useState<TodoType[]>(todo)



    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }

    function handleSubmit() {
        const todoNew = {
            id: Math.random().toString(),
            title: value,
        }
        setTodoOptimistic(todoOptimistic)
        setTimeout(()=>{
            // setTodo([
            //     ...todo,
            //     todoNew
            // ])
        },4000)
    }

    return (
        <>
            - Muốn dùng được hook này trong Reactjs thì phải config
            <br/>
            - Giống như việc cập nhập dữ liệu ngầm... nhưng cập nhật giá trị luôn lên trên giao diện
            <br/>
            - Sử dụng Khi giao diện cập nhật luôn ko cần phải đợi IP để trả ve (Thích hợp làm like trong
            social ???)
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <input onChange={handleChangeValue} value={value}></input>
            <button onClick={handleSubmit}>Create</button>
            <br/>
            <br/>
            <br/>
            {
                // todoOptimistic.map(item => {
                //     return <span key={item.id}>{item.title}<br/></span>
                // })
            }


        </>
    );
}

export default DemoUseOptimistic
