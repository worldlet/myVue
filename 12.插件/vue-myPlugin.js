/*
* 自定义的Vue插件模块
* */
(function (window) {
    // 定义一个插件对象
    // function MyPlugin () {}
    const MyPlugin = {};

    // 插件对象必须有一个install方法
    MyPlugin.install = function (Vue, options) {
        // 1. 给Vue函数对象添加(工具方法/静态方法)全局方法 或 property
        Vue.myGlobalMethod = function () {
            console.log('Vue.myGlobalMethod()');
        }

        // 2. 添加全局资源(asset)
        Vue.directive('my-directive', (el, binding) => {
            el.textContent = binding.value + '--- test';
        })

        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
            console.log('vm.$myMethod');
        }
    }

    // 暴露方法
    window.MyPlugin = MyPlugin;
})(window)