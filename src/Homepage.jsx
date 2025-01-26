import React, {useEffect} from 'react';
import Robot from './images/robot.png';
import RankedUsers from './scripts/RankedUsers.jsx';
import TextContent from './scripts/TextContent.jsx';
import LineChart from './grafovi/LineChart.jsx';
import DoughnutChart from './grafovi/DoughnutChart.jsx';
import AnalyticsInfo from './scripts/AnalyticsInfo.jsx';
import ChallengesItems from './scripts/ChallengesItems.jsx';
import ChallengesTable from './scripts/ChallengesTable.jsx';
import AnalyticBox from './scripts/AnalyticBox.jsx';
import { faCog, faFile, faHome, faMugHot, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Homepage() {
    const sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms))};

    const handleLoad = async () => {
        let content = "";
        let text = `
<b>import</b> os

x = <b>str</b><b>(</b><b>"Sirutka"</b><b>)</b>
mood = <b>str</b><b>(</b><b>input</b><b>(</b><b>"Mood: "</b><b>)</b><b>)</b>

<b>def</b> <b>helloWorld</b><b>(x)</b> -> <b>str</b>:
    <b>if</b><b>(</b>mood == <b>"good"</b><b>)</b>:
        <b>print</b><b>(</b><b>f</b><b>"Welcome to </b><b>{</b>x<b>}</b><b> challenges"</b><b>)</b>
    <b>else</b>:
        os.<b>system</b><b>(</b><b>"cls"</b><b>)</b>
        <b>exit</b><b>()</b>
`;

        for(let i = 0; i <= text.length-1; i++) {
            content += text[i];
            document.getElementById('code').innerHTML = content;
            await sleep(5);
        }
    }

    useEffect(() => {
        handleLoad();
      }, []);
    return(
        <div className = "mainArea">
            <div className = "mainSection">
                <div className = "navbar">
                    <ul className = "navbarBox">
                        <li className = "navbarItem">logo</li>
                        <li className = "navbarItem">Dashboard</li>
                        <li className = "navbarItem">Solutions</li>
                        <li className = "navbarItem">Challenges</li>
                        <li className = "navbarItem">Tasks</li>
                        <li className = "navbarItem">Account</li>
                    </ul>
                </div>
                <div className = "mainBox">
                    <div className = "childBox">
                        <h1>Welcome to <b>Sirutka</b> challenges</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur illum quo, eum architecto voluptatum neque ipsa repellat dignissimos, perspiciatis, facere voluptas modi consequuntur deleniti sequi quasi provident voluptates ratione cum.</p><br></br>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsa libero quas, delectus nulla exercitationem et. Recusandae iste natus repellendus, cum corrupti quas ex expedita totam a sunt doloribus minus?</p>
                        <div className = "btnsBox">
                            <button>Challenges</button>
                            <button>Dashboard</button>
                        </div>
                    </div>
                    <div className = "childBox">
                        <div className = "codeBox">
                            <pre id = "code"></pre>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "infoSection">
                <div className = "analyticsChild">
                    <div className = "graphStats">
                        <div className = "graphBox">
                            <LineChart />
                        </div>
                    </div>
                    <div className = "nftBox">
                        <img src = {Robot}></img>
                    </div>
                </div>
                <div className = "analyticsChild">
                    <div className = "challengersBox">
                        <ul>
                            <RankedUsers serialNumber = "1." icon = "😊" username = "String" rank = "Owner" date = "31.12.2024."/>
                            <RankedUsers serialNumber = "2." icon = "😒" username = "Pero" rank = "User" date = "31.12.2024."/>
                            <RankedUsers serialNumber = "3." icon = "🎉" username = "Ters"  rank = "Moderator" date = "31.12.2024."/>
                            <RankedUsers serialNumber = "4." icon = "😜" username = "Krosan" rank = "User" date = "31.12.2024."/>
                            <RankedUsers serialNumber = "5." icon = "🎁" username = "Kajmak" rank = "Admin" date = "31.12.2024."/>
                        </ul>
                    </div>
                    <div className = "statsBox">
                        <div className = "doughnutBox">
                            <DoughnutChart />
                        </div>
                        <ul className = "doughnutInfo">
                            <AnalyticsInfo title = "Admin" size = '30%' />
                            <AnalyticsInfo title = "Moderator" size = '50%'/>
                            <AnalyticsInfo title = "User" site = '70%' />
                        </ul>
                    </div>
                </div>
            </div>
            <div className = "challengesSection">
                <div className = "challengesTitle">
                    <h1>Challenges Informations</h1><br/>
                    <p>Here you can find all the information for the challenges.</p>
                </div>
                <div className = "challengesBoxes">
                    <div className="challengesBoxItems">
                        <div className = "challengesChild">
                            <ChallengesTable></ChallengesTable>
                        </div>
                        <div className = "challengesChild">
                            <TextContent></TextContent>
                        </div>
                    </div>
                    <div className="challengesBoxItems">
                        <div className = "challengesChild">
                            <div className = "challengesInfo">
                                <ChallengesItems percentage = "22%" icon = {faMugHot}></ChallengesItems>
                            </div>
                            <div className = "challengesInfo">
                                <ChallengesItems percentage = "45%" icon = {faCog}></ChallengesItems>
                            </div>
                        </div>
                        <div className = "challengesChild">
                            <TextContent></TextContent>
                        </div>
                    </div>
                    <div className="challengesBoxItems">
                        <div className = "challengesChild">
                            <div class = "filesBox">
                                <FontAwesomeIcon icon = {faFile}></FontAwesomeIcon>
                            </div>
                            <div class = "filesBox">
                                <FontAwesomeIcon icon = {faUser}></FontAwesomeIcon>
                                <h1>Upload Files</h1>
                                <p>Here you can upload your files.</p>
                            </div>
                        </div>
                        <div className = "challengesChild">
                            <TextContent></TextContent>
                        </div>
                    </div>
                    <div className="challengesBoxItems">
                        <div className = "challengesChild">
                            <div><FontAwesomeIcon icon = {faMugHot}></FontAwesomeIcon></div>
                            <div><FontAwesomeIcon icon = {faHome}></FontAwesomeIcon></div>
                        </div>
                        <div className = "challengesChild">
                            <TextContent></TextContent>
                        </div>
                    </div>
                    <div className="challengesBoxItems">
                        <div className = "challengesChild">
                            <AnalyticBox></AnalyticBox>
                        </div>
                        <div className = "challengesChild">
                            <TextContent></TextContent>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footerSection'>
                <div className = "footer">
                Copyright © 2025, made by kajmak.com, all rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Homepage;
