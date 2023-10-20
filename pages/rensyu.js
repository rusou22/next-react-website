// 最上位の要素(div)がないと <h1>と<p>はエラーになる

// export default function Home() {
  // return (
    // <div>
      // <h1>CABE</h1>
      // <p>アウトプットしていくサイト</p>
    // </div>
  // )
// }

//２つのやり方がある↑↓　　divを追加したくない場合↓ (React.Fragmentを使用する) <React.Frament>～</React.Frament>　は　<>～</>　に置き換えることもできる

// import React from "react"   //importが必要

// export default function Home() {
  // return (
    // <React.Fragment>  
      // <h1>CABE</h1>
      // <p>アウトプットしていくサイト</p>
    // </React.Fragment>
  // )
// }

//classは「className」と書く　  classではエラーになる
// export default function Home() {
  // return (
    // <div className="hello">
      // <h1>CABE</h1>
      // <p>アウトプットしていくサイト</p>
    // </div>
  // )
// }

 