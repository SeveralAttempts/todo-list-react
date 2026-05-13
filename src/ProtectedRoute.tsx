import { Navigate } from "react-router-dom";
//TODO: Implement authentication and authorization 
// logic to determine if the user is authenticated or not.
// Need to return outlet if loged in successully.
function ProtectedRoute() {
    return <Navigate to='/login' />
}

export default ProtectedRoute;