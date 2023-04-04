import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import style from "./ProfileUser.module.css";
import { getUsers } from "../../redux/actions";

const ProfileUser = () => {
  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);

  useEffect(() => {
    if (!isAuthenticated || !allUsers) {
      window.location.href = "/";      
    } else {
      dispatch(getUsers());
    }
  }, [isAuthenticated]);

  const data = () => {
    if(isAuthenticated && allUsers) {
        return allUsers.find((u) => u.email === user.email); 
    }
        return null;
  };

  const users = data()

  const { name, email, image } = users ?? {};

  return (
    <div className={style.Background}>
      <div className={style.container}>
        <h1 className={style.title}>Your Profile</h1>
        <br />

        <div className={style.containerData2}>
          {isAuthenticated && users  && (
            <div>              
              <img className={style.image} src={image} alt="" />              
              <br />  
              <h2 className={style.name}>Name: {name || " "}</h2>
              <br />
              <h2 className={style.email}>Email: {email || " "}</h2>
            </div>
          )}

          <div>
            <Link to={"/update/"}>
              <button className={style.iconRegisterButton}>
                <i className="fas fa-edit"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;