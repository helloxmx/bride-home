
import index from '@/views/home';//根路由
import main from '@/views/pc/main';
import aboutUs from '@/views/pc/aboutUs';
import test from '@/components/test'


let arr = [
    {
        path: '/',
        name: 'index',
        component: index
        // children: [ //主页二级路由的配置

        //     { path: '/', redirect: '/main' }]
    },
    {
        path: '/main',
        name: 'main',
        component: main,
        meta: {
            requireAuth: true
        }
    },{
        path: '/aboutUs',
        name: 'aboutUs',
        component: aboutUs,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/test',
        name: 'test',
        component: test,
        meta: {
            requireAuth: true
        }
    }

];

export default arr;
