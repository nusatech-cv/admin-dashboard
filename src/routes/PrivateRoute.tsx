import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {
    let auth = {'token':sessionStorage.getItem('csrfToken')}
    return(
        auth.token ? <Outlet/> : <Navigate to="/auth/signin"/>
    )
}

export default PrivateRoute