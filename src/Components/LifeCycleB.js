import React, { Component } from 'react'

class LifecycleB extends Component {
        constructor(props){
            super(props)
            this.state = {
                name:'Adarsh'
            }
            console.log('LifecycleB')
        }
        static getDerivedStateFromProps(props,state){
            console.log("lifecycleB getDerivedState")
            return null
        }

        componentDidMount(){
            console.log('lifecycleB componentDidMount')
        }
        render(){
            return <div>
                lifecycleB
            </div>
        }


}

export default LifecycleB