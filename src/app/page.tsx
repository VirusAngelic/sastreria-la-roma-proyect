'use client'
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

const parrafoPrincipal =
    'Un vestido debe seguir las líneas naturales del cuerpo, no forzarlo a ajustarse a las del vestido.'

const autor = 'Cristóbal Balenciaga'

export default function Home() {
    return (
        <motion.div className={'text'}>
            {parrafoPrincipal.split('').map((letra, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                >
                    {letra}
                </motion.span>
            ))}
        </motion.div>
    )
}
