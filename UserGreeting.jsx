import PropTypes from 'prop-types'

function UserGreeting(props){

    const welcome = <h2 className="welcome">Welcome {props.username}</h2>
    const retry = <h2 className="retry">Please Login to continue</h2>

    return(
        props.isLoggedIn ? welcome : retry
    );

}

UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting