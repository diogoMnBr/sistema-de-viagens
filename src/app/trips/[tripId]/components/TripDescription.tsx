import React from 'react'
import { Trip } from '@prisma/client'

interface TripDescriptionProps {
    description: string
}

const TripDescription = ({description}: TripDescriptionProps) => {
    return (
        <div>
            <div className="flex flex-col">
                <h2 className="text-2xl font-semibold text-grayPrimary">Sobre a Viagem</h2>
                <p className="text-xs leading-5 text-secondary mt-1">{description}</p>
            </div>
        </div>
    )
}

export default TripDescription;

