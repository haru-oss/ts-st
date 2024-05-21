export const Plactice2= ()=>{

    const getTotalFee = (num: number ):number =>{
        const total = num * 1.1;
        return(total)

    };


    const onClickPlactice =()=>{
           console.log(  getTotalFee(10000))

    };

    return(



        <>
          <p>練習問題：返却値の方指定</p>
          <button onClick={onClickPlactice}>練習問題２を実行</button>

        </>
    )
}