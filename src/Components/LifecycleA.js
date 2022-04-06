import React, { Component } from 'react'
import LifecycleB from './LifeCycleB'


class LifecycleA extends Component {
        constructor(props){
            super(props)
            this.state = {
                name:'Adarsh'
            }
            console.log('LifecycleA')
        }
        static getDerivedStateFromProps(props,state){
            console.log("lifecycleA getDerivedState")
            return null
        }

        componentDidMount(){
            console.log('lifecycleA componentDidMount')
        }
        shouldComponentUpdate(){
            console.log('lifecycleA shouldComponentUpdate')
            return true
        }
        getSnapshotBeforeUpdate(prevProps,prevState){
            console.log('lifecycleA getSnapshotBeforeUpdate')
        }
        componentDidUpdate(){
            console.log('LifecycleA componentDidUpdate')
        }
        render(){
            return <div>
                lifecycleA
                <LifecycleB/>
            </div>
        }


}

export default LifecycleA