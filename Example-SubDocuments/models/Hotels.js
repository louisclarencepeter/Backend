import { Schema, MiddlewareOptionsodel } from "mongoose";

const HotelSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  stars: { type: Number, min: 1, max: 5, default: 1 },
});
