import Logo from '../images/logo.png';

const AnalyticBox = () => {
    return(
        <>
            <div className = "AnalyticBox">
                <div className = "AnalyticBoxList">
                    <div className = "AnalyticBoxItems">
                        <img src = {Logo}/>
                    </div>
                    <div className = "AnalyticBoxItems">
                        <h1>Owner</h1>
                        <p>Owner of this website is String.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AnalyticBox;
