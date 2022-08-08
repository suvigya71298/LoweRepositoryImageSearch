import React from 'react'

export default function Image(props) {
    const {ImageUrl} = props;
  return (
    <div data-testid="image-test" className='container my-3'>
        <div className="card" style={{width: "18rem"}}>
            <img src={ImageUrl} className="card-img-top" alt="..."/>
        </div>
    </div>
    
  );
}
