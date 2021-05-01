import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TinderCard from "react-tinder-card";
import { GetUsersCards } from "../../Redux/mainPageSlice";
import { RootState } from "../../Redux/store";
import { UserType } from "../../Types/Types";
import "./tinderCards.scss";

export const TinderCards = () => {
  const [people, setPeople] = useState<Array<UserType>>([  
  ]);

const dispatch = useDispatch()
const usersCards = useSelector((state:RootState) => state.mainPage.usersCards)
  console.log(usersCards);


useEffect(() => {
  dispatch(GetUsersCards())
}, [])

  const swiped = (direction: string) => {};

  return (
    <div className="tinderCards">
      {usersCards && usersCards.map((person: UserType) => (
        <TinderCard 
        //@ts-ignore
        className='swipe'
        preventSwipe={["up", "down"]} key={person.name}>
            <div
              className="tinderCards__card"
              style={{ backgroundImage: "url(" + person.url + ")" }}
            >
              <h3 className="tinderCards__name">{person.name}</h3>
            </div>
        </TinderCard>
      ))}
    </div>
  );
};
export default TinderCards;
