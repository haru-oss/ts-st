 import { FC } from "react";

 type MyComponenProps = {
    children: React.ReactNode;
  };


export const Test:FC<MyComponenProps> = (props)=>{
    return(
        <>
        <p>{props.children}</p>

        </>
    )
}