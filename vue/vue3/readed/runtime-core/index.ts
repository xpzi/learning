// Public API ------------------------------------------------------------------
// 公共 api

export const version = __VERSION__
export * from './apiReactivity'
export * from './apiWatch'
export * from './apiLifecycle'
export * from './apiInject'
export { nextTick } from './scheduler'
export { createComponent } from './apiCreateComponent'

// Advanced API ----------------------------------------------------------------
// 高级api

// For getting a hold of the internal instance in setup() - useful for advanced
// 用于在 setup() 中获取内部实例-对于高级

// plugins 插件
export { getCurrentInstance } from './component'

// For raw render function users  对于原始呈现函数用户
export { h } from './h'
export {
  createVNode,
  cloneVNode,
  mergeProps,
  openBlock,
  createBlock
} from './vnode'
// VNode type symbols  虚拟dom的类型符号
export { Text, Comment, Fragment, Portal } from './vnode'
// Internal Components 内部组件
export { Suspense, SuspenseProps } from './components/Suspense'
export { KeepAlive, KeepAliveProps } from './components/KeepAlive'
// VNode flags 虚拟 dom 标志
export { PublicShapeFlags as ShapeFlags } from './shapeFlags'
import { PublicPatchFlags } from '@vue/shared'
export const PatchFlags = PublicPatchFlags as {
  // export patch flags as plain numbers to avoid d.ts relying on @vue/shared
  // the enum type is internal anyway.
  // 将修补程序标志导出为纯数字以避免d.ts依赖@vue/shared枚举类型仍然是内部的。
  TEXT: number
  CLASS: number
  STYLE: number
  PROPS: number
  NEED_PATCH: number
  FULL_PROPS: number
  KEYED_FRAGMENT: number
  UNKEYED_FRAGMENT: number
  DYNAMIC_SLOTS: number
  BAIL: number
}

// For custom renderers 对于自定义渲染器
export { createRenderer, RootRenderFunction } from './renderer'
export { warn } from './warning'
export {
  handleError,
  callWithErrorHandling,
  callWithAsyncErrorHandling
} from './errorHandling'

// Internal, for compiler generated code
// should sync with '@vue/compiler-core/src/runtimeConstants.ts'
// 内部，编译器生成的代码应与“@vue/compiler core/src/runtimeConstants.ts”同步
export { withDirectives } from './directives'
export {
  resolveComponent,
  resolveDirective,
  resolveDynamicComponent
} from './helpers/resolveAssets'
export { renderList } from './helpers/renderList'
export { toString } from './helpers/toString'
export { toHandlers } from './helpers/toHandlers'
export { renderSlot } from './helpers/renderSlot'
export { createSlots } from './helpers/createSlots'
export { setBlockTracking, createTextVNode, createCommentVNode } from './vnode'
// Since @vue/shared is inlined into final builds,
// when re-exporting from @vue/shared we need to avoid relying on their original
// types so that the bundled d.ts does not attempt to import from it.
import { capitalize as _capitalize, camelize as _camelize } from '@vue/shared'
export const capitalize = _capitalize as (s: string) => string
export const camelize = _camelize as (s: string) => string

// Internal, for integration with runtime compiler
export { registerRuntimeCompiler } from './component'

// Types -----------------------------------------------------------------------

export { App, AppConfig, AppContext, Plugin } from './apiApp'
export { VNode, VNodeTypes, VNodeProps } from './vnode'
export {
  Component,
  FunctionalComponent,
  ComponentInternalInstance,
  RenderFunction
} from './component'
export {
  ComponentOptions,
  ComponentOptionsWithoutProps,
  ComponentOptionsWithObjectProps as ComponentOptionsWithProps,
  ComponentOptionsWithArrayProps
} from './apiOptions'

export { ComponentPublicInstance } from './componentProxy'
export { RendererOptions } from './renderer'
export { Slot, Slots } from './componentSlots'
export {
  Prop,
  PropType,
  ComponentPropsOptions,
  ComponentObjectPropsOptions
} from './componentProps'
export {
  Directive,
  DirectiveBinding,
  DirectiveHook,
  ObjectDirective,
  FunctionDirective,
  DirectiveArguments
} from './directives'
export { SuspenseBoundary } from './components/Suspense'
