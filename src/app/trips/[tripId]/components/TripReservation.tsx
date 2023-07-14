"use client"

import DatePicker from '@/components/DatePicker'
import React from 'react'
import Input from '@/components/Input'
import { Trip } from '@prisma/client'
import Button from '@/components/Button'

interface TripReservationProps {
    trip: Trip
}

const TripReservation = ({trip}: TripReservationProps) => {
    return (
        <div>
            <div className="flex flex-col px-5 pb-10">
                <div className="flex gap-4">
                    <DatePicker placeholderText="Data de ida" onChange={() => {}} className="w-full"/>
                    <DatePicker onChange={() => {}} className="w-full"/>
                </div>

                <Input placeholder={`Número de hóspedes (max: ${trip.maxGuests})`} className="mt-4" />

                <div className="flex justify-between mt-4">
                    <p className="font-medium text-sm text-secondary">Total: </p>
                    <p className="font-medium text-sm text-secondary">R$ 2.500 </p>
                </div>
                <div className="border-b border-grayLighter">
                    <Button className="mt-3 w-full">Reservar Agora</Button>
                </div>
                
            </div>
        </div>
    )
}

export default TripReservation;