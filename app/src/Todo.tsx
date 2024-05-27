import { TodoType } from "./types/todo";

// type TodoType = {

//     userId:number;
//     title: string;
//     completed?: boolean;
// }

export const Todo = (props: Omit<TodoType, 'id' >)=>{
    const {title,userId,completed=false} = props;
    const completeMark = completed ? "[完]":"[未]"
    return(

        <>
         <p>{`${completeMark} ${title}(ユーザー：${userId})`}</p>

        </>
    )
}