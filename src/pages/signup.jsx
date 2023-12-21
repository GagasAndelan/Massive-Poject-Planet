import { useNavigate } from "react-router-dom"
import Daftar from '../component/daftar'

const login = () => {
    const navigate = useNavigate()
    return (
        <>
        <Daftar/>
        <button onClick={() => navigate('/login')}>GOTO LOGIN</button>
        </>
    )
}

export default login