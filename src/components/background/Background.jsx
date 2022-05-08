
   
import React from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "./config.js"

export default function Background() {
    return (
        <Particles params={ParticleConfig}></Particles>
    );
}