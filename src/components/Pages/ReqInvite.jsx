import React, {useState} from 'react'
import atlasLady from '../../assets/images/atlas-woman-img.webp'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import './req-invite.scss'

export const ReqInvite = () => {

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    const handleChange1 = (event) => {
        setChecked1(event.target.checked);
    };

    const handleChange2 = (event) => {
        setChecked2(event.target.checked);
    };

    const toggleBtn = () => {
        if(checked1 !== 'true' && checked2 !=='true'){
            return true;
        }

        else{
            return false;
        }

    } 


    const options = [
        {
          value: 'PointCard Titan email',
          label: 'PointCard Titan email',
        },
        {
          value: 'Instagram Post',
          label: 'Instagram Post',
        },
        {
          value: 'From a Friend',
          label: 'From a Friend',
        },
        {
            value: 'Other',
            label: 'Other',
        },
    ];


  return (
    <div className='container'>
      <div className='img-container'>
        <img src={atlasLady} alt='Atlas Woman' />
      </div>

      

      <div className='form-div'>
        <div className='logo-container'>
            <Link to="/">
                <svg height="24" width="104" data-astro-cid-mq3pp5jd="" fill="none" viewBox="0 0 774 180" xmlns="http://www.w3.org/2000/svg"><path d="M444.769 175.185L378.566 4.53904H342.955L276.752 175.185H307.105L323.357 130.492H397.686L414.177 175.185H444.769ZM360.163 29.634H361.119L389.321 107.309H331.722L360.163 29.634Z" fill="currentColor"></path><path d="M488.274 153.436C478.475 153.436 473.934 152.241 473.934 140.53V68.1131H501.18V48.9931H473.934V13.382H447.644V48.9931H427.09V68.1131H447.644V147.461C447.644 170.405 458.399 175.663 481.104 175.663C487.796 175.663 497.117 175.424 499.985 175.185V153.197C496.4 153.436 490.903 153.436 488.274 153.436Z" fill="currentColor"></path><path d="M536.594 175.185V2.14905H510.065V175.185H536.594Z" fill="currentColor"></path><path d="M660.082 175.185C656.975 169.449 656.736 162.279 656.736 148.417V84.843C656.736 63.333 642.874 46.125 605.829 46.125C578.105 46.125 557.073 59.748 551.337 82.453L575.476 87.711C580.017 73.371 592.206 66.918 604.873 66.918C623.515 66.918 630.446 74.327 630.446 85.082C630.446 92.969 624.232 97.0321 600.332 99.6611C566.394 103.007 546.557 113.045 546.557 140.291C546.557 163.713 565.916 178.053 589.099 178.053C604.634 178.053 622.559 172.317 630.685 159.65C630.685 166.82 632.597 173.034 634.509 175.185H660.082ZM630.446 125.473C630.446 148.895 610.131 157.977 594.118 157.977C581.451 157.977 573.325 151.763 573.325 140.052C573.325 126.668 585.753 120.454 598.659 118.781C612.282 117.108 626.383 114.957 630.446 110.894V125.473Z" fill="currentColor"></path><path d="M770.7 81.9751C767.354 62.6161 746.322 46.125 718.359 46.125C688.962 46.125 667.691 61.6601 667.691 83.6481C667.691 109.938 688.245 116.63 708.082 119.976L720.988 122.127C736.045 124.756 746.8 128.341 746.8 139.335C746.8 151.524 735.567 158.933 719.793 158.933C702.346 158.933 689.918 151.285 686.094 133.838L661.955 138.618C666.257 161.801 686.811 178.053 719.315 178.053C750.146 178.053 773.568 164.669 773.568 138.379C773.568 111.372 752.775 104.441 730.787 100.617L718.359 98.705C704.975 96.554 694.22 93.925 694.22 83.17C694.22 71.698 704.019 65.4841 718.12 65.4841C731.265 65.4841 743.454 72.4151 746.8 86.7551L770.7 81.9751Z" fill="currentColor"></path><path d="M117.732 179.106H84.1283C38.4701 179.106 1.30636 142.737 0.0263672 97.3887H83.9246C95.7583 97.3887 101.675 97.3887 106.195 99.6917C110.171 101.717 113.403 104.95 115.429 108.926C117.732 113.445 117.732 119.362 117.732 131.196V179.106Z" fill="currentColor"></path><path d="M0.0224609 82.6236C1.23644 37.2157 38.427 0.778687 84.1279 0.778687H117.731V48.8164C117.731 60.65 117.731 66.5668 115.428 71.0867C113.403 75.0624 110.17 78.2948 106.194 80.3206C101.675 82.6236 95.7578 82.6236 83.9242 82.6236H0.0224609Z" fill="currentColor"></path><path d="M132.505 179.106H166.108C211.766 179.106 248.93 142.737 250.21 97.3887H166.312C154.478 97.3887 148.561 97.3887 144.041 99.6917C140.066 101.717 136.833 104.95 134.808 108.926C132.505 113.445 132.505 119.362 132.505 131.196V179.106Z" fill="currentColor"></path><path d="M250.214 82.6236C249 37.2157 211.809 0.778687 166.108 0.778687H132.505V48.8164C132.505 60.65 132.505 66.5668 134.808 71.0867C136.834 75.0624 140.066 78.2948 144.042 80.3206C148.562 82.6236 154.478 82.6236 166.312 82.6236H250.214Z" fill="currentColor"></path>
                </svg>
            </Link>
        </div>

        <div className='text-container'>
            <h1>Request an invite</h1>
            <p>Please tell us a bit about yourself so that we may review your request for an application.</p>
        </div>

        <div className='form'>
            <Box component="form" >
                
                
                <TextField
                    id="outlined"
                    variant='outlined'
                    required
                    label="First Name"
                    fullWidth />

                <TextField
                    id="outlined"
                    variant='outlined'
                    required
                    label="Last Name"
                    fullWidth/>

                <TextField 
                    id="outlined"
                    variant='outlined'
                    required
                    label="Email"
                    type='email'
                    fullWidth/>

                <TextField
                    id="outlined"
                    variant='outlined'
                    required
                    label="Phone"
                    type='tel'
                    fullWidth/>

                <TextField
                    id="outlined"
                    variant='outlined'
                    required
                    label="City"
                    type ='text'
                    fullWidth/>

                <TextField
                    id="outlined"
                    variant='outlined'
                    label="Estimated monthly spending"
                    type='number'
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}

                    fullWidth/>

                <TextField
                    id="outlined"
                    variant='outlined'
                    required
                    select
                    label="Where did you hear about Atlas?"
                    fullWidth>
                    {options.map((e) => (
                        <MenuItem key={e.value} value={e.value}>
                        {e.label}
                        </MenuItem>
                    ))}
                </TextField>    

                <TextField
                    id="outlined"
                    variant='outlined'
                    label="Instagram username (optional)"
                    type='text'
                    InputProps={{
                        startAdornment: <InputAdornment position="start">@</InputAdornment>,
                        endAdornment: 
                            <InputAdornment position="end">
                                <Link to="https://www.instagram.com/">
                                    <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M9.00002 0C6.55575 0 6.24926 0.0103604 5.28931 0.0541599C4.33137 0.0978523 3.67712 0.250007 3.10466 0.472506C2.51283 0.702472 2.01092 1.01021 1.51055 1.51055C1.01021 2.01092 0.702472 2.51283 0.472506 3.10466C0.250007 3.67712 0.0978523 4.33137 0.0541599 5.28931C0.0103604 6.24926 0 6.55575 0 9.00002C0 11.4443 0.0103604 11.7507 0.0541599 12.7107C0.0978523 13.6686 0.250007 14.3229 0.472506 14.8953C0.702472 15.4872 1.01021 15.9891 1.51055 16.4895C2.01092 16.9898 2.51283 17.2975 3.10466 17.5275C3.67712 17.75 4.33137 17.9021 5.28931 17.9458C6.24926 17.9896 6.55575 18 9.00002 18C11.4443 18 11.7507 17.9896 12.7107 17.9458C13.6686 17.9021 14.3229 17.75 14.8953 17.5275C15.4872 17.2975 15.9891 16.9898 16.4895 16.4895C16.9898 15.9891 17.2975 15.4872 17.5275 14.8953C17.75 14.3229 17.9021 13.6686 17.9458 12.7107C17.9896 11.7507 18 11.4443 18 9.00002C18 6.55575 17.9896 6.24926 17.9458 5.28931C17.9021 4.33137 17.75 3.67712 17.5275 3.10466C17.2975 2.51283 16.9898 2.01092 16.4895 1.51055C15.9891 1.01021 15.4872 0.702472 14.8953 0.472506C14.3229 0.250007 13.6686 0.0978523 12.7107 0.0541599C11.7507 0.0103604 11.4443 0 9.00002 0ZM8.99949 1.62109C11.4026 1.62109 11.6872 1.63028 12.6362 1.67357C13.5137 1.71359 13.9903 1.8602 14.3074 1.98346C14.7275 2.14672 15.0273 2.34175 15.3422 2.65671C15.6572 2.97163 15.8522 3.27144 16.0155 3.69153C16.1387 4.00867 16.2854 4.48521 16.3254 5.3627C16.3687 6.31172 16.3779 6.59638 16.3779 8.99949C16.3779 11.4026 16.3687 11.6872 16.3254 12.6362C16.2854 13.5137 16.1387 13.9903 16.0155 14.3074C15.8522 14.7275 15.6572 15.0273 15.3422 15.3422C15.0273 15.6572 14.7275 15.8522 14.3074 16.0155C13.9903 16.1387 13.5137 16.2854 12.6362 16.3254C11.6874 16.3687 11.4028 16.3779 8.99949 16.3779C6.5962 16.3779 6.31161 16.3687 5.3627 16.3254C4.48521 16.2854 4.00867 16.1387 3.69153 16.0155C3.27144 15.8522 2.97163 15.6572 2.65671 15.3422C2.34179 15.0273 2.14672 14.7275 1.98346 14.3074C1.8602 13.9903 1.71359 13.5137 1.67357 12.6362C1.63028 11.6872 1.62109 11.4026 1.62109 8.99949C1.62109 6.59638 1.63028 6.31172 1.67357 5.3627C1.71359 4.48521 1.8602 4.00867 1.98346 3.69153C2.14672 3.27144 2.34175 2.97163 2.65671 2.65671C2.97163 2.34175 3.27144 2.14672 3.69153 1.98346C4.00867 1.8602 4.48521 1.71359 5.3627 1.67357C6.31172 1.63028 6.59638 1.62109 8.99949 1.62109V1.62109Z" fill="currentColor" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M9.00002 12C7.34314 12 6 10.6569 6 9.00002C6 7.34314 7.34314 6 9.00002 6C10.6569 6 12 7.34314 12 9.00002C12 10.6569 10.6569 12 9.00002 12ZM9.00054 4.37891C6.44806 4.37891 4.37891 6.44806 4.37891 9.00054C4.37891 11.553 6.44806 13.6221 9.00054 13.6221C11.553 13.6221 13.6221 11.553 13.6221 9.00054C13.6221 6.44806 11.553 4.37891 9.00054 4.37891V4.37891Z" fill="currentColor" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M14.8846 4.19525C14.8846 4.79173 14.4011 5.27524 13.8046 5.27524C13.2082 5.27524 12.7246 4.79173 12.7246 4.19525C12.7246 3.59878 13.2082 3.11523 13.8046 3.11523C14.4011 3.11523 14.8846 3.59878 14.8846 4.19525" fill="currentColor" fill-rule="evenodd"></path></svg>
                                </Link>
                            </InputAdornment>
                        }}

                    fullWidth/>


                <div className='checkbox'>
                    <Checkbox
                        checked={checked1}
                        onChange={handleChange1}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <p>I agree to the Terms of Use and Privacy Policy.</p>
                </div>

                <div className='checkbox'>
                    <Checkbox
                        label = "I agree to receiving invite updates via email."
                        checked={checked2}
                        onChange={handleChange2}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <p>I agree to receiving invite updates via email.</p>
                </div>

                    
                
                
                    <button disabled={toggleBtn} type='submit'>Submit</button>

            </Box>

        </div>
      </div>
    </div>
  )
}


