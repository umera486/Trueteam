import { Metadata } from "next";
import { SERVICES_DATA } from "../../data/services";
import ServiceContent from "./ServiceContent";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>; 
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = SERVICES_DATA.find((s) => s.id === id);
  
  return {
    title: service ? `${service.title} | TrueTeam` : "Service Not Found",
    description: service?.description || "High-end digital strategy.",
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  
  // Find the service data
  const service = SERVICES_DATA.find((s) => s.id === id);

  // If service doesn't exist, trigger Next.js 404
  if (!service) {
    notFound();
  }

  return <ServiceContent service={service} />;
}