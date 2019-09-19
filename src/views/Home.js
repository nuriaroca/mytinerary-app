import React from 'react';


class Home extends React.Component {

    render() {
        return (
            <div>
                <div id="top">
                    <img className="logo" src="../images/MYtineraryLogo.png" alt="logo"></img>
                    <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
                </div>
                <div id="start-container">
                    <p className="start">Start browsing</p>
                    <img className="circled-icon" src="../images/circled-right-2.png" alt="circled-icon"></img>
                    <p>Want to build your own MYtinerary?</p>
                    <div id="login">
                        <div className="login" >Log in</div>
                        <div className="create-account">Create Account</div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Home;
