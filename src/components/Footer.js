import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="text-center">
                <small className="copyright">
                    Designed with <i className="fa fa-heart" /> by{' '}
                    <a
                        href="http://themes.3rdwavemedia.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Xiaoying Riley
                    </a>{' '}
                    for developers
                </small>
                <br />
                <small className="copyright">
                    2019 © By{' '}
                    <a
                        href="https://github.com/nawin9"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Nawin Kim
                    </a>
                </small>
            </div>
        </footer>
    );
};

export default Footer;
