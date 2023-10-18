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
            },
          },
        },
        {
          opcode: 'fetchdatafromurl',
          blockType: Scratch.BlockType.REPORTER,
          text: 'fetch data from [TARGETURL] with method GET',
          arguments: {
            TARGETURL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://extensions.turbowarp.org/hello.txt'
            },
          },
        },
      ],
      menus: {
        STRING_CASE_MENU: {
          acceptReporters: true,
          items: ['Uppercase', 'Lowercase']
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
  fetchdatafromurl(args) {
    fetch(args.TARGETURL, { method: 'GET' })
      .then((response) => {
      return response;
    } else {
      return '';
    });
    }
  }
}
Scratch.extensions.register(new utilityFunctionsAddon());
