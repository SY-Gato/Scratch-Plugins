(function(Scratch) {
  "use strict";
  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const renderer = runtime.renderer;
  const shaderManager = renderer._shaderManager;

  const canvas = renderer.canvas;
  const gl = renderer._gl;
  let currentFilter = gl.NEAREST;

  let nativeSize = renderer.useHighQualityRender
    ? [canvas.width, canvas.height]
    : renderer._nativeSize;

  //?create the depth buffer's texture
  //*Create it in scratch's gl so that we have it stored in there!
  let depthBufferTexture = gl.createTexture();

  //?Make a function for updating the depth canvas to fit the scratch stage
  const triFrameBuffer = gl.createFramebuffer();
  const depthColorBuffer = gl.createRenderbuffer();
  const depthDepthBuffer = gl.createRenderbuffer();

  let lastFB = gl.getParameter(gl.FRAMEBUFFER_BINDING);

  //?Buffer handling and pen loading
  {
    gl.bindTexture(gl.TEXTURE_2D, depthBufferTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      nativeSize[0],
      nativeSize[1],
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      null
    );

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, depthBufferTexture);
    gl.activeTexture(gl.TEXTURE0);

    gl.bindFramebuffer(gl.FRAMEBUFFER, triFrameBuffer);

    gl.bindRenderbuffer(gl.RENDERBUFFER, depthColorBuffer);
    gl.renderbufferStorage(
      gl.RENDERBUFFER,
      gl.RGBA8 || gl.RGBA4,
      nativeSize[0],
      nativeSize[1]
    );
    gl.framebufferRenderbuffer(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.RENDERBUFFER,
      depthColorBuffer
    );

    gl.bindRenderbuffer(gl.RENDERBUFFER, depthDepthBuffer);
    gl.renderbufferStorage(
      gl.RENDERBUFFER,
      gl.DEPTH_COMPONENT16,
      nativeSize[0],
      nativeSize[1]
    );
    gl.framebufferRenderbuffer(
      gl.FRAMEBUFFER,
      gl.DEPTH_ATTACHMENT,
      gl.RENDERBUFFER,
      depthDepthBuffer
    );

    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      depthBufferTexture,
      0
    );
    gl.enable(gl.DEPTH_TEST);

    gl.bindFramebuffer(gl.FRAMEBUFFER, lastFB);
