import React, {Fragment} from 'react';
import {ReactComponent as Shape} from '../images/shape.svg';

function Welcome(){
    return(
        <div id="welcome">
            <div id="logo-area">
                <div id="initals">
                    <span>FL</span>
                </div>
                <Shape />
            </div>
            <div id="textarea">
                <p>forÊver london</p>
                <p>lashes</p>
            </div>
        </div>
    )
}

function Page(){
    return(
        <div id="home">
            <p>forever london</p>
        </div>
    )
}
function Home() {
    return (
        <Fragment>
            <Welcome />
            <Page />
        </Fragment>
    )
}

export default Home;
