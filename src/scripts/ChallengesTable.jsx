const ChallengesTable = () => {
    const randomNumber = (x,y) => {
        let first = Math.floor(Math.random() * x);
        let last = Math.floor(Math.random() * y);

        return `${first}.${last}%`;
    };

    return (
        <>
            <div className = "tableBox">
                <div className = "tableBoxItem">
                    <ul>
                        <li>Challenges Table</li>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>
                </div>
                <div className = "tableBoxItem">
                    Text Content
                </div>
                <div className = "tableBoxItem">
                    Text Content
                </div>
                <div className = "tableBoxItem">
                    Text Content
                </div>
                <div className = "tableBoxItem">
                    Text Content
                </div>
                <div className = "tableBoxItem">
                    Text Content
                </div>
                <div className = "tableBoxItem">
                    {randomNumber(100,100)}
                </div>
                <div className = "tableBoxItem">
                    {randomNumber(100,100)}
                </div>
                <div className = "tableBoxItem">
                    {randomNumber(100,100)}
                </div>
                <div className = "tableBoxItem">
                    TextContent
                </div>
                <div className = "tableBoxItem">
                    {randomNumber(100,100)}
                </div>
                <div className = "tableBoxItem">
                    {randomNumber(100,100)}
                </div>
                <div className = "tableBoxItem">
                    {randomNumber(100,100)}
                </div>
                <div className = "tableBoxItem">
                    TextContent
                </div>
                <div className = "tableBoxItem">
                    {randomNumber(100,100)}
                </div>
                <div className = "tableBoxItem">
                    {randomNumber(100,100)}
                </div>
                <div className = "tableBoxItem">
                    {randomNumber(100,100)}
                </div>
            </div>
        </>
    );
}

export default ChallengesTable;
