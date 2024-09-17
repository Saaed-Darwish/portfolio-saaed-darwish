import React, { useState, useEffect } from "react";
import Swipeable from "react-swipy";
import SwipeableCards from "./SwipeableCard";
import DisplayCardAnimation from "./DisplayCardAnimation";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { usePopup } from "../PopupContextDivinity";
import Loading from "../LoadingDivinity";

const Matches = ({ user, matchedDeities, setDeity }) => {
  const [cards, setCards] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { triggerPopup } = usePopup();
  const [loadingMatches, setLoadingMatches] = useState(false);

  useEffect(() => {
    setLoadingMatches(true);
    setCards(matchedDeities);
    const initialTimer = setTimeout(() => {
      setLoadingMatches(false);
      setLoading(true);

      const loadingTimer = setTimeout(() => {
        setLoading(false);
      }, 3500);
  
      return () => clearTimeout(loadingTimer);
    }, 500);
  
    return () => clearTimeout(initialTimer);
  }, [matchedDeities, setCards]);
  

  const remove = () => {
    setCards((prevCards) => {
      const newCards = prevCards.slice(1);
      if (newCards.length === 0) {
        triggerPopup('💫↩️', 'Divine Encounters Exhausted', "You've explored every divine path available for now. To deepen your spiritual journey, let's revisit your inner attributes through the attributes quiz.");
        navigate('/Quiz');
      }
      return newCards;
    });
  }

  const handleswiperight = (card) => {
    setLoadingMatches(true);
    if (user !== undefined) {
      fetch('/UserMatched', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "email": user.username, card })
      })
        .then(response => {
          if (response.ok) {
            setDeity(card);
            localStorage.setItem("deity", JSON.stringify(card));
            navigate('/Deity');
          } else {
            alert("Error, please try again");
          }
        })
        .finally(() => {
          setLoadingMatches(false);
        });
    } else {
      setDeity(card);
      localStorage.setItem("deity", JSON.stringify(card));
      setLoadingMatches(false);
      navigate('/Deity');
    }
  }

  const containerStyle = {
    display: "flex",
    justifyContent: "top",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
  };

  const cardsContainerStyle = {
    display: "flex",
    overflowX: "auto",
    maxWidth: "100vw",
    padding: "20px",
  };

  const cardStyle = {
    marginRight: "10px", // Adjust spacing between cards
  };

  const actionsStyles = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 0,
  };

  const leftButtonStyles = {
    marginLeft: "10px",
  };

  const rightButtonStyles = {
    marginRight: "10px",
  };

  return (
    <div>
      {loadingMatches ? <Loading /> : null}
      <div style={containerStyle}>
        <h1>Matching Page</h1>

        {loading && (cards && cards.length > 0) && (
          <div style={cardsContainerStyle}>
            {cards.map((card, index) => (
              <div key={index} style={cardStyle}>
                <DisplayCardAnimation
                  name={card.name}
                  image={"./images/" + card.imagePath}
                ></DisplayCardAnimation>
              </div>
            ))}
          </div>
        )}

        {!loading && (cards && cards.length > 0) && (
          <div>
            <Swipeable
              onSwipe={(direction) => {
                if (direction === "right") {
                  handleswiperight(cards[0]);
                } else {
                  remove();
                }
              }}
              buttons={({ right, left }) => (
                <div style={actionsStyles}>
                  <Button onClick={() => left()} style={leftButtonStyles}>
                    Reject
                  </Button>
                  <Button onClick={() => right()} style={rightButtonStyles}>
                    Accept
                  </Button>
                </div>
              )}
            >
              <SwipeableCards
                name={cards[0].name}
                aboutMe={cards[0].description}
                image={"./images/" + cards[0].imagePath}
              />
            </Swipeable>
            <p style={{ textAlign: "center" }}>Cards Left: {cards.length}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Matches;