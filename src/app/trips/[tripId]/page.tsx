import React from 'react';
import { prisma } from '@/lib/prisma';
import TripHeader from '@/app/trips/[tripId]/components/TripHeader';
import TripReservation from '@/app/trips/[tripId]/components/TripReservation';
import TripDescription from '@/app/trips/[tripId]/components/TripDescription';
import TripHighlight from '@/app/trips/[tripId]/components/TripHighlight';
import Location from '@/app/trips/[tripId]/components/Location';

const getTripDetails = async (tripId: string) => {
    const trip = await prisma.trip.findUnique({
        where : {
            id: tripId
        }
    })

    return trip;
}

const TripDetails = async ({ params }: { params: { tripId: string }}) => {
    const trip = await getTripDetails(params.tripId);

    if (!trip) return null

    return (
        <div className="container mx-auto">
            <TripHeader trip={trip}/>
            <TripReservation pricePerDay={trip.pricePerDay as any} maxGuests={trip.maxGuests} tripStartDate={trip.startDate} tripEndDate={trip.endDate} trip={trip} />
            <TripDescription description={trip.description} />
            <TripHighlight highlight={trip.highlights} />
            <Location location={trip.location} locationDescription={trip.locationDescription}/>
        </div>
    )
}

export default TripDetails;