import { useNavigate } from "react-router-dom"
import Masuk from '../component/masuk'

const login = () => {
    const navigate = useNavigate()
    return (
        <>
        <Masuk/>
        </>
    )
}

export default login