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
                        setColor("purple");
                    }
                    else{
                        setColor("red");
                    }
                }
                if (color == "purple"){
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
                        <div className={"light h1 " + (color == "red" ? "redGlow" : "bg-danger-subtle border-black")}></div>
                    </div>
                    <div onClick={() => setColor("yellow")} className="row justify-content-center my-4">
                        <div className={"light h1 " + (color == "yellow" ? "yellowGlow" : "bg-warning-subtle border-black")}></div>
                    </div>
                    <div onClick={() => setColor("green")} className="row justify-content-center mb-5">
                        <div className={"light h1 " + (color == "green" ? "greenGlow" : "bg-success-subtle border-black")}></div>
                    </div>
                    {
                        //If extra color, add another div with the blue light
                        extraColor 
                        ? <div onClick={() => setColor("purple")} className="row justify-content-center mb-5"><div className={"light h1 " + (color == "purple" ? "purpleGlow" : "bg-primary-subtle border-black")}></div></div> 
                        : null
                    }

                </div>
            </div>
            <div className="m-5 text-center">
                <button onClick={() => setTimerOn(!timerOn)} type="button" className={"btn btn-lg btn-" + (timerOn ? "danger" :"success")}>{timerOn ? "Stop Timer" :"Start Timer"}</button>
                <button onClick={() => setExtraColor(!extraColor)} type="button" className={"btn btn-lg ms-5 btn-" + (extraColor ? "danger" : "success")}>{extraColor ? "Remove Color" :"Add Color"}</button>
            </div>
        </div>
    );
};

export default TrafficLight;