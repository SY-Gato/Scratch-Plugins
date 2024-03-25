(function(Scratch) {
  "use strict";
  // Required Variables

  // Blocks
  class prompt1Thingy {
    getInfo() {
      return {
        id: 'promptthingy1',
        name: 'PromptTest1',
        isDynamic: true,
        blocks: [
          {
            opcode: "__NOUSEOPCODE",
            blockType: Scratch.BlockType.LABEL,
            text: "Variables",
          },
          {
            opcode: 'unsandbox',
            text: 'Run Unsandboxed',
            blockType: BlockType.BUTTON,
            hideFromPalette: this.runningEditorUnsandboxed
          },
        ],
      };
    }
    async unsandbox() {
      const unsandbox = await this.runtime.vm.securityManager.canUnsandbox('PromptTest1');
      if (!unsandbox) return;
      this.runningEditorUnsandboxed = true;
      this.runtime.vm.emitWorkspaceUpdate();
    }
  }
  Scratch.extensions.register(new prompt1Thingy());
})(Scratch);
