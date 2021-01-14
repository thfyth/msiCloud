// 导入自己需要的组件
import {
    Button,
    Menu,
    Icon,
    Layout,
    Breadcrumb
} from 'ant-design-vue'
const antdv = {
    install: function (Vue) {
        Vue.use(Button),
        Vue.use(Menu),
        Vue.use(Icon),
        Vue.use(Layout),
        Vue.use(Breadcrumb)
    }
}
export default antdv