import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const AnalyticsInfo = ({title, size}) => {
    let titleColor;
    let lineColor; 

    if(title === "Admin") {
        titleColor = lineColor = "#00affa"
    } else if(title === "Moderator") {
        titleColor = lineColor = "rgb(5, 255, 5)";
    } else if(title === "User") {
        titleColor = lineColor = "gray";
    }

    return (
        <li className = "doughnutList">
            <div className = "doughnutListItems">
                <FontAwesomeIcon icon={faUser} />
            </div>
            <div className = "doughnutListItems">
                <div className = "doughnutTitleBox" style = {{ color: titleColor, fontFamily: 'Arial', fontWeight: "bold", textShadow: `${titleColor} 1px 0 10px`,}}>
                    {title}
                </div>
                <div className = "doughnutLineBox">
                    <div style = {{background: lineColor, width: size}}></div>
                </div>
            </div>
            <div className = "doughnutListItems">

            </div>
        </li>
    );
}

export default AnalyticsInfo;
