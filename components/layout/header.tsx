import React from "react";

const Header = () => {
    return(
        <div style={{width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr"}}>
            <div style={{padding: "10px", display: "flex"}}>
                <img src="" width="20px" height="20px" />
                <h1>Diagram builder</h1>
            </div>
        </div>
    );
}

export default Header;