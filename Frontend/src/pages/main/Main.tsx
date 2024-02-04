import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Table } from '../../components'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

function Main () {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-base-200">
            <div className="mx-auto py-10">
                <Table />
            </div>
        </div>
    )
}

export { Main };
