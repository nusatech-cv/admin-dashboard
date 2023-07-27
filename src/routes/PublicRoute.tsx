import { Outlet, Navigate } from 'react-router-dom'

const PublicRoute = () => {
    let auth = {'token':sessionStorage.getItem('csrfToken')}
    return(
        auth.token ? <Navigate to="/"/> : <Outlet/>
    )
}

export default PublicRoute