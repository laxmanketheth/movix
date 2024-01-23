import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./style.scss";

const CircleRating = ({ rating }) => { //rating is coming as a prop from parent component//
    return (
        <div className="circleRating">
            <CircularProgressbar
            //we have used CircularProgressbar component from a library and  
            //and it takes following properties.
            // also we have given custom styling in forms of different colors
                value={rating}
                maxValue={10}
                text={rating +'*'}
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                })}
            />
        </div>
    );
};

export default CircleRating;

