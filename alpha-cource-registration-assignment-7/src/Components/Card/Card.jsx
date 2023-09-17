/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './Card.css';
import {FaBookmark } from 'react-icons/fa';
import Cart from '../Cart/Cart';
const Card = () => {
    const [courseCard,setCourseCard] = useState([]);
    const [selectedCard,setSelectedCard] = useState([]);
    const [remainingCredit,setRemainingCredit] = useState(0);
    const [totalCredit,setTotalCredit] = useState(0);
    const [totalPrice,setTotalPrice] = useState(0);

  useEffect(()=>{
    fetch("fake_data.json")
    .then(res=>res.json())
    .then(data=>setCourseCard(data))
    },[])
    // console.log(courseCard);

    const handleSelectBtn = (card) =>{
        const isExist = selectedCard.find(category=>category.id==card.id)
        // console.log(isExist);

        let count = card.credit_time;
        let priceCount = card.price;
        


        if(isExist){
           Swal.fire({
            icon: 'error',
            title: 'Already Clicked',
          })
        }
        else{

          selectedCard.forEach(category=>{
            priceCount += category.price;
            count += category.credit_time;
          });
          setTotalPrice(priceCount);
          // console.log(priceCount);
          // console.log(count);
          const totalRemainingCredit = 20 - count;
          if(count>20){
            // return alert('');
            Swal.fire({
              icon: 'error',
              title: "You don't have Enough Credit Hour",
            })
          }
          else{
          setTotalCredit(count);

          setRemainingCredit(totalRemainingCredit);

          setSelectedCard([...selectedCard,card]);
          }
          
        }
        // console.log(card);
        // setSelectedCard(card)
        
    };
    // console.log(selectedCard);

    return (
        <div className="container">
      <div className="home-container">
        <div className="card-container">
          {
              courseCard.map((card) => (
                <div key={card.id} className="card">
                  <div className="card-img">
                    <img className='photo' src={card.cover_img} alt="" />
                  </div>
                  <h2>{card.title}</h2>
                  {/* <p className='course-details'><small>{card.details_course}</small></p> */}
                  <p className='course-details'>{card.details_course}</p>
                  <div className='info'>
                    <div className='info'>
                      <img className='icon-size' src="https://i.ibb.co/vZcT9Y2/dollar-sign-1.png" alt="" />
                      <p>Price: {card.price}</p>
                    </div>
                    <div className='info'>
                    <img className='icon-size' src="https://i.ibb.co/whNQ1hL/Frame.png" alt="" />
                      <p>Credit: {card.credit_time}hr</p>
                    </div>
                  {/* <p><span className='icon-size'>$</span>Price: {card.price}</p>
                  <p><span className='icon-size2'><FaBookmark/></span> Credit: {card.credit_time}hr</p> */}
                  </div>
                  <button onClick={()=>handleSelectBtn(card)} className='card-btn'>Select</button>
                </div>
            ))
          }
        </div>
        <div className='cart'>
          <Cart selectedCard={selectedCard} remainingCredit={remainingCredit} totalCredit={totalCredit} totalPrice={totalPrice}></Cart>
        </div>
      </div>
    </div>
    );
};

export default Card;