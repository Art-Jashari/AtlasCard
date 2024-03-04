import React from 'react'
import ladyFooter from '../../assets/images/footer-lady.png'
import logoFooter from '../../assets/images/logo-footer.png'
import { Link } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import './style.scss'

 export const Footer = () => {
  return (
    <div className='footer'>

        <div className='menu'>
            <div className='list'>
                <h3>Atlas</h3>
                <ul>
                    <li>
                        <NavHashLink smooth to="#supper-club">Dining</NavHashLink>
                    </li>
                    <li>
                        <NavHashLink smooth to="#travel">Travel</NavHashLink>
                    </li>
                    <li>
                        <NavHashLink smooth to="#card">Card</NavHashLink>
                    </li>
                    <li>
                        <NavHashLink smooth to="#app">App</NavHashLink>
                    </li>
                    <li>
                        <NavHashLink smooth to="#concierege">Concierege</NavHashLink>
                    </li>
                </ul>
            </div>

            <div className='list'>
                <h3>Benefits</h3>
                <ul>
                    <li>
                        <NavHashLink smooth to="#benefits">Atlas Benefits</NavHashLink>
                    </li>
                    <li>
                        <Link to="/visa-infinite">Visa Infinite</Link>
                    </li>
                </ul>
            </div>

            <div className='list'>
                <h3>Contact</h3>
                <ul>
                    <li>
                        <Link to='mailto:hello@atlascard.com'>Email</Link>
                    </li>
                    <li>
                        <Link to="https://twitter.com/atlascardhq">Twitter</Link>
                    </li>
                    <li>
                        <Link to="https://instagram.com/atlascardhq">Instagram</Link>
                    </li>
                </ul>
            </div>

            <div className='list'>
                <h3>Legal</h3>
                <ul>
                    <li>
                        <Link to='https://atlascard.com/legal/privacy'>Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="https://atlascard.com/legal/terms">Terms of Use</Link>
                    </li>
                    <li>
                        <Link to="https://atlascard.com/legal/statement-disclosure">Instagram</Link>
                    </li>
                </ul>
            </div>

            <div className='list'>
                <h3>About</h3>
                <ul>
                    <li>
                        <Link to='https://assets.atlascard.com/media/atlas_media_kit.zip'>Media Kit</Link>
                    </li>
                </ul>
            </div>

            <div className='footer-imgs'>
                <img src={logoFooter} alt='' />
                <img src={ladyFooter} alt='' />
            </div>
        </div>

        <div className='ordered-references'>
            <ol>
                <li>
                    <p>Atlas Supper Club Reservations are available on a first come, first serve basis exclusively to Atlas cardholders from within Atlas app. The Atlas Supper Club Code of Conduct (<Link to="https://atlascard.com/code-of-conduct">atlascard.com/code-of-conduct</Link>) and the cancellation policy of the applicable restaurant apply for each reservation. Listed restaurants are subject to change at any time without prior notice. </p>
                </li>
                <li>
                    <p>last-minute Reservations subject to availability.</p>
                </li>
                <li>
                    <p>5x points with BLADE applies to all eligible blade services. 5x points is calculated and applied at the end of statement periods that include settled blade transactions.</p>
                </li>
                <li>
                    <p>Provided as a $189 statement credit to your atlas account upon purchase of CLEAR plus annual membership with your atlas card. Visit <Link to="">enroll.clearme.com/enroll/</Link> to learn more.</p>
                </li>
                <li>
                    <p>Atlas cardholders are eligible to receive reimbursement for up to $600 per year of Cancellation/Change Fee incurred with respect to Eligible Airfare Purchases that are canceled for any reason, for which reimbursement is sought before the Benefit End Date, and if the Eligible Cardholder is not eligible to receive a reimbursement from another source.</p>
                </li>
                <li>
                    <p>visit <Link to="https://atlascard.com/visa-infinite"> https://atlascard.com/visa-infinite</Link> to learn more.</p>
                </li>
                <li>
                    <p>your Physical card details are available to access any time within atlas app.</p>
                </li>
                <li>
                    <p>Rewarded categories eligible for 3x points upgrade include Dining, Flights, Hotels, Rideshares, Nightlife, Fashion, Groceries, Wellness, Health, Home, and Auto Services. 3x points upgrade is calculated and applied at the end of each statement period on settled transactions within your top rewarded category by dollar amount. outside of the top spend category, Settled transactions for products and services provided by merchants and/or categories not subject to another points multiplier, will accrue 1 point for every dollar spent (1x points) after the applicable billing cycle. Subject to restrictions and the Rewards & Benefit Terms.</p>
                </li>
                <li>
                    <p>create unlimited new cards within atlas app, with up to five active cards at any one time.</p>
                </li>
                <li>
                    <p>cardholder is responsible for The cost of purchases of goods and services and/or third party expenses and services incurred in relation to any fulfilled requests.</p>
                </li>
                <li>
                    <p>Provided as a $199 statement credit to your atlas account upon purchase of one medical annual membership with your atlas card. Visit <Link to="https://www.onemedical.com/atlas/">onemedical.com/atlas/</Link> to learn more.</p>
                </li>
                <li>
                    <p>Complimentary $100 annual Erewhon cafe membership. Benefit enrollment instructions provided in app.</p>
                </li>
                <li>
                    <p>Up to $300 in annual statement credits ($25/month). Get your first month free by using the future fitness Atlas cardholder enrollment page. Visit <Link to="https://future.co/atlascard">future.co/atlascard</Link> to learn more.</p>
                </li>
                <li>
                    <p>Atlas is a true charge card with no pre-set spending limits. This means your spending limit is flexible. Unlike traditional cards with set limits, the amount you can spend flexibly adapts based on a range of factors such as your purchases, statement balance payments, and credit history.</p>
                </li>
            </ol>
        </div>
        <div className='footer-ending'>
            <p>Issued by Lead Bank | 2023 © Atlas Exploration, Inc.</p>
            <p>Atlas Exploration, Inc is a technology company, not a bank. Atlas Card is issued by Lead Bank ("Issuer"). An application is required. Cardholders must be at least 18 years old and a citizen of the United States, or a permanent resident with a valid social security number (SSN) or ITIN. Financing is subject to Issuer's approval. Payment of account balance due in full monthly. Fees may be assessed on overdue amounts. An annual membership fee applies. </p>
        </div>
        
      
    </div>
  )
}

