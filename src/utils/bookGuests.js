import { sumArray } from './sumArray';

const bookGuests = (guests, premiumRoomsNum, economyRoomsNum) => {
  let PREMIUM = [];
  let ECONOMY = [];

  guests.sort((x, y) => y - x);

  guests.forEach(guest => {
    if (guest >= 100 && PREMIUM.length < premiumRoomsNum) {
      PREMIUM.push(guest);
    } else if (guest < 100 && ECONOMY.length < economyRoomsNum) {
      ECONOMY.push(guest);
    } else if (guest < 100 && PREMIUM.length < premiumRoomsNum) {
      if (ECONOMY.length > 0) {
        PREMIUM.push(ECONOMY.shift());
        ECONOMY.push(guest);
      } else {
        PREMIUM.push(guest);
      }
    }
  });

  return {
    premium: {
      rooms: PREMIUM.length,
      profit: sumArray(PREMIUM),
      guests: PREMIUM,
    },
    economy: {
      rooms: ECONOMY.length,
      profit: sumArray(ECONOMY),
      guests: ECONOMY,
    },
  }
}

export {
  bookGuests,
}
