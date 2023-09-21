import { Schema } from "mongoose";

const RoomSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  maxGuests: { type: Number, min: 1, required: true },
  price: { type: Number, required: true },
  isReserved: { type: Boolean, required: true },
  reservationStart: { type: Date, required: true },
  reservationEnd: { type: Date, required: true },
  roomType: {
    type: String,
    enu: ["Single", "Deluxe Suite", "Double", "Family", "Apartment"],
    required: true,
  },
  services: {
    hasTV: { type: Boolean, required: true },
    hasAC: { type: Boolean, required: true },
    hasWiFi: { type: Boolean, required: true },
    hasParking: { type: Boolean, required: true },
    hasPool: { type: Boolean, required: true },
  },
});
