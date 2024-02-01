import React from "react";
import Team2 from "./Team2";
import Team1 from "./Team1";
import Team3 from "./Team3";
import Team4 from "./Team4";
import Team5 from "./Team5";
import Team6 from "./Team6";
import Team7 from "./Team7";
import Team8 from "./Team8";

function Team() {
    return (
        <div className="section-team">
            <center id="under-waterfall">
                <img alt="rocks" id="rocks" src={"assets/images/Under_Waterfall.webp"}/>
                <div className="whitepaper">
                    <a
                        href="https://valarok.gitbook.io/valarok-whitepaper/"
                        style={{ textDecoration: "none", color: "#63ffe5", cursor: "pointer" }}
                        target="_blank"
                    >
                        Whitepaper
                    </a>
                </div>
                <img
                    alt="teamtitle"
                    id="team-title"
                    src={"assets/images/teamtitle.webp"}
                />
            </center>
            <div className="container team_new">
                <div className="row">
                    <Team1/>
                    <Team2/>
                    <Team5/>
                    <Team3/>
                    <Team8/>
                    <Team6/>
                    <div className="team_child">
                        <Team4/>
                        <Team7/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
