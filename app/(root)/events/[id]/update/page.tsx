import EventForm from "@/components/shared/EventForm"
import { getEventById } from "@/lib/actions/event.action";
import { auth } from "@clerk/nextjs";

type UpdateEventProps = {
  params: {
    id: string
  }
}

const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const event = await getEventById(id)

  return (
    <div className="bg-[#1e1f23] pb-8">
<<<<<<< HEAD
      <section className="bg-dotted-pattern bg-cover bg-center pt-24 py-2">
=======
      <section className=" bg-cover bg-center pt-24 py-2">
>>>>>>> a795834 (Refactory)
        <h3 className="wrapper h3-bold  text-center text-[#e41312] sm:text-left">Update Event - {event.title}</h3>
      </section>

      <div className="wrapper my-8">
        <EventForm 
          type="Update" 
          event={event} 
          eventId={event._id} 
          userId={userId} 
        />
      </div>
    </div>
  )
}

export default UpdateEvent