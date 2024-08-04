
// 1. Random gift
// 2. Two-way binding: ràng buộc 2 chiều (1 chiều là giao diện, 1 chiều là dữ liệu)
// tóm lại gõ bên ngoài bên trog thanh đổi, đổi bên trong bên ngoài thay đổi thì gọi là 
// two-way binding

import { useState } from "react";

// bài 1
// const gifts = ['CPU I9', 'RAM 32GB', 'KEYBOARD RGB']


// bài 2.2
const courses = [
  {
    id: 1,
    name: 'html, css'
  },

  {
    id: 2,
    name: 'jvs'
  },

  {
    id: 3,
    name: 'react'
  }
]

function App() {
  // bài 1
  // const handleGift = () =>{
  //   // [parseInt(Math.random()*3 : nó sẽ trả về số nhỏ hơn 3 rồi làm tròn xuống số nguyên
  //     var gift = gifts[Math.floor(Math.random()*3)]
  //     setIndex(gift)
  // }

  // const [index, setIndex] = useState()
  // return (
  //   <div style={{padding: 32}}>
  //     {/* index || 'Chưa có thưởng': nếu chưa có thưởng thì nó sẽ hiện 'Chưa có thưởng' */}
  //     <h1>{index || 'Chưa có thưởng'}</h1>
  //     <button onClick={handleGift}>
  //       lấy thưởng
  //     </button>
  //   </div>
  // );


  // // bài 2.1
  // const[name, setName] = useState('')
  // const[email, setEmai] = useState('')

  // const handleSubmit = () =>{
  //   // Call api
  //   console.log({
  //     name, email
  //   })
  // }
  // return(
   
  //   <div style={{padding: 32}}>
  //     <input
  //     value={name}
  //     // e (event object), e.target (thẻ input), e.target.value chính là giá trị trog ô input đó
  //     onChange={(e) => {
  //       setName(e.target.value)
  //     }}
  //     />

  //   <input
  //     value={email}
  //     // e (event object), e.target (thẻ input), e.target.value chính là giá trị trog ô input đó
  //     onChange={(e) => {
  //       setEmai(e.target.value)
  //     }}
  //     />

  //     <button onClick={handleSubmit}>Regiter</button>
  //   </div>
  // )


  // // bài 2.2 (chọn với radioBox chỉ đc chọn 1)
  // const [checked, setChecked] = useState(2)
  // console.log(checked)
  // const handleSubmit = () =>{
  //   // call api
  //   console.log({id: checked})
  // }
  // return(
  //   <div style={{padding: 32}}>
  //     {courses.map(
  //       (course) => 
  //       {
  //         // luôn cho key ở thẻ cấp cao nhất nằm ngoài cùng
  //         return (
  //           <div key = {course.id}>
  //             <input 
  //             type="radio"
  //             onChange={() => setChecked(course.id)}
  //             // checked = {checked === course.id}: biểu thức bên trog đúng thì nó mới check
  //             checked = {checked === course.id}
  //             />
  //             {course.name}
  //           </div>
  //         )
  //       }
  //     )}

  //     <button onClick={handleSubmit}>
  //       Resigter
  //     </button>
  //   </div>
  // )

  // bài 2.3 (chọn với textBox chọn nhiều)
  const [checked, setChecked] = useState([])
  console.log(checked)

  const handlecheck = (id) =>{
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if(isChecked){
        // uncheck
        // filter: tìm kiếm và trả về all đối tượng thoải mãn đk tìm kiếm
        // vậy cụ thể nó sẽ tìm kiếm và trả về những thằng ko phải là id
        // vậy nếu mik click vào 1 thằng đã đc click trx đó thì nó sẽ
        // trả về những item mà nó id khác cái id mik đã click
        return checked.filter(item => item !== id)
      } 
      else{
        return[...prev, id]
      }
    })
  }

  const handleSubmit = () =>{
    // call api
    console.log({ids: checked})
  }
  return(
    <div style={{padding: 32}}>
      {courses.map(
        (course) => 
        {
          // luôn cho key ở thẻ cấp cao nhất nằm ngoài cùng
          return (
            <div key = {course.id}>
              <input 
              type="checkbox"
              // checked.includes(course.id): nó sẽ trả về true nếu có course.id trong mảng checked
              checked={checked.includes(course.id)}
              onChange = {() => handlecheck(course.id)}
              />

              {course.name}
            </div>
          )
        }
      )}

      <button onClick={handleSubmit}>
        Resigter
      </button>
    </div>
  )
}

export default App;
