import { useState } from "react";


function App() {
  const storageJobs = localStorage.getItem('jobs')
  // phải chuỗi chuỗi json thành mảng
  const storageJobsArray = JSON.parse(storageJobs)

  const [job, setJob] = useState('')
  // ?? là toán tử nullish nó kiểm tra nếu vế trái là undefine or null 
  // thì nó sẽ trả về vế phải còn ngược lại nó sẽ trả về vế trái
  // ở đây ta dùng nó để tránh TH đầu khi localStorage chưa có j thì
  // thằng map nó đọc null sẽ bị lỗi
  const [jobs, seJobs] = useState(storageJobsArray ?? [])

  const handelSubmit = () =>{
    seJobs((prev) => {
      const newJobs =  [...prev, job]
      // save to local storage
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)
      return newJobs
    })
    setJob('')

    
  }

  return (
    <div style={{padding: 32}}>
      <input
      value={job}
      onChange={(e) => setJob(e.target.value)}
      />
      <button onClick={handelSubmit}>Add</button>

      <ul>
        {
          jobs.map((job, index) => {
            return(
              <li key={index}>{job}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
