// import { useState } from "react";

// function Review() {
//   let [data, setData] = useState([
//     {
//       id: "1",
//       itemName: "점심먹기",
//       like: false,
//     },
//   ]);

//   let [inputValue, setInputValue] = useState("");
//   let [like,setLike] = useState(false);

// if(like === true){
//     return(
//         <div style={itemStyle(false)} >
// <form >
//     <button
//     type="submit"
//     onClick={(e)=>{
//         e.preventDefault();

//         let temp = data.map((tempData)=>{
//             if(tempData.id === dataId){

//             }
//         })
//     }}
// </form>
//         </div>
//     )
// }

//   return (
//     <div className="Section">
//       <form>
//         <input
//           type="text"
//           value={inputValue}
//           name="value"
//           placeholder="리뷰를 10글자 이상 작성해주세요."
//           onChange={(event) => {
//             setInputValue(event.target.value);
//           }}
//         ></input>
//         <button
//           onClick={(event) => {
//             event.preventDefault(); //form 양식에서 버튼이눌리면 (submit) -> submit일어나면 페이지갱신

//             //여기서 먼저 값이 있는지 체크

//             //안되는 경우면 수행이 안되도록 미리필터
//             if (inputValue.trim() === "") {
//               //텍스트가 없으면
//               console.log("넌 저장 안해준다");
//               return; //종료
//             }

//             let addItem = {
//               id: data.length + 1,
//               itemName: inputValue.trim(),
//               like: false,
//             };
//             let temp = [...data];
//             temp.push(addItem);
//             setData(temp);

//             //여기서 지워야됩니다~~~
//             setInputValue("");
//           }}
//         >
//           저장
//         </button>
//       </form>

//       {data.map((data,i)=>{
//         return(
//             <ReviewItem>

//             </ReviewItem>
//         )
//       })}
//     </div>
//   );
// }
// export default Review;
