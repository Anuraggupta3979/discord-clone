import React, { useEffect } from "react";
import "./App.css";
///BEM Naming Convention
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Components/Login";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className={user ? "app" : ""}>
      {user ? (
        <>
          <Sidebar></Sidebar>
          <Chat></Chat>
        </>
      ) : (
        <>
          <Login></Login>
        </>
      )}
    </div>
  );
}

export default App;
