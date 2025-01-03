import ProfilePic from './assets/RBST.jpg'

function Card(){
    return(
        <div className="card">
            <img className="img" src={ProfilePic} alt="RBST picture" height="150" width="150" />
            <h2 className="title">Raunak Tuladhar</h2>
            <p className="text">Hi I'm Raunak, Who the hell r u?</p>
        </div>
    );
}

export default Card