import React from 'react'
import Image from 'next/image'

const QuickSearch = () => {
    return (
        <div className="container mx-auto p-5">
            <div className="flex items-center">
                <div className="w-full h-[2px] bg-grayPrimary"></div>
                <h2 className="px-3 font-medium text-grayPrimary whitespace-nowrap">Tente pesquisar por</h2>
                <div className="w-full h-[2px] bg-grayPrimary"></div>
            </div>

            <div className="flex w-full justify-around mt-5">
                <div className="flex flex-col items-center gap-1">
                    <Image width={35} height={35} alt="Hotel" src="/hotel-icon.png"/>
                    <p className="text-sm text-grayPrimary">Hotel</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <Image width={35} height={35} alt="Hotel" src="/farm-icon.png"/>
                    <p className="text-sm text-grayPrimary">Fazenda</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <Image width={35} height={35} alt="Hotel" src="/cottage-icon.png"/>
                    <p className="text-sm text-grayPrimary">Chalé</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <Image width={35} height={35} alt="Hotel" src="/inn-icon.png"/>
                    <p className="text-sm text-grayPrimary">Pousada</p>
                </div>
            </div>
        </div>
    )
}

export default QuickSearch;