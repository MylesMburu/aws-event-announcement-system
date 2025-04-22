import { Event } from "@/app/types";

export default function eventCard({ event }: { event: Event }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold">{event.title}</h2>
      <p>{event.description}</p>
      <p className="text-sm text-gray-500">{new Date(event.createdAt).toLocaleString()}</p>
    </div>
  );
}