const {AFrameFactory} = require('./aframe/aframe.js')
const {AlmostThereFactory} = require('./almosttheremodule/almost-there-module.js')
const {DebugWebViewsFactory} = require('./debugwebviews/debug-web-views.js')
const {FullWindowCanvasFactory} = require('./fullwindowcanvasmodule/full-window-canvas-module.js')
const {LoadingFactory} = require('./loadingmodule/loading-module.js')
const {RuntimeErrorFactory} = require('./runtimeerrormodule/runtime-error-module.js')

module.exports = {
  XRExtras: {
    AFrame: AFrameFactory(),
    AlmostThere: AlmostThereFactory(),
    DebugWebViews: DebugWebViewsFactory(),
    FullWindowCanvas: FullWindowCanvasFactory(),
    Loading: LoadingFactory(),
    RuntimeError: RuntimeErrorFactory(),
  },
}
