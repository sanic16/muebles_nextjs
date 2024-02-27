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

import gallery_img_1 from '@/../public/images/gallery-img-1.jpeg'
import gallery_img_2 from '@/../public/images/gallery-img-2.jpeg'
import gallery_img_3 from '@/../public/images/gallery-img-3.jpeg'
import gallery_img_4 from '@/../public/images/gallery-img-4.jpeg'
import gallery_img_5 from '@/../public/images/gallery-img-5.jpeg'
import gallery_img_6 from '@/../public/images/gallery-img-6.jpeg'
import gallery_img_7 from '@/../public/images/gallery-img-7.jpeg'
import gallery_img_8 from '@/../public/images/gallery-img-8.jpeg'
import gallery_img_9 from '@/../public/images/gallery-img-9.jpeg'
import gallery_img_10 from '@/../public/images/gallery-img-10.jpeg'
import gallery_img_11 from '@/../public/images/gallery-img-11.jpeg'
import gallery_img_12 from '@/../public/images/gallery-img-12.jpeg'

const gallery = [
    { id: 1, image: gallery_img_1 },
    { id: 2, image: gallery_img_2 },
    { id: 3, image: gallery_img_3 },
    { id: 4, image: gallery_img_4 },
    { id: 5, image: gallery_img_5 },
    { id: 6, image: gallery_img_6 },
    { id: 7, image: gallery_img_7 },
    { id: 8, image: gallery_img_8 },
    { id: 9, image: gallery_img_9 },
    { id: 10, image: gallery_img_10 },
    { id: 11, image: gallery_img_11 },
    { id: 12, image: gallery_img_12}
]

export {
    second_nav_item, 
    furniture_categories,
    bestselling,
    gallery
}  