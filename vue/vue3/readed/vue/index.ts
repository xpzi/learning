// 这个包是包含运行时和编译器的“完整构建”，并且支持动态编译模板选项。
// This package is the "full-build" that includes both the runtime
// and the compiler, and supports on-the-fly compilation of the template option.


// 导入dom 编译器
import { compile, CompilerOptions } from '@vue/compiler-dom'

// 导入 运行时
import { registerRuntimeCompiler, RenderFunction } from '@vue/runtime-dom'
import * as runtimeDom from '@vue/runtime-dom'

// 一个将模板编译为render函数的方法
function compileToFunction(
  template: string,
  options?: CompilerOptions
): RenderFunction {
  const { code } = compile(template, {
    hoistStatic: true,
    ...options
  })

  return new Function('Vue', code)(runtimeDom) as RenderFunction
}

// 注册运行时编译器
registerRuntimeCompiler(compileToFunction)

// 抛出 运行时编译函数
export { compileToFunction as compile }
// 抛出 全部运行时
export * from '@vue/runtime-dom'



// 如果处于浏览器中 并且是开发模式，答应下列信息
if (__BROWSER__ && __DEV__) {
  console[console.info ? 'info' : 'log'](
    `You are running a development build of Vue.\n` +
      `Make sure to use the production build (*.prod.js) when deploying for production.`
  )
}
