import React, { useState, useEffect } from "react";

//create your first component
const TrafficLight = () => {
    const [color, setColor] = useState("danger");
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        const rotateLight = setInterval(() => {
            if (timerOn) {
                if (color == "danger"){
                    setColor("warning");
                }
                else if (color == "warning"){
                    setColor("success");
                }
                else {
                    setColor("danger");
                }
            }
        }, 3000);
        return () => {
            clearInterval(rotateLight); // Clear the interval when the component unmounts or dependencies change
        };
    });

    return (
        <div>
            <div className="row justify-content-center">
                <div className="top border-start border-end border-5 border-black">
                    
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-2 trafficLight border border-5 border-black">
                    <div onClick={() => setColor("danger")} className="row justify-content-center mt-5">
                        <div className={"light rounded-circle h1 border border-5 bg-" + (color == "danger" ? "danger border-danger-subtle" : "danger-subtle border-black")}></div>
                    </div>
                    <div onClick={() => setColor("warning")} className="row justify-content-center my-4">
                        <div className={"light rounded-circle h1 border border-5 bg-" + (color == "warning" ? "warning border-warning-subtle" : "warning-subtle border-black")}></div>
                    </div>
                    <div onClick={() => setColor("success")} className="row justify-content-center mb-5">
                        <div className={"light rounded-circle h1 border border-5 bg-" + (color == "success" ? "success border-success-subtle" : "success-subtle border-black")}></div>
                    </div>
                </div>
            </div>
            <div className="m-5 text-center">
                <button onClick={() => setTimerOn(!timerOn)} type="button" class={"btn btn-lg btn-" + (timerOn ? "danger" :"success")}>{timerOn ? "Stop Timer" :"Start Timer"}</button>
            </div>
        </div>
    );
};

export default TrafficLight;