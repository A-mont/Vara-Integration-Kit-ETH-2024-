import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

function Lesson () {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-base-200">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight primary sm:text-6xl">THIS IS THE LESSON PAGE</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">¡Aprenda inglés técnico para impulsar su carrera en tecnologías Web3!</p>

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

export { Lesson};
