import React from "react";

const ContentContainer = (props: {children: any}) => {
    return(
        <div style={{backgroundColor: "#DDDDDD", padding: "20px"}}>
            {props.children}
        </div>
    );
}

export default ContentContainer;