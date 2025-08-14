import React, { useState } from "react";

//create your first component
const TrafficLight = () => {
    const [color, setColor] = useState("danger")

    return (
        
        <div>
            <div className="row justify-content-center">
                <div className="top bg-warning-subtle border-start border-end border-5 border-black">
                    
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="trafficLight bg-warning-subtle border border-5 border-black">
                    <div className="row justify-content-center mt-5">
                        <div className="light border border-5 border-black rounded-circle bg-danger h-1">
                        </div>
                    </div>
                    <div className="row justify-content-center my-4">
                        <div className="light border border-5 border-black rounded-circle bg-warning h-1"></div>
                    </div>
                    <div className="row justify-content-center mb-5">
                        <div className="light border border-5 border-black rounded-circle bg-success h-1"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrafficLight;