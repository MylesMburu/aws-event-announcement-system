import EventCard from "@/app/components/eventCard";

const events = [
  {
    id: "1",
    title: "Tech Conference 2025",
    description: "Join us for the biggest tech event of the year!",
    createdAt: new Date().toISOString(),
  },
];

export default function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Upcoming Events</h1>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}