import React, { useState } from 'react'
import { useCollapse } from 'react-collapsed';

const Card = (props) => {
  
  const[isExpanded,setExpanded]=useState(false);
  const{getCollapseProps,getToggleProps}=useCollapse({isExpanded});
  return (
    <>

            <div className="card" style={{ width: " 18rem" ,marginBottom:"10%",boxShadow:' 1px 4px 74px -26px rgba(0,0,0,0.44)'}}>
                <div className="card-body">
                  <h3 className="card-title">{props.title}</h3>


                  <div className="card-text" style={{color:'blue',marginTop:'3%',fontSize:'120%'}}>
                    {props.desc}
                  </div>
                 
                  <p {...getCollapseProps()}>{props.content}</p>
                  <button className="btn btn-success" style={{marginTop:"6%",marginBottom:"3%"}}
                    {...getToggleProps({
                      onClick: () =>
                        setExpanded((prevExpanded) => !prevExpanded),
                    })}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>

                  <p className="card-text"></p>
                 
                </div>
              </div>
    </>
  )
}

export default Card
