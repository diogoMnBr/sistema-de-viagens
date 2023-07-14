import React from 'react'
import Image from 'next/image'
import Button from '../../../../components/Button'

interface LocationProps {
    location: string;
    locationDescription: string;
}

const Location = ({ location, locationDescription }: LocationProps ) => {
    return (
        <div className="p-5">
            <h2 className="text-2xl font-semibold text-grayPrimary pb-2 mb-2 text-center">Localização</h2>

            <div className="relative w-full h-[280px]">
                <Image 
                src="/map-mobile.png" 
                alt={location}
                fill
                style={{objectFit: "cover",}}
                className="rounded-md"
                />
            </div>
                
            <h3 className="text-secondary text-sm font-semibold mt-3">{location}</h3>
            <p className="text-xs text-secondary mt-3 leading-5">{locationDescription}</p>
            <Button variant="outlined" className="w-full mt-5">Ver no Google Maps</Button>
        </div>
    )
}

export default Location;