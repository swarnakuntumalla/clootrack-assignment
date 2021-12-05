import React, { Component } from "react"
import BarChart from "../BarChart"
import PieChart from "../PieChart";

import "./index.css"

class HomePage extends Component{
    state = {barChartsData : [], pieChartsData: []}

    componentDidMount(){
        this.getChartsData()
    }

    getChartsData = async() =>{
        const response = await fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json")
        const data = await response.json()
        const barChartData = data.filter(eachObj => {
            if(eachObj.type === "Bar"){
                return eachObj
            }
        })
        
        const pieChartData = data.filter(eachObj => {
            if(eachObj.type === "Pie"){
                return eachObj
            }
        })
        this.setState({barChartsData: barChartData, pieChartsData: pieChartData})
    }
    render(){
        const {barChartsData, pieChartsData} = this.state
       
        return(
            <div>
                {pieChartsData.map((eachObj) => (
                    <PieChart chartData={eachObj}/>
                ))}
            
                {barChartsData.map((eachObj) => (
                    <BarChart chartData={eachObj}/>
                ))}
            </div>
        )
    }
}

export default HomePage;