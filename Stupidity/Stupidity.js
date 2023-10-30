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
          opcode: 'encordectext',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Do [ENCODEORDECODE] string [STRINGTOENCODEORDECODE] to [FORMATALG]',
          arguments: {
            ENCODEORDECODE: {
              type: Scratch.ArgumentType.STRING,
              menu: 'ENCODE_OR_DECODE'
            },
            STRINGTOENCODEORDECODE: {
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
        ENCODE_OR_DECODE: {
          acceptReporters: false,
          items: ['Encode', 'Decode']
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
  encordectext(args) {
    if (args.ENCODEORDECODE === 'Encode') {
      if (args.FORMATALG === 'Base64') {
        return toString(btoa(args.STRINGTOENCODEORDECODE));
      }
    } else {
      if (args.FORMATALG === 'Base64') {
        return toString(atob(args.STRINGTOENCODEORDECODE));
      }
    }
  }
}
Scratch.extensions.register(new stupidity());
