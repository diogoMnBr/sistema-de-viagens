import React from 'react'
import Image from 'next/image'

interface TripHighlightProps {
    highlight: string[];
}

const TripHighlight = ({ highlight }: TripHighlightProps) => {
    return (
        
            <div className="flex flex-col p-5">
                <h2 className="text-2xl font-semibold text-grayPrimary pb-2 mb-2 text-center">Destaques</h2>
                
                <div className="flex flex-wrap gap-y-2">
                    {highlight.map((highlight, index) => (
                        <div key={highlight} className="flex items-center gap-1 w-1/2">
                            <Image src="/check-icon.png" width={15} height={15} alt={highlight} />

                            <p className="text-xs text-secondary mt-1 ml-2">{highlight}</p>
                        </div>
                    ))}
                </div>
            </div>
        
    )
}

export default TripHighlight;