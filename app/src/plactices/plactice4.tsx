export const Plactice4 = ()=>{

    const calcTotalFee = (num:number)=>{
        const total = num * 1.1;
        console.log(total)
    }

    const onClickPlactice =()=> calcTotalFee(10000);

    return(



        <>
          <p>練習問題：設定ファイルを触ってみる</p>
          <button onClick={onClickPlactice}>練習問題4を実行</button>

        </>
    )
}