import React, { Component } from 'react'
import './tabbar.less';


export default class Tabbar extends Component {
    constructor(props){
        super(props);
        this.state={
            tabbar:[
                {
                    name:'首页',id:'index'
                },
                {
                    name:'产品页',id:'product'
                },
                {
                    name:'我的',id:'mine'
                }
            ],
            navIndex:0
        }
    }
    render() {
        return (
            <div className="tabbar">
                {
                    this.state.tabbar.map((tmp,index)=>{
                        return (
                           <div className={this.state.navIndex===index?'tab-item active':'tab-item '} key={index} onClick={()=>this.selectTab(index)}>{tmp.name}</div>
                        )
                    })
                }
            </div>
        )
    }

    selectTab(e){
        console.log(e);
        this.setState({
            navIndex:e
        })
    }
}
