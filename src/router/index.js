import { createRouter, createWebHistory } from 'vue-router'

const Home = () =>
    import ("../views/home/home.vue")
const Category = () =>
    import ("../views/category/category.vue")
const Cart = () =>
    import ("../views/cart/cart.vue")
const Profile = () =>
    import ("../views/profile/profile.vue")
const Detail = () =>
    import ("../views/detail/Detail.vue")

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router