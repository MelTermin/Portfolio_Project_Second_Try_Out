import React, {useState, useEffect} from 'react'

import PortfolioList from './PortfolioList'
import {projectReact,projectJavascript,projectNode} from '../Details'

function Portfolio() {

  const [selected,setSelected]=useState("react")
  const [data, setData] = useState([]);
  
  const list = [
    {
      id: "react",
      title: "React",
    },
    {
      id: "javascript",
      title: "Javascript",
    },
    {
      id: "node",
      title: "Node",
    }
  ]

  useEffect(() => {

    switch (selected) {
      case "react":
        setData(projectReact);
        break;
      case "javascript":
        setData(projectJavascript);
        break;
      case "node":
        setData(projectNode);
        break;
      
      default:
        setData(projectReact);
      }
  }, [selected]);

  return (
   
    <div className="portfolio-container" id="portfolio">
    <h1 className="portfolio-title">Portfolio</h1>
    <ul className="portfolio-ul">
     {
       list.map((item)=> {
         return( <PortfolioList title={item.title} id= {item.id} activePortfolio= {selected===item.id}
         setSelected= {setSelected}
         />)
       
       })
     }
    </ul>
  
    <div className="details-container" >

      {data.map((item)=>{
        return (
          <div className="item"  >
          <img className="portfolio-image" src= {item.image}  alt="projects"></img>
          <h3>{item.name}</h3>
          <a target="_blank" className="btn-project" href={item.atag} rel="noreferrer">View</a>
        </div>
        )
      })}
      


  
    </div>
  
    </div>
  
  )
}

export default Portfolio

