import { bookGuests } from '../utils/bookGuests';
import GUESTS from '../__mockData__/GUESTS';

describe('Booking guests tests', () => {

  // ===========================================================
  //                       CASE ONE
  // ===========================================================

  describe('Case one: 3 Premium, 3 Economy', () => {
    const { premium, economy } = bookGuests(GUESTS, 3, 3);

    it('Books premium rooms correctly', () => {
      expect(premium.rooms).toEqual(3);
      expect(premium.profit).toEqual(738);
    });

    it('Books economy rooms correctly', () => {
      expect(economy.rooms).toEqual(3);
      expect(economy.profit).toEqual(167);
    });
  });

  // ===========================================================
  //                       CASE TWO
  // ===========================================================

  describe('Case two: 7 Premium, 5 Economy', () => {
    const { premium, economy } = bookGuests(GUESTS, 7, 5);

    it('Books premium rooms correctly', () => {
      expect(premium.rooms).toEqual(6);
      expect(premium.profit).toEqual(1054);
    });

    it('Books economy rooms correctly', () => {
      expect(economy.rooms).toEqual(4);
      expect(economy.profit).toEqual(189);
    });
  });

  // ===========================================================
  //                       CASE THREE
  // ===========================================================

  describe('Case three: 2 Premium, 7 Economy', () => {
    const { premium, economy } = bookGuests(GUESTS, 2, 7);

    it('Books premium rooms correctly', () => {
      expect(premium.rooms).toEqual(2);
      expect(premium.profit).toEqual(583);
    });

    it('Books economy rooms correctly', () => {
      expect(economy.rooms).toEqual(4);
      expect(economy.profit).toEqual(189);
    });
  });

  // ===========================================================
  //                       CASE FOUR
  // ===========================================================
  describe('Case four: 7 Premium, 1 Economy', () => {
    const { premium, economy } = bookGuests(GUESTS, 7, 1);

    it('Books premium rooms correctly', () => {
      expect(premium.rooms).toEqual(7);
      expect(premium.profit).toEqual(1153);
    });

    it('Books economy rooms correctly', () => {
      expect(economy.rooms).toEqual(1);
      expect(economy.profit).toEqual(45);
    });
  });

  // ===========================================================
  //                       CASE FIVE
  // ===========================================================
  describe('Case five: 11 Premium, 0 Economy', () => {
    const { premium, economy } = bookGuests(GUESTS, 11, 0);

    it('Books premium rooms correctly', () => {
      expect(premium.rooms).toEqual(10);
      expect(premium.profit).toEqual(1243);
    });

    it('Books economy rooms correctly', () => {
      expect(economy.rooms).toEqual(0);
      expect(economy.profit).toEqual(0);
    });
  });

  // ===========================================================
  //                       CASE SIX
  // ===========================================================
  describe('Case six: 0 Premium, 11 Economy', () => {
    const { premium, economy } = bookGuests(GUESTS, 0, 11);

    it('Books premium rooms correctly', () => {
      expect(premium.rooms).toEqual(0);
      expect(premium.profit).toEqual(0);
    });

    it('Books economy rooms correctly', () => {
      expect(economy.rooms).toEqual(4);
      expect(economy.profit).toEqual(189);
    });
  });
});
