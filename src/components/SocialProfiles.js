import React from 'react';
import SOCIALPROFILES from '../data/socialProfiles';

const SocialProfile = props=>{
    
    

    const {image,link,title}=props.profile;

    return(
        <span>
                <a href={link}><img src={image} alt='profile' style={{height:50, width:50 ,margin:10}}></img>
</a>
        </span>
    )
        
}

const SocialProfiles =()=>(
    
        
            
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


export default SocialProfiles;