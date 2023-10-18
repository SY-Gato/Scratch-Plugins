class utilityFunctionsAddon { 
  getInfo() {
    return {
      id: 'utilityfunctionsaddon',
      name: 'Extra Utilities',
      blocks: [
        {
          opcode: 'converttextcase',
          blockType: Scratch.BlockType.REPORTER,
          text: 'convert [TEXT] to [CASE]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello'
            },
            CASE: {
              type: Scratch.ArgumentType.STRING,

  }
}
