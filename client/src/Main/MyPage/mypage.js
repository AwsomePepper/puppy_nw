// import React, { useState } from "react";

// function MyPage() {
//     const [data, setData] = useState({
//         id: '',
//         email: '',
//         name: '', 
//         p_name: '', });
//     return(


//     );
// }

// export default MyPage;



// import React, { useEffect, useContext, useState } from "react";
// import axios from 'axios';


// const MyPage = () => {
//     const [userData, setUserData] = useState({
//         user_Id: "",
//         user_Password: "",
//         user_Email: "",
//         user_Name: "",
//     });
//     const { loginStatus } = useContext(LoginContext);

//     const { user_Id: user_Id_logon } = loginStatus;

//     const { user_Id, user_Password, user_Email, user_Name } = userData;

//     useEffect(() => {
//         fetchData({
//             method: "POST",
//             data: { user_Id_logon },
//             url: "/users/user",
//         })
//             .then((res) => {
//                 const { data } = res;
//                 setUserData(data);
//             })
//             .catch((err) => {
//                 throw err;
//             });
//     }, [setUserData, user_Id_logon]);
//     return (
//         <>
//             <UserTable userData={userData} />
//         </>
//     );
// };

// export default MyPage;