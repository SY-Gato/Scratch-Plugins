class stupidity { 
  getInfo() {
    return {
      id: 'stupidity',
      name: 'Stupidity',
      blocks: [
        {
          opcode: 'converttextcase',
          blockType: Scratch.BlockType.REPORTER,
          text: 'convert [TEXT] to [CASE]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Stupidity'
            },
            CASE: {
              type: Scratch.ArgumentType.STRING,
              menu: 'STRING_CASE_MENU'
            },
          },
        },
        {
          opcode: 'encodethetext',
          blockType: Scratch.BlockType.REPORTER,
          text: 'encode [STRINGTOENC] with [FORMATALG]',
          arguments: {
            STRINGTOENCODE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Stupidity'
            },
            FORMATALG: {
              type: Scratch.ArgumentType.STRING,
              menu: 'ENCODE_OR_DECODE_ALGORITHM'
            },
          },
        },
      ],
      menus: {
        STRING_CASE_MENU: {
          acceptReporters: true,
          items: ['Uppercase', 'Lowercase']
        },
        ENCODE_OR_DECODE_ALGORITHM: {
          acceptReporters: false,
          items: ['Base64', 'Base64Url']
        },
      },
    };
  }

  converttextcase(args) {
    if (args.CASE === 'Uppercase') {
      return args.TEXT.toString().toUpperCase();
    } else {
      return args.TEXT.toString().toLowerCase();
    }
  }
  encodethetext(args) {
    try {
      if (args.FORMATALG === 'Base64') {
        return btoa(args.STRINGTOENC);
      }
    } catch (e) {
      return '';
    }
  }
}
Scratch.extensions.register(new stupidity());
