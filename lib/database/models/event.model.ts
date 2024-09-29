import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price: string;
  isFree: boolean;
  url?: string;
<<<<<<< HEAD
  category: { _id: string, name: string }
  organizer: { _id: string, firstName: string, lastName: string }
=======
  category: { _id: string; name: string };
  organizer: { _id: string; firstName: string; lastName: string };
  eventCapacity?: number;  // New optional attribute
  mapLocation?: string;    // New optional attribute
  coordinators?: {         // New optional array of coordinators
    name: string;
    email: string;
    phone: string;
  }[];
  registrationEndDate?: Date; // New optional attribute for registration end date
>>>>>>> a795834 (Refactory)
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  organizer: { type: Schema.Types.ObjectId, ref: 'User' },
<<<<<<< HEAD
})

const Event = models.Event || model('Event', EventSchema);

export default Event;
=======
  eventCapacity: { type: Number },  // Optional attribute
  mapLocation: { type: String },     // Optional attribute
  coordinators: [{                   // Optional array of coordinators
    name: { type: String, required: false },
    email: { type: String, required: false },
    phone: { type: String, required: false }
  }],
  registrationEndDate: { type: Date } // Optional attribute for registration end date
});

const Event = models.Event || model('Event', EventSchema);

export default Event;
>>>>>>> a795834 (Refactory)
