import React , {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from "../assets/profile.png";
import Title from "./Title";
import Jokes from "./Jokes";



/*class Regular{};
class ComponentClass extends Component{};

const RegularInstanceClass= new Regular;
const ComponentInstanceClass= new ComponentClass;

console.log(RegularInstanceClass);
console.log(ComponentInstanceClass);
*/
class App extends Component{
    state={display:false};
   /* constructor(){
        super();
        this.state={display: false};
        this.toggleDisplay=this.toggleDisplay.bind(this);
        //this.readMore=this.readMore.bind(this);
        //this.readLess=this.readLess.bind(this);
    }*/
    toggleDisplay= ()=>{
        this.setState({display: !this.state.display})
    }
  /*  readMore(){
        
        console.log('Read more',this);
        this.state.display= this.setState({display: true});
    }
    readLess()
    {
        this.state.display=this.setState({display: false});
    }
    */
    render(){
        
            const bio=(this.state.display)?( <div>
                <p>I live in Noida, and love to code Everyday.</p>
                <p>My favourite language is Javascript and I think ReactJS is awesome.</p>
                <button onClick={this.toggleDisplay}>Read Less</button>
            </div>
):(<div>
    <button onClick={this.toggleDisplay}>Read More</button>
    
</div>);
    return(
            <div>
                <img src={profile} alt='profile' className="profile"></img>
                <h1>Hello!</h1>
                <p>My name is Vandana Gupta. </p> 
                <Title/>
                <p>I am looking for the full time job opportunity.
                </p>
                {bio}
                <hr/>
                <Projects/>
                <hr/>
                <Jokes/>
                <hr/>
                <SocialProfiles/>
                </div>        
            )
    }
}
export default App;
