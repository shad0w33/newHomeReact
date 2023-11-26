import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../../footer.css'
import AppStoreIcon from '../images/app-store.png';
import GooglePlayIcon from '../images/google-play.png';

export function Footer() {
    return (
        <div className="footer">
            <div className="rules">
            <div className="rules-info">
                <span className="rules-info-item">Terms Of Use</span>
                <span className="rules-info-item">Privacy-Policy</span>
                <span className="rules-info-item">FAQ</span>
                <span className="rules-info-item">Watch List</span>
            </div>
            <div className="copyright">
                <p className="copyright-text">&#169; 2023 WATCHIT. All Rights Reserved. All videos and shows on this platform are trademarks of,
                    and all related images and content are the property of, Streamit Inc. Duplication and copy
                    of this is strictly prohibited. All rights reserved.
                </p>
            </div>
            </div>
            <div className="social-media">
                <div className="follow">
                    <span className="follow-text">Follow Us :</span>
                </div>
                <div className="icons">
                    <div className="icon"><FacebookIcon /></div>
                    <div className="icon"><TwitterIcon /></div>
                    <div className="icon"><GoogleIcon /></div>
                    <div className="icon"><GitHubIcon /></div>
                </div>
            </div>
            <div className="watchItApp">
                <div className="watchItApp-text">
                    <span>Watchit App</span>
                </div>
                <div className="app-icons">
                    <img className="googleImg" src={GooglePlayIcon} alt="Google Play" />
                    <img className="appleImg" src={AppStoreIcon} alt="App Store" />
                </div>
            </div>

        </div>
    )
}