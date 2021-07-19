import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Header () {

    const gitClick =() =>{

        const url = 'https://github.com/s-piper';
        window.open(url);
    }

    const linkedinClick = () =>{
        const url = 'https://linkedin.com/in/stephen-piper-733b3182';
        window.open(url);
    }

    

    return (

        <div className="header">

            <h1>Stephen Piper</h1>
            <h2>Software Engineer</h2>
            <div className="picRow">
            <img className="profilePic" src="https://media-exp1.licdn.com/dms/image/C5603AQFDEWj7keeTRw/profile-displayphoto-shrink_200_200/0/1603992504718?e=1632355200&v=beta&t=scd8-rXv6pWZlAzO2dWQNM-nYR9L_mLQwot0MX81QAg"
                alt=""
                />
            </div>
            <h3>Very Employable</h3>
            <IconButton onClick={gitClick}>
                <GitHubIcon 
                    color="primary"
                    fontSize="large" />
            </IconButton>
            <IconButton onClick={linkedinClick}>
                <LinkedInIcon 
                    color="primary"
                    fontSize="large" />
            </IconButton>

        </div>
    )
}

export default Header;