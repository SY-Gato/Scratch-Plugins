class awExtension {
  constructor(runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {runtime}
         */
        this.runtime = runtime;
        this.runningEditorUnsandboxed = false;
    }
  getInfo() {
    return {
      id: "awextension",
      name: "Awww",
      isDynamic: true,
      blocks: [
        {
          opcode: "doit",
          blockType: Scratch.BlockType.COMMAND,
          text: "Yessir"
        },
      ],
    };
  }
  async doit() {
    const unsandbox = await this.runtime.vm.securityManager.canUnsandbox('Awww');
    if (!unsandbox) return;
    this.runningEditorUnsandboxed = true;
    this.runtime.vm.emitWorkspaceUpdate();
  }
}
