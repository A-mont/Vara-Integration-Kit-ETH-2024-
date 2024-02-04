import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

function Home() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-base-200">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight primary sm:text-6xl">
                        Learn English for Web3 Development!
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">¡Aprenda inglés técnico para impulsar su carrera en tecnologías Web3!</p>

                    <div className="carousel max-h-10 rounded-box">
                        <div className="carousel-item max-w-20">
                            <img src="/LOGOS5MAY/Astar.png" alt="Burger" />
                        </div> 
                        <div className="carousel-item max-w-20">
                            <img src="/LOGOS5MAY/avalanche.png" alt="Burger" />
                        </div> 
                        <div className="carousel-item max-w-20">
                            <img src="/LOGOS5MAY/VARA.png" alt="Burger" />
                        </div> 
                        <div className="carousel-item max-w-20">
                            <img src="/LOGOS5MAY/near.png" alt="Burger" />
                        </div> 
                        <div className="carousel-item max-w-20">
                            <img src="/LOGOS5MAY/push.jpeg" alt="Burger" />
                        </div> 
                        <div className="carousel-item max-w-20">
                            <img src="/LOGOS5MAY/icp.jpg" alt="Burger" />
                        </div> 
                        <div className="carousel-item max-w-20">
                            <img src="/LOGOS5MAY/Astar.png" alt="Burger" />
                        </div> 
                    </div>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/home"
                            className="btn bg-primary"
                        >
                            Get started
                        </a>
                        <a href="/home" className="btn bg-secondary">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Home };

