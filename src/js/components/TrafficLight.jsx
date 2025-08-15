import React, { useState, useEffect } from "react";

//create your first component
const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [timerOn, setTimerOn] = useState(false);
    const [extraColor, setExtraColor] = useState(false);

    useEffect(() => {
        //Rotate light color when timer is on
        const rotateLight = setInterval(() => {
            if (timerOn) {
                if (color == "red"){
                    setColor("yellow");
                }
                if (color == "yellow"){
                    setColor("green");
                }
                if (color == "green"){
                    //If extra color is active, include it in rotation
                    if (extraColor){
                        setColor("blue");
                    }
                    else{
                        setColor("red");
                    }
                }
                if (color == "blue"){
                    setColor("red");
                }
            }
        }, 3000);
        return () => {
            clearInterval(rotateLight);
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
                    <div onClick={() => setColor("red")} className="row justify-content-center mt-5">
                        <div className={"light rounded-circle h1 border border-5 bg-" + (color == "red" ? "danger border-danger-subtle redGlow" : "danger-subtle border-black")}></div>
                    </div>
                    <div onClick={() => setColor("yellow")} className="row justify-content-center my-4">
                        <div className={"light rounded-circle h1 border border-5 bg-" + (color == "yellow" ? "warning border-warning-subtle yellowGlow" : "warning-subtle border-black")}></div>
                    </div>
                    <div onClick={() => setColor("green")} className="row justify-content-center mb-5">
                        <div className={"light rounded-circle h1 border border-5 bg-" + (color == "green" ? "success border-success-subtle greenGlow" : "success-subtle border-black")}></div>
                    </div>
                    {
                        //If extra color, add another div with the blue light
                        extraColor 
                        ? <div onClick={() => setColor("blue")} className="row justify-content-center mb-5"><div className={"light rounded-circle h1 border border-5 bg-" + (color == "blue" ? "primary border-primary-subtle blueGlow" : "primary-subtle border-black")}></div></div> 
                        : null
                    }

                </div>
            </div>
            <div className="m-5 text-center">
                <button onClick={() => setTimerOn(!timerOn)} type="button" class={"btn btn-lg btn-" + (timerOn ? "danger" :"success")}>{timerOn ? "Stop Timer" :"Start Timer"}</button>
                <button onClick={() => setExtraColor(!extraColor)} type="button" class={"btn btn-lg ms-5 btn-" + (extraColor ? "danger" : "success")}>{extraColor ? "Remove Color" :"Add Color"}</button>
            </div>
        </div>
    );
};

export default TrafficLight;