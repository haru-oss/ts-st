export const Plactice1 = ()=>{

    const calcTotalFee = (num: number )=>{
        const total = num * 1.1;
        console.log(total)
    }

    const onClickPlactice =()=> calcTotalFee(10000);

    return(



        <>
          <p>練習問題：引数の方指定</p>
          <button onClick={onClickPlactice}>練習問題１を実行</button>

        </>
    )
}