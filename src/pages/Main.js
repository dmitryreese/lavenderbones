import React, { useState, useEffect } from 'react';
import './styles/Main.css';

import Input from '../components/Input';
import Button from '../components/Button';

import { bookGuests } from '../utils/bookGuests';
import { GUESTS_URL } from '../const/API';

const Main = () => {
  const [isLoading, setLoadingState] = useState(true);
  const [guests, setGuests] = useState([]);
  const [premiumRooms, setPremiumRooms] = useState('');
  const [economyRooms, setEconomyRooms] = useState('');
  const [bookedData, setBookedData] = useState({});
  const [error, setError] = useState(null);

  const { premium, economy } = bookedData;

  const setMinRooms = (callback) => {
    return (value) => {
      const inputValue = (value === '') ? value : Math.max(0, value);

      callback(inputValue);
    }
  }

  const handleBooking = () => {
    const bookedGuests = bookGuests(guests, +premiumRooms, +economyRooms);

    setBookedData(bookedGuests);
  }
  
  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await fetch(GUESTS_URL);
        const data = await response.json();

        setLoadingState(false);
        setGuests(data);
      } catch (err) {
        setError(err);
      }
    }

    fetchGuests();
  }, []);

  return (
    <div
      className="pages-Main flex-container flex-justify-center"
    >
      {isLoading
        ? <div>Loading...</div>
        : error
          ? <div>{error}</div>
          : (
            <div className="flex-container flex-align-center flex-column">
              <div className="pages-Main-input-container">
                <Input
                  className="pages-Main-input"
                  placeholder="Premium rooms"
                  value={premiumRooms}
                  setValue={setMinRooms(setPremiumRooms)}
                />
                <Input
                  placeholder="Economy rooms"
                  value={economyRooms}
                  setValue={setMinRooms(setEconomyRooms)}
                />
              </div>

              <div>
                <div>
                  Premium rooms: {(premium && premium.rooms) || 0}, Premium profit: {(premium && premium.profit) || 0}
                </div>
                <div>
                  Economy rooms: {(economy && economy.rooms) || 0}, Economy profit: {(economy && economy.profit) || 0}
                </div>
              </div>

              <div>
                <Button
                  className="pages-Main-button"
                  disabled={premiumRooms === '' || economyRooms === ''}
                  onClick={handleBooking}
                  buttonText="Book Guests"
                />
              </div>
            </div>
        )}
    </div>
  )
}

export default Main;
