import React from "react";

function Home(){
const logout=()=>{
    localStorage.removeItem("signUp");
    window.location.reload();
}
const DeleteAccount=()=>{
    localStorage.clear();
    window.location.reload();
}

    return (
<div className="home">
    <h1>Homepage</h1>
    <h3>WelCome {localStorage.getItem('name')}</h3>
    <div className="updatebuttons">
    <button onClick={logout} className="logout">LogOut</button>
    <button onClick={DeleteAccount} className="delete">Delete Account</button>
    </div>
</div>
    );
}

export default Home;
