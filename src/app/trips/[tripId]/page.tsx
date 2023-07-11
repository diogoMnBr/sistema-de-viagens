import React from 'react';
import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import ReactCountryFlag from 'react-country-flag';
import TripHeader from '@/app/trips/[tripId]/components/tripHeader';

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

            {/* RESERVA */}
        </div>
    )
}

export default TripDetails;