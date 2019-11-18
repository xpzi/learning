// 导入 runtime-core 部分方法
import {
    createRenderer,
    warn,
    App,
    RootRenderFunction
  } from '@vue/runtime-core'

  // 导入 runtime-dom 的配置
  import { nodeOps } from './nodeOps'
  import { patchProp } from './patchProp'


  // Importing from the compiler, will be tree-shaken in prod  
  // 从编译器导入，将在prod中进行 tree-shaken

  // 导入需要使用的公共方法
  import { isFunction, isString, isHTMLTag, isSVGTag } from '@vue/shared'
  

  // 执行 createRenderer 方法， 生成baseRender 和 banseCreateApp
  const { render: baseRender, createApp: baseCreateApp } = createRenderer({
    patchProp,
    ...nodeOps
  })
  
  // use explicit type casts here to avoid import() calls in rolled-up d.ts
  //在这里使用显式类型转换以避免在汇总的d.ts中进行import（）调用
  export const render = baseRender as RootRenderFunction<Node, Element>
  

  // 定义 runtime-dom 中的 createApp 箭头函数
  export const createApp = (): App<Element> => {
    
    const app = baseCreateApp()
  
    if (__DEV__) {
      // Inject `isNativeTag` 注入  isNativeTag 方法
      // this is used for component name validation (dev only)  这用于组件名称验证（仅适用于开发人员）
      // app.config.isNativeTag  用于检测是不是浏览器原生标签
      Object.defineProperty(app.config, 'isNativeTag', {
        value: (tag: string) => isHTMLTag(tag) || isSVGTag(tag),
        writable: false
      })
    }
    
    // 定义 runtime-dom 中的 app.mount 挂载方法
    const mount = app.mount
    app.mount = (component, container, props): any => {

      // 如果 container 是字符串，就查询dom节点， 赋值给container， 如果节点不存在则退出挂载
      if (isString(container)) {
        container = document.querySelector(container)!
        if (!container) {
          __DEV__ &&
            warn(`Failed to mount app: mount target selector returned null.`)
          return
        }
      }

      // 这里有一大段的判断， 作用是: 
      // 如果需要运行时编译 并且 component 是个对象，
      // 但是component 没有render方法也没有 template 
      // 就将上面获取到的dom节点的 innerHTML 作为 template
      if (
        __RUNTIME_COMPILE__ &&
        !isFunction(component) &&
        !component.render &&
        !component.template
      ) {
        component.template = container.innerHTML
      }
      // clear content before mounting
      // 安装前清除内容
      container.innerHTML = ''

      // 执行 runtime-core 中的挂载方法
      return mount(component, container, props)
    }
  
    return app
  }
  
  // DOM-only runtime helpers
  // 仅限DOM运行时帮助程序
  // 抛出 只有 runtime-dom 才具有的工具方法 
  export {
    vModelText,
    vModelCheckbox,
    vModelRadio,
    vModelSelect,
    vModelDynamic
  } from './directives/vModel'
  export { withModifiers, withKeys } from './directives/vOn'
  
  // re-export everything from core
  // h, Component, reactivity API, nextTick, flags & types
  // 导出 runtime-core的全部内容
  export * from '@vue/runtime-core'
  
  // Type augmentations
  export interface ComponentPublicInstance {
    $el: Element
  }
  