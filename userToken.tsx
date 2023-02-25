import React, { useState } from "react";

function awsUserDetails() {

    const [userToken, setUserToken] = useState("");
    const [userData, setUserData] = useState({});
}

function awsUserToken(token) {
    const [userToken, setUserToken] = useState("");
    setUserToken(token)
}

function awsUserData(user) {
    const [userData, setUserData] = useState({});
    setUserData(user)
}

export { awsUserDetails, awsUserToken, awsUserData };



// { userToken, userData, setUserToken, setUserData };