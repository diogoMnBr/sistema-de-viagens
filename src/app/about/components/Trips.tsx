"use client"

/* import { prisma } from '@/lib/prisma'; */
import React, { useEffect, useState } from 'react';

/* const getTrips = async () => {
    const trips = await prisma.trip.findMany({})

    return trips;
} */

const Trips = () => {
    
    const [data, setData] = useState([])

    useState(() => {
        fetch("http://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((res) => setData(res))
    });

    /* const data = getTrips(); //chamada direta pra função getTrips */

    /* const data = await fetch("http://jsonplaceholder.typicode.com/posts",{
        next: {
            revalidate: 10, //tempo de requisição fetch da cache. 0 ou false sempre atualizam novamente, não existe cache
        }
    }).then((res) => res.json())

    console.log({ data }) */
    return (
        <div>
            {data.map((i: any) => (
                <p key={i.id}>{i.title}</p>
            ))}
        </div>
    )
}

export default Trips;