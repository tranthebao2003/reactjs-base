import { useEffect, useState } from "react"

function Content(){
    const [avatar, setAvatar] = useState()

    useEffect(() => {

        // cleanup
        return() =>{
            // true && expression => expression
            // false, null ,undefind && expression => ignore
            // URL.revokeObjectURL(nhận link mà nó đã tạo ra bằng method createObjectURL)
           avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        // URL.createObjectURL(file): tạo 1 link tạm của img nếu trang này còn mở thì link vẫn xài đc
        // file.preview: vì file là 1 object nên mik có thể tạo 1 props
        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }
    return(
        <div>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width='80%'></img>
            )}
        </div>
       
    )
}

export default Content