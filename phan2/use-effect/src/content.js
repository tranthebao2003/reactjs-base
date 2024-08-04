import {useEffect, useState} from 'react'

const tabs = ['posts', 'comments', 'albums']

function Content(){
      
 
  // callback: hàm ta viết để thực hiển các side effect (có trong note) (bắt buộc)
  // [deps] (ko bắt buộc)
  // useEffect(callback, [deps])

  /*
  1. useEffect(callback) (ít dùng trog thực tế)
  - Gọi callback mỗi khi component re-render
  - Gọi callback sau khi component thêm element vào dom
  2. useEffect(callback, [])
  - chỉ gọi callback 1 lần sau khi component mound
  3. useEffect(callback, [deps])
  -- callback sẽ đc gọi lại mỗi khi deps thay đổi

  -	Cả 3 trường hợp này callback luôn đc gọi sau khi component mounted

  vd:
  1. update Dom 
  */



  // useEffect loại 1
  // document.title = title: có thể đưa ở ngoài cũng chạy bình thường, nhưng mà ta phải ưu tiên
  //  ui cho user 
  const [title, setTitle] = useState('')
  useEffect(
    () =>{
      document.title = title
    }
  )

  // // useEffect loại 2
  // const [posts, setPosts] = useState([])
  // useEffect(
    
  //   () => {
  //       // cách lấy api
  //           fetch('https://jsonplaceholder.typicode.com/posts')
  //           .then (res => res.json())
  //           .then (posts => {
  //               setPosts(posts)
  //           }
  //         )  
  //       }
  // , [])

   // useEffect loại 3
   const [type, setType] = useState('posts')
   const [posts, setPosts] = useState([])
   useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then (res => res.json())
        .then (posts => {
             setPosts(posts)}
          )

  }
   ,[type])

  

    return(
        <div>
            {tabs.map(tab => {
              return(
                <button 
                  key={tab}
                  style={type === tab ? {color: '#b8254a'} : {}}
                  onClick={() => setType(tab)}
                >
                  {tab}
                </button>
              )
            })
            }

            <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <ul>
                {posts.map(post => (
                  // thằng albums ko có body do nó mình fix
                  // bằng cách này nếu ko có key body thì lấy title
                    <li key ={post.id}>{post.body || post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content;