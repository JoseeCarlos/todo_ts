import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../redux/configureStore";
import { getToken } from "../../utils/auth";
import { setActiveUser } from "../../redux/auth";

export const RedirectRoute = ({children, privatePath}: {children: any, privatePath?: boolean}) => {
    const [loading, setLoading] = useState(true);
    // const [activeUser, setActiveUser] = useState(false);
    const {activeUser}=useSelector((s:RootState)=>s.auth);
    const dispatch = useDispatch();
    const shouldShow = useMemo(() => {
        if(privatePath) return activeUser;
        return !activeUser; 
    }, [activeUser, privatePath]);
    const redirectPath = privatePath ? "/" : "/todo";

    useEffect(() => {
        const token = getToken()
        dispatch(setActiveUser(token));
        if (token) {
            setActiveUser(true)
        }
        setLoading(false)
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    if (shouldShow) 
        return children


    return (
        <Navigate to={redirectPath}/>
    )

}