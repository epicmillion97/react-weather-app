import React from 'react'
import {FaGithub} from 'react-icons/fa'
const Footer = () => {
  return (
    <div>
        <p className="footerP"> Copyright &copy; 2022 </p>
        <p className="footerP"> Created by <span className="epicSpan">Epic</span> <a href= "https://www.github.com/epicmillion97"> <FaGithub /></a> </p>
    </div>
  )
}

export default Footer