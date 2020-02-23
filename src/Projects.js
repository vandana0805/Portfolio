import React, {Component} from 'react';
import PROJECTS from './data/project';

class Project extends Component{
    render(){
        

            console.log('this.props',this.props);

            const {title, image, description, link} = this.props.project;


            return(<div style={{display:'inline-block' , width:300, margin:100}}>
            <h2>{title}</h2>
            <img src={image} alt='profile' style={{ height: 200, width: 200}}/>
            <p>{description}</p>
            <a href={link}>{link}</a>
            </div>
            )


        

        
    }
} 

class Projects extends Component{
    render()
    {
        return(
            <div>
                <h2>Highlighted PROJECTS</h2>
                <div>
                    {
                    PROJECTS.map(PROJECT =>{

                        return(
                        <Project key={PROJECT.id} project={PROJECT}></Project>);
                    })
                    }
                    
                </div>
            </div>

        )
    }
}

export default Projects;