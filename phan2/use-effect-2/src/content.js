import { useEffect, useState } from "react"

function Content(){
    const [comments, setComments] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => setComments(posts))
    }, [])

    const [showGoToTop, setShowGoToTop] =useState(false)
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY >= 200){
                //show
                setShowGoToTop(true)
            }  else{
                //hide
                setShowGoToTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        // cleanup function
        return() =>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const[width, setWidth] = useState(window.innerWidth)

    useEffect(()=>{
        const updateSize = () =>{
            setWidth(window.innerWidth)
        }

        // resize: kích hoạt khi mình thay đổi kích thước window
        window.addEventListener('resize', updateSize)

         // cleanup function
         return() =>{
            window.removeEventListener('resize', updateSize)
        }
    }, [])

    // useEffect vith timer functions
    const [countdown, setCountdown] = useState(180)
    useEffect(() =>{
        // setInterval: nó trả về 1 timer id
        const timerID = setInterval(() => {
            // ở đây ta phải dùng callback chứ ko dùng countdown - 1
            // là bởi vì nếu dùng thì nó chỉ tham chiếu trong useEffect
            // và ko đạt đc hiểu quả mong muốn
            setCountdown(preState => preState - 1)
            
        }, 1000)

        return () => clearInterval(timerID)
    }, [])
    
    return(
        <div>
            <h1>width screen: {width}</h1>
            <h1>{countdown}</h1>
            <ul>
                {comments.map(comment => {
                    return(
                        <li key ={comment.id}>{comment.title}</li>
                    )
                })}
            </ul>

            { showGoToTop && (
                <button style={{
                    position: 'fixed',
                    right: 20,
                    top: 20
                }}>
                    Go to top
                </button>
            )}

        {/* // useEffect vith timer functions */}
            
        </div>
       
    )
}

export default Content