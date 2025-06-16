import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authService from '../Appwrite/authUser';
import { login } from '../Store/UserSlice';

const ProtectedRoute = ({ children, authentication = true }) => {
    const dispatch = useDispatch();
    const authStatus = useSelector(state => state.auth.authentic);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const userData = await authService.getCurrentUser()
                console.log("check user session", userData)
                if(userData){
                    dispatch(login(userData))
                }

            } catch (error) {
                console.error("Session checked failed ", error.message)
                dispatch(logout());
            }
            setLoading(false);
        };
        checkAuth();
    }, [dispatch]);

    useEffect(() => {
        if (!loading) {
            if (authentication && authentication !== authStatus) {
                navigate("/login");
            } else if (!authentication && authStatus !== authentication) {
                navigate("/");
            }
        }
    }, [authStatus, authentication, navigate, loading]);

    return loading ? <>Loading...</> : <>{children}</>;
};

export default ProtectedRoute;
