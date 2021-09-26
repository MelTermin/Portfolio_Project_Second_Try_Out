import React from 'react'

function PortfolioList({title,id, activePortfolio, setSelected}) {
  return (
    <li className= {activePortfolio ? "portfolioList activePortfolio" : "portfolioList"} onClick= {()=>setSelected(id)}>
      {title}
    </li>
  )
}

export default PortfolioList