const products = [
    {
        id: '1', 
        name: 'AL SON DE LA TAMBORA', 
        price: 174.00, 
        category: 'comidas',
        img:'https://panama.com.mx/wp-content/uploads/2021/10/ALSONDELATAMBORA-1.jpg',
        stock: 25,
        description: 'Combinación de asado a la plaza, con pechuga adobada (120 g) al grill, guacamole y frijolitos.'  
    },
    { 
        id: '2', 
        name: 'Amor', 
        price: 350.00, 
        category: 'pasteles', 
        img: 'https://panama.com.mx/wp-content/uploads/2022/01/18-1.jpg',
        stock: 25,
        description: 'Pastel de 4 capas de pan de vainilla tradicional.'  
    },
    { 
        id: '3', 
        name: 'ARCOÍRIS', 
        price: 310.00, 
        category: 'pasteles', 
        img: 'https://panama.com.mx/wp-content/uploads/2023/04/ARCOIRIS-1.png',
        stock: 25,
        description: 'Pastel de pan de vainilla con relleno de fresa. 4 capas de pan, diámetro 20 cm. Para 25 personas aprox.'  
    },
    { 
        id: '4', 
        name: 'PANABOX COMIDA JUGUETE NIÑO', 
        price: 299.00, 
        category: 'panaboxes', 
        img: 'https://panama.com.mx/wp-content/uploads/2023/04/comi-2-1.png',
        stock: 25,
        description: 'Burger Bros (120 g). Cherry Gummy (500 ml). Rebanada de pastel Ferrero. Juguete coleccionable.'  
    },
    { 
        id: '5', 
        name: 'PANABOX FESTEJO DESAYUNO', 
        price: 318.00, 
        category: 'panaboxes', 
        img: 'https://panama.com.mx/wp-content/uploads/2022/10/Panabox-de-festejo-Desayuno-_-1.png',
        stock: 25,
        description: 'Combinación El poblano, Café americano, Vaso de fruta, Rebanada de pay de guayaba'  
    },
    { 
        id: '6', 
        name: 'PANABOX FESTEJO COMIDA', 
        price: 310.00, 
        category: 'panaboxes', 
        img: 'https://panama.com.mx/wp-content/uploads/2022/10/Panabox-de-festejo-Comida-_-1-1.png',
        stock: 25,
        description: 'Pechuga cordon blue, Bebida Limonjito, Rebanada de pay de guayaba'  
    },
    { 
        id: '7', 
        name: 'BIG BURRO DE ASADA', 
        price: 185.00, 
        category: 'comidas', 
        img: 'https://panama.com.mx/wp-content/uploads/2021/10/BURRITO-DE-ASADA-1.jpg',
        stock: 25,
        description: 'Relleno con carne de Boston butt de puerco a las brasas, queso gratinado, chile anaheim, cebolla salteada, tocino y aguacate, acompañado de papas fritas,frijolitos de la olla y ensadala verde.'  
    },
    { 
        id: '8', 
        name: 'BIRRIAMEN', 
        price: 163.00, 
        category: 'comidas', 
        img: 'https://panama.com.mx/wp-content/uploads/2022/08/BIRRIAMEN-1.jpg',
        stock: 25,
        description: 'Delicioso platillo con fideos orientales, caldo y jugosa carne de birria (75 g) con huevo cocido y quesadilla doradita. ¡Este se come con cuchara y tenedor!'  
    },
    { 
        id: '9', 
        name: 'CONSOMÉ ORIENTAL MIXTO GRANDE', 
        price: 117.00, 
        category: 'comidas', 
        img: 'https://panama.com.mx/wp-content/uploads/2022/07/CONSOME-ORIENTAL.jpg',
        stock: 25,
        description: 'Con pollo (35g) y camarón (35g), vegetales y fideo de arroz (500 ml)'  
    }
]       


export const getProducts = () => {
    return new Promise( (resolve) => {
        setTimeout ( () => {
            resolve (products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}