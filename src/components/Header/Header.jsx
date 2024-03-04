import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import logo from '../../assets/images/logo.png'
import plus from '../../assets/images/plus-img.png'
import lady from '../../assets/images/lady-with-bagagge.png'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';


import './header.scss'



export const Header = () => {
    
    const[expand, setExpand] = useState(null);

  return (
    <div className='header'>
        <Accordion onClick={() => setExpand(!expand)} expanded={expand} square={true} >
            <AccordionSummary>
                <img src={logo} alt='logo' />
                <img className={`${expand ? "rotate-img" : "plus-img"}`}  src={plus} alt='more' />
            </AccordionSummary>
            <AccordionDetails>
                
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

                    <div className='btn-img'>
                        <Button variant="contained" component={Link} to = "/request-invite">Become a founding member &rarr;</Button>
                        <img src={lady} alt='lady' />
                    </div>

                
                <div className='footnote'>
                    <p>2023 @ Atlas Exploration, INC.</p>
                </div>

            </AccordionDetails>
        </Accordion>
        
    </div>
  )
}
