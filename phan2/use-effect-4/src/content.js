import { useEffect, useState } from "react"



const lessons = [
    {
        id: 1,
        name: 'React js là gì?'
    },

    {
        id: 2,
        name: 'spa/mpa là gì?'
    },

    {
        id: 3,
        name: 'Arrow function'
    }
]

function Content(){
    const [lessonId, setlessonId] = useState(1)

    useEffect(() => {
        const handleComment = (e) => {
            console.log(e.detail)
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return() => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])
    
    return(
        <div>
           <ul>
            {lessons.map((lesson) => {
                return(
                    <li key={lesson.id} style={{color: lesson.id == lessonId ? 'red' : 'black'}}
                        onClick={() => setlessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                )
            })}
           </ul>
        </div>
       
    )
}

export default Content