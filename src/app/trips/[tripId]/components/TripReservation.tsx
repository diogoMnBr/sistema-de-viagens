"use client"

import DatePicker from '@/components/DatePicker'
import React from 'react'
import Input from '@/components/Input'
import { Trip } from '@prisma/client'
import Button from '@/components/Button'
import { useForm, Controller } from 'react-hook-form'

interface TripReservationProps {
    trip: Trip
}

interface TripReservationForm {
    guests: number;
    startDate?: Date | null;
    endDate?: Date | null;
}

const TripReservation = ({trip}: TripReservationProps) => {
    const {
        register, 
        handleSubmit, 
        formState: { errors },
        control,
    } = useForm<TripReservationForm>();

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <div>
            <div className="flex flex-col px-5 pb-10">
                <div className="flex gap-4">
                    <Controller 
                        name="startDate"
                        rules={{
                            required: {
                                value: true,
                                message: "Data de ida é obrigatória"
                            }
                        }}
                        control={control}
                        render={({ field }) => (
                        <DatePicker 
                            error={!!errors?.startDate} 
                            errorMessage={errors?.startDate?.message} 
                            onChange={field.onChange} 
                            selected={field.value} 
                            placeholderText="Data de ida" 
                            className="w-full"
                        />
                        )}
                    />
                    <Controller 
                        name="endDate"
                        rules={{
                            required: {
                                value: true,
                                message: "Data de volta é obrigatória"
                            }
                        }}
                        control={control}
                        render={({ field }) => (
                        <DatePicker 
                            error={!!errors?.endDate} 
                            errorMessage={errors?.endDate?.message} 
                            onChange={field.onChange} 
                            selected={field.value} 
                            placeholderText="Data final" 
                            className="w-full"
                        />
                        )}
                    />
                </div>

                <Input
                {...register("guests",{
                    required:{
                        value: true,
                        message: "Numero de hóspedes é obrigatório"
                    }

                })} 
                placeholder={`Número de hóspedes (max: ${trip.maxGuests})`} 
                className="mt-4"
                error={!!errors?.guests}
                errorMessage={errors?.guests?.message}
                />

                <div className="flex justify-between mt-4">
                    <p className="font-medium text-sm text-secondary">Total: </p>
                    <p className="font-medium text-sm text-secondary">R$ 2.500 </p>
                </div>
                <div className="border-b border-grayLighter">
                    <Button onClick={() => handleSubmit(onSubmit)()} variant="primary"className="mt-3 w-full">Reservar Agora</Button>
                </div>
                
            </div>
        </div>
    )
}

export default TripReservation;