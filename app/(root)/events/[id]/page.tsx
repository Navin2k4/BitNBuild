import CheckoutButton from "@/components/shared/CheckoutButton";
import Collection from "@/components/shared/Collection";
import {
  getEventById,
  getRelatedEventsByCategory,
} from "@/lib/actions/event.action";
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  User,
  Clock,
  ExternalLink,
  Users,
  Mail,
  Map,
  QrCode,
} from "lucide-react";
import CopyLinkButton from "@/components/shared/CopyLinkButton";
import { Key } from "react";
import { auth } from "@clerk/nextjs";
import { hasUserBoughtEvent } from "@/lib/actions/order.action";
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
=======
>>>>>>> ea60735ddba4b669a5b3c41c2207733896769523

const EventDetails = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {

  const event = await getEventById(id);
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
<<<<<<< HEAD

  const isPurchased = await hasUserBoughtEvent(userId, event._id);

=======
  const isEventCreator = userId === event.organizer._id.toString();
  console.log(isEventCreator);
  
  const isPurchased = await hasUserBoughtEvent(userId, event._id);
>>>>>>> ea60735ddba4b669a5b3c41c2207733896769523

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: searchParams.page as string,
  });

  return (
    <div className=" bg-black pb-24">
      <section className="w-full bg-gradient-to-b pt-24 py-12">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden border-none">
            <div className="flex flex-col lg:flex-row">
              <div className="relative w-full lg:w-1/2 h-64 lg:h-auto shadow-xl">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                />
                <CopyLinkButton eventId={event._id} />
              </div>

              <CardContent className="w-full lg:w-1/2 p-6 lg:p-10 bg-gray-300">
<<<<<<< HEAD
                <CardHeader className="p-0 mb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    
                  {isPurchased && 
                    <Badge
                      variant="outline"
                      className="bg-green-100 border-black text-md py-1 px-3"
                    >
                      Purchased
                    </Badge>}
                    <Badge
                      variant={
                        event.isFree || event.price === ""
                          ? "outline"
                          : "destructive"
                      }
                      className="text-lg py-1 px-3 border-white"
                    >
                      {event.isFree || event.price === ""
                        ? "FREE"
                        : `Rs.${event.price}`}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-100 border-black text-md py-1 px-3"
                    >
                      {event.category.name}
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    Organized by {event.organizer.firstName}{" "}
                    {event.organizer.lastName}
                  </CardDescription>
                </CardHeader>
=======
              <CardHeader className="p-0 mb-6 relative">
  <div className="flex flex-wrap items-center gap-3 mb-4">
    {isPurchased && (
      <Badge
        variant="outline"
        className="bg-green-100 border-black text-md py-1 px-3"
      >
        Purchased
      </Badge>
    )}
    <Badge
      variant={
        event.isFree || event.price === ""
          ? "outline"
          : "destructive"
      }
      className="text-lg py-1 px-3 border-white"
    >
      {event.isFree || event.price === ""
        ? "FREE"
        : `Rs.${event.price}`}
    </Badge>
    <Badge
      variant="outline"
      className="bg-purple-100 border-black text-md py-1 px-3"
    >
      {event.category.name}
    </Badge>
  </div>
  
  {/* Event Creator Indicator and Image */}
  <div className="absolute top-0 right-0 flex items-center">
    {isEventCreator && (
    <div className="w-[120px] h-[120px] border-2 border-gray-200 rounded-lg overflow-hidden mr-2">
      {/* Replace with actual image source */}
      <img src={event.imageUrl} alt="Event" className="w-full h-full object-cover" />
    </div>

    )}
  </div>

  <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
    {event.title}
  </CardTitle>
  <CardDescription className="text-gray-600 flex items-center">
    <User className="h-4 w-4 mr-2" />
    Organized by {event.organizer.firstName}{" "}
    {event.organizer.lastName}
  </CardDescription>
</CardHeader>

>>>>>>> ea60735ddba4b669a5b3c41c2207733896769523
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-red-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Date</p>
                      <p className="text-gray-600">
                        {formatDateTime(event.startDateTime).dateOnly}
                      </p>
                      <p className="text-gray-600">
                        {formatDateTime(event.endDateTime).dateOnly}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-red-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Time</p>
                      <p className="text-gray-600">
                        {formatDateTime(event.startDateTime).timeOnly} -{" "}
                        {formatDateTime(event.endDateTime).timeOnly}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-red-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">Location</p>
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                  </div>

                  {/* New Event Capacity Section */}
                  <div className="flex items-start gap-3 ">
                    <Users className="h-5 w-5 text-red-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800">
                        Event Capacity
                      </p>
                      <p className="text-gray-600">
                        {event.eventCapacity ? event.eventCapacity : "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
                <div className="flex-center flex-col py-5 rounded-lg bg-white text-grey-500">
=======
                {/* <div className="flex-center flex-col py-5 rounded-lg bg-white text-grey-500">
>>>>>>> ea60735ddba4b669a5b3c41c2207733896769523
                  <Map width={60} height={60} />
                  <h3 className="mb-2 mt-2">Location Placeholder</h3>
                  <p className="p-medium-12">
                    Call API and try to get the map of the given location
                  </p>
<<<<<<< HEAD
                </div>
=======
                </div> */}
                {event.mapLocation && (
                  <div className="flex-center flex-col rounded-lg bg-white text-grey-500">
                    <iframe
                      src={event.mapLocation}
                      width="600"
                      height="200"
                      loading="lazy"
                    ></iframe>
                  </div>
                )}
>>>>>>> ea60735ddba4b669a5b3c41c2207733896769523
                {/* Event Description */}
                <div className="space-y-4 my-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Event Description
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                  <Link
                    href={event.url}
                    className="inline-flex items-center text-red-600 hover:text-purple-800 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Event Website
                  </Link>
                </div>
                {/* New Coordinators Section */}
                {event.coordinators && event.coordinators.length > 0 && (
                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Coordinators
                    </h3>
                    {event.coordinators.length > 0 ? (
                      <ul className="space-y-2">
                        {event.coordinators.map(
                          (
                            coordinator: {
                              name: string | null | undefined;
                              email: string | null | undefined;
                              phone: string | null | undefined;
                            },
                            index: Key | null | undefined
                          ) => (
                            <li
                              key={index}
<<<<<<< HEAD
                              className="flex items-center justify-between px-4 py-3.5 bg-white rounded-lg shadow-md transition hover:shadow-lg"
=======
                              className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 py-3.5 bg-white rounded-lg shadow-md transition hover:shadow-lg space-y-3 sm:space-y-0"
>>>>>>> ea60735ddba4b669a5b3c41c2207733896769523
                            >
                              <div className="flex flex-col">
                                <span className="font-medium text-gray-800">
                                  {coordinator.name || "N/A"}
                                </span>
<<<<<<< HEAD
                                <span className="text-gray-600">
                                  {coordinator.email || "N/A"}
                                </span>
                                <span className="text-gray-600">
                                  {coordinator.phone || "N/A"}
                                </span>
                              </div>
                              <div className="flex hover:bg-red-500 px-2 py-1 hover:text-white  gap-2 mr-2 text-red-600 rounded-lg transition-all duration-300 focus:outline-none">
                                <Mail />
                                <h2>Contact</h2>
                              </div>
=======
                                <span className="text-sm md:text-md text-gray-600">
                                  {coordinator.email || "N/A"}
                                </span>
                                <span className="text-sm md:text-md text-gray-600">
                                  {coordinator.phone || "N/A"}
                                </span>
                              </div>
                              <a 
                              href={`mailto:${coordinator.email}`}
                              className="flex items-center hover:cursor-pointer hover:bg-red-500 px-2 py-1 hover:text-white gap-2 text-red-600 rounded-lg transition-all duration-300 focus:outline-none">
                                <Mail />
                                <h2>Contact</h2>
                              </a>
>>>>>>> ea60735ddba4b669a5b3c41c2207733896769523
                            </li>
                          )
                        )}
                      </ul>
                    ) : (
                      <p className="text-gray-600">
                        No coordinators available.
                      </p>
                    )}
                  </div>
                )}

                {isPurchased ? (
                  <div className="flex items-center justify-between bg-gray-200 p-4 rounded-lg shadow-md">
                    <p className="text-lg font-semibold">
<<<<<<< HEAD
                      You have already purchased! Scan for Attandance 
                    </p>
                    <button
                    className="p-2 border border-black rounded-md hover:bg-black hover:text-white transition-colors duration-300" 
                      type="button"
                    
                    >
                      <QrCode height={32} width={32} />
                      </button>
=======
                      You have already purchased! Scan for Attandance
                    </p>
                    <button
                      className="p-2 border border-black rounded-md hover:bg-black hover:text-white transition-colors duration-300"
                      type="button"
                    >
                      <QrCode height={32} width={32} />
                    </button>
>>>>>>> ea60735ddba4b669a5b3c41c2207733896769523
                  </div>
                ) : (
                  <CheckoutButton event={event} />
                )}
              </CardContent>
            </div>
          </Card>
        </div>
      </section>
      {/* EVENTS with the same category */}
      <section className="wrapper  flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold text-[#e41312]">Related Events</h2>
        <Collection
          data={relatedEvents?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
      </section>
    </div>
  );
};

export default EventDetails;
