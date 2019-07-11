import React from 'react';

const Header = (props) => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper light-blue darken-3">
                    <a href="www.facebook.com" className="brand-logo center">{props.titulo}</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;