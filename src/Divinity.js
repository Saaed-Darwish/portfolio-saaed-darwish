import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppDivinity.css";
import "./indexDivinity.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SparklingCursor from "./SparklingCursorDivinity";
import Quiz from "./QuizDivinity";
import AppNavbar from "./AppNavbarDivinity";
import Register from "./RegisterDvinity";
import Matches from "./MatchingPageComponents/Matches";
import Admin from "./AdminComponents/AdminHome";
import Deity from "./DeityDivinity";
import CalendarPage from "./CalendarComponents/CalendarPage";
import Forum from "./ForumComponents/ForumHome";
import LandingPage from "./LandingPageDivinity";
import {
  getItemIsAdmin,
  getItemUser,
  getItemDeity,
  getItemMatchedDeities,
} from "./LocalStorageFunctionsDivinity";
import { PopupProvider } from "./PopupContextDivinity";
import Popup from "./PopupDivinity";
import Loading from './LoadingDivinity';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(undefined);
  const [matchedDeities, setMatchedDeities] = useState(undefined);
  const [deity, setDeity] = useState(undefined);
  const [tosButtonClicked, settosButtonClicked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setLoading(true);
    Promise.all([getItemUser(), getItemIsAdmin(), getItemDeity(), getItemMatchedDeities()]).then(([user, isAdmin, deity, matches]) => {
      setUser(user);
      setIsAdmin(isAdmin);
      setDeity(deity);
      setMatchedDeities(matches);
    }).catch(error => {
      console.error('Error fetching data from local storage:', error);
    });
    setLoading(false);
  }, []); // Since we only want this effect to run once, we pass an empty dependency array

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="gradient-container"></div>
      <div className="cursorCanvas">
          <PopupProvider>
            <Popup />
            <div>
              <AppNavbar
                user={user}
                setUser={setUser}
                setDeity={setDeity}
                deity={deity}
                setIsAdmin={setIsAdmin}
                isAdmin={isAdmin}
              />
            </div>
            <Routes>
              <Route
                path="/"
                element={<LandingPage user={user} deity={deity} />}
              />
              {isAdmin ? <Route path="/Admin" element={<Admin />} /> : <></>}
              {deity ? (
                <>
                  <Route
                    path="/Calendar"
                    element={<CalendarPage deity={deity} user={user} />}
                  />
                  <Route
                    path="/Forum"
                    element={
                      <Forum user={user} deity={deity} setDeity={setDeity} />
                    }
                  />
                </>
              ) : (
                <></>
              )}
              <Route path="/Register" element={<Register />} />
              <Route
                path="/Matches"
                element={
                  <Matches
                    user={user}
                    matchedDeities={matchedDeities}
                    setDeity={setDeity}
                  />
                }
              />
              <Route
                path="/Deity"
                element={<Deity deity={deity} setDeity={setDeity} />}
              />
              <Route
                path="/Quiz"
                element={
                  <Quiz
                    tosButtonClicked={tosButtonClicked}
                    settosButtonClicked={settosButtonClicked}
                    setMatchedDeities={setMatchedDeities}
                    user={user}
                  />
                }
              />
            </Routes>
          </PopupProvider>

        <SparklingCursor />
      </div>
    </div>
  );
};

export default App;
