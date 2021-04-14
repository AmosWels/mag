// export default function authHeader() {
//     const user = JSON.parse(sessionStorage.getItem('user'));

//     if (user && user.accessToken) {
//       return { Authorization: 'Bearer ' + user.accessToken };
//     } else {
//       return {};
//     }
//   }

export default function authHeader() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { 
        "x-access-token": user.accessToken,
        "Content-Type": "application/json;charset=UTF-8" 
    };
  } else {
    return {};
  }
}
