import { useEffect } from "react"
import axios from 'axios'

const Display = ({ studentList, setStudentList }: { studentList: { name: string, address: string, id?:number }[], setStudentList: any }) => {
    
    useEffect(() => {
        axios
        .get('http://localhost:8080/student/getAll')
        .then((res) => {
            console.log("RES of Students: ", res)
            setStudentList(res.data)
        })
        .catch((err) => {
            console.log("Hopefully no Error here!: ", err)
        })
    }, [])
    
    return (
        <div className="w-3/4 rounded-2xl shadow shadow-black p-5 border-4 border-blue-500 bg-slate-900/70 text-white flex flex-col items-center justify-center gap-2">
            <h1 className="text-2xl font-bold border-b-2">Display Student List</h1>
            {
                studentList.map((student) => (
                    <div key={student.id} className="w-fit min-w-[150px] h-[100px] px-5 py-3 rounded-3xl shadow shadow-blue-600 bg-slate-800/60 flex flex-col justify-center items-center gap-2">
                        <h2>{student.name}</h2>
                        <h3>{student.address}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default Display
