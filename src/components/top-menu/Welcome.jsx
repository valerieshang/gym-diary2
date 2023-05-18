const Welcome = ({currentUser}) => {

    return (
        <div className="border border-black p-4 flex flex-col justify-center">
            Welcome, {currentUser}
        </div>
    );
}

export default Welcome;