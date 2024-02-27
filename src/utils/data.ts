const second_nav_item = [
    { id: 1, title: "Muebles"},
    { id: 2, title: "Dormitorios"},
    { id: 3, title: "Cocina"},
    { id: 4, title: "Exterior"},
    { id: 5, title: "Iluminación"},
    { id: 6, title: "Baño"},
    { id: 7, title: "Ventanas"},
]

const furniture_categories = [
    { "id": 1, "title": "Sillas" },
    { "id": 2, "title": "Sofás" },
    { "id": 3, "title": "Mesas de comedor" },
    { "id": 4, "title": "Mesas de centro" },
    { "id": 5, "title": "Armarios" },
    { "id": 6, "title": "Camas" },
    { "id": 7, "title": "Escritorios" },
    { "id": 8, "title": "Estanterías" },
    { "id": 9, "title": "Muebles de exterior" },
    { "id": 10, "title": "Muebles de televisión" },
    { "id": 11, "title": "Muebles de baño" },
    { "id": 12, "title": "Muebles infantiles" },
    { "id": 13, "title": "Muebles de oficina" },
    { "id": 14, "title": "Muebles de almacenamiento" },
    { "id": 15, "title": "Taburetes" },
    { "id": 16, "title": "Bancos" },
    { "id": 17, "title": "Mesitas de noche" }
]

import bestselling_furniture_kitchen from '@/../public/images/bestsellig-furniture-kitchen.jpg'
import bestselling_furniture_wardrobe from '@/../public/images/bestsellig-furniture-wardrobe.jpg'
import bestselling_furniture_sofa from '@/../public/images/bestsellig-furniture-sofa.jpg'
import bestselling_furniture_table from '@/../public/images/bestsellig-furniture-table.jpg'
import bestselling_furniture_bed from '@/../public/images/bestsellig-furniture-bed.jpg'
import bestselling_furniture_chairs from '@/../public/images/bestsellig-furniture-chairs.jpg'

const bestselling = [
    {id: 1, title: "Cocina",          price: 15000, image: bestselling_furniture_kitchen},
    {id: 2, title: "Armario",         price: 10000, image: bestselling_furniture_wardrobe},
    {id: 3, title: "Sofá",            price: 1500, image: bestselling_furniture_sofa},
    {id: 4, title: "Mesa de comedor", price: 3500, image: bestselling_furniture_table},
    {id: 5, title: "Cama",            price: 1000, image: bestselling_furniture_bed},
    {id: 6, title: "Sillas",          price: 500, image: bestselling_furniture_chairs},
]

export {
    second_nav_item, 
    furniture_categories,
    bestselling
}  