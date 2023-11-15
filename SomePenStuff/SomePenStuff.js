(function(Scratch) {
  "use strict";
  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const renderer = runtime.renderer;
  const shaderManager = renderer._shaderManager;
  
  const canvas = renderer.canvas;
