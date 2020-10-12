export interface Product {
    _id: string
    name: string
    price: number
    stock: number
    createdAt?: string
    updatedAt?: string
}

const Products: Product[] = [
    {
        _id: '1',
        name: 'Cookie',
        price: 1.25,
        stock: 20
    },
    {
        _id: '2',
        name: 'Milk 1L',
        price: 0.99,
        stock: 200
    },
    {
        _id: '3',
        name: 'Detergente',
        price: 0.30,
        stock: 101
    },
    {
        _id: '4',
        name: 'Agua 250 ml',
        price: 0.40,
        stock: 300
    }

    
]

export default Products