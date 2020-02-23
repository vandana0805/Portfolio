import React, {Component} from 'react';
import SOCIALPROFILES from './data/socialProfiles';

class SocialProfile extends Component{
    render(){
    console.log("this.props",this.props);

    const {image,link,title}=this.props.profile;

    return(
        <span>
                <a href={link}><img src={image} alt='profile' style={{height:50, width:50 ,margin:10}}></img>
</a>
        </span>
    )
        }
}

class SocialProfiles extends Component{
    render(){
        return(
            
        <div>
        <h2>Connect with me!</h2>
        
            <div>
            {SOCIALPROFILES.map(
                SOCIALPROFILE =>{
                    return(<SocialProfile key={SOCIALPROFILE.id} profile={SOCIALPROFILE}/>);
            })
            }
            </div>
        </div>
            
        )
    }
}

export default SocialProfiles;