import React from 'react';
import "../assets/Styles/Card.css";


const Card = (props) => {

  

  

  
  return (
    <div>
      <div className="card" style={{ width: '400px' }}>
      
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <h5> {props.category}</h5>
          <p className="card-text">{props.sdes}</p>
          
         <div className="inside">
           <a href="#" className="btn btn-info" onClick={()=>props.onShow(props.id)} >See Recipe</a>
          
          <button className="btn btn-danger" onClick={()=>props.onDelete(props.id)}>Delete</button>
          <button className="btn btn-primary" onClick={()=>props.onEdit(props.id)}>Edit</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
