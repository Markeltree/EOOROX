import React from "react";
import Breadcrumb from "../../Utilities/Breadcrumb/Breadcrumb";
import Videos from "../../Utilities/Videos/Videos";

const LiveStreaming =()=>{
    return(
        <React.Fragment>
            <Breadcrumb pageTitle={'Live Streaming'} currentPage={'Live Streaming'} />
            <Videos/>
        </React.Fragment>
    );
}

export default LiveStreaming;