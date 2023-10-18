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
              menu: 'STRING_CASE_MENU'
            }
          }
        }
      ],
      menus: {
        STRING_CASE_MENU: {
          acceptReporters: true,
          items: ['Uppercase', 'Lowercase']
        }
      }
    };
  }

  converttextcase(args) {
    if (args.CASE === 'Uppercase') {
      return args.TEXT.toString().toUpperCase();
    } else {
      return args.TEXT.toString().toLowerCase();
    }
  }
}
Scratch.extensions.register(new UtilityFunctionsAddon());
