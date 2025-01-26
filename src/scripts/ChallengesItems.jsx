import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChallengesItems = (props) => {
    return (
        <>
            <div className = "challengesItems">
                <div><FontAwesomeIcon icon={props.icon}/></div>
            </div>
            <div className = "challengesItems">
                <h1>Informations Title</h1>
                <p>Lorem ipsum dolor sit, amet consectetur.</p>
            </div>
            <div className = "challengesItems">
                {props.percentage}
            </div>
        </>
    );
}

export default ChallengesItems;
