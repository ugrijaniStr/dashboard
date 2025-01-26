const RankedUsers = ({ serialNumber, icon, username, rank, date }) => {
    let rankColor;
    if (username === "String") {
        rankColor = "red";
    } else if (username === "Ters") {
        rankColor = "rgb(5, 255, 5)";
    } else if (username === "Kajmak") {
        rankColor = "#00affa";
    } else {
        rankColor = 'gray';
    }

    return(
        <li className = "challengersItems">
            <div className="challengersList">
                {serialNumber}
            </div>
            <div className="challengersList">
                {icon}
            </div>
            <div className="challengersList">
                {username}
            </div>
            <div className="challengersList" style={{ color: rankColor, textShadow: `${rankColor} 1px 0 10px`, fontWeight: 'bold' }}>
                {rank}
            </div>
            <div className="challengersList">
                {date}
            </div>
        </li>
    );
}

export default RankedUsers;
