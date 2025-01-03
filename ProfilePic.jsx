
function ProfilePic(){

    const imageURL = './src/assets/RBST.jpg';
    const handleClick = () => console.log("OUCH!");

    return(
        <img onClick={handleClick} src={imageURL} alt="RBST" height="150px" width="150px" />
    );
}

export default ProfilePic