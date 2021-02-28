import React, {Component} from 'react';
import Text from './page1'
import Table from './page4'
import Video from './page3'
import Email from './page5'
//import './syle.css'

class Body extends Component{
    render(){
        var displaycontent = () =>{
            var activetab = this.props.activetab;
            if(activetab==1){
                return <Text/>
            }
            if(activetab==3){
                return <Video/>
            }
            if(activetab==4){
                return <Table/>
            }
            if(activetab==5){
                return <Email/>
            }
            else{
                return <div className="text">page 3</div>
            }
            
        }
        return (displaycontent())
    }
}

export default Body;