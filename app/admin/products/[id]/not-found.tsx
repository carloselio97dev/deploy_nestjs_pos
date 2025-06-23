import Heading from '@/components/ui/Heading'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='text-center'>
        <Heading>Producto no Encontrado</Heading>
        <p>Tal vez quieras volver a {' '}
            <Link className='text-green-400'
            href={'/admin/products?page=1'}
            >Productos</Link>
        </p>
    </div>
  )
}
