import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="p-4 flex flex-col justify-center items-center">
            <Image src="/logo-born.png" width={120} height={80} alt="Logo" className="pb-2" />
            <p className="text-sm text-secondary">Todos os direitos reservados</p>

        </div>
    )
}

export default Footer;