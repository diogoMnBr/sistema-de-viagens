import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="p-4 flex flex-col justify-center items-center">
            <Image src="/logo.png" width={200} height={200} alt="Logo" />
            <p className="text-sm text-secondary">Todos os direitos reservados</p>

        </div>
    )
}

export default Footer;