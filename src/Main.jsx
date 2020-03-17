    import React, { Component } from "react";
    class Main extends Component {
        // ws = new WebSocket('ws://localhost:9000/ws');
        ws=new WebSocket('ws://loratest0000.apic.eu-gb.mybluemix.net/ws')
    
        componentDidMount() {
            this.ws.onopen = () => {
                console.log('connected')
            }
            this.ws.onmessage = evt => {
                const message = JSON.parse(evt.data)
                this.props.updationOfData({ incomingData: message })
            }
            this.ws.onclose = () => {
                console.log('disconnecteds') 
            }
    
        }
    
        render() {
            return (
                <div>
                    <h6>connecting to server</h6>
                </div>
            )
        }
    }
    
    export default Main;
    