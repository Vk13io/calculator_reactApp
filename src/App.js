import { Component } from "react";

class App extends Component {
  constructor(props){
    super(props)
    
  }
  state= {
    countOne:0,
    countTwo:0
  }
  addOne=()=>{
    this.setState({
      countOne:this.state.countOne+1
    })
  }
  subOne=()=>{
    this.setState({
      countOne:this.state.countOne-1
    })
  }
  addTwo=()=>{
    this.setState({
      countTwo:this.state.countTwo+1
    })
  }
  subTwo=()=>{
    this.setState({
      countTwo:this.state.countTwo-1
    })
  }
  render(){
  return (
    <div className="App">
      <div className="mt-10 flex item-center justify-center">
       <div className="text-black-300">This is a calculator web app implemented on react for performing basic arithmetic operations on two numbers</div>
       </div>
       <div className="mt-20 grid grid-cols-2 text-center" >
         <div style={{borderRight:"solid 1px"}}>
          <div className="text-5xl text-yellow-400">{this.state.countOne}</div>
         
          <div className="mt-5 grid grid-cols-2 " >
            <div className="text-center">
            <button type="button" className="btn btn-error btn-sm w-5 " onClick={this.subOne}>-</button>
            </div>
            <div className="text-center">
            <button type="button" className="btn btn-accent btn-sm w-5 " onClick={this.addOne}>+</button>
            </div>
          </div>
          </div>
         <div>
          <div className="text-5xl text-amber-100">{this.state.countTwo}</div>
          <div className="mt-5 grid grid-cols-2 ">
            <div className="text-center">
            <button type="button" className="btn btn-error btn-sm w-5 " onClick={this.subTwo}>-</button>
            </div>
            <div className="text-center">
            <button type="button" className="btn btn-accent btn-sm w-5 " onClick={this.addTwo}>+</button>
            </div>
          </div>
          </div>
       </div>
    </div>
    
  )
  }
}


export default App;
