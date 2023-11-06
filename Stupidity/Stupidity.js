if (!Scratch.extensions.unsandboxed) {
  throw new Error("Stupidity must be run unsandboxed");
}
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
            STRINGTOENC: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Stupidity'
            },
            FORMATALG: {
              type: Scratch.ArgumentType.STRING,
              menu: 'ENCODE_OR_DECODE_ALGORITHM'
            },
          },
        },
        {
          opcode: 'funnies',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Do funnies with input [FUNNIESINPUT]',
          arguments: {
            FUNNIESINPUT: {
              type: Scratch.ArgumentType.STRING,
              default: 'Note to dev: please remove this text'
            },
          },
        },
        {
          opcode: 'invertscratch',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Invert Colors (MAY BE PERMANENT)'
        },
        {
          opcode: 'injectcustomcss',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Inject CSS [CSSTOINJECT] (not dangerous)',
          arguments: {
            CSSTOINJECT: {
              type: Scratch
        },
        {
          opcode: 'alerttext',
          blockType: Scratch.BlockType.COMMAND,
          text: 'show text alert [ALERTTEXT]', // for [ALERTTXTTIME] seconds',
          arguments: {
            ALERTTEXT: {
              type: Scratch.ArgumentType.STRING,
              acceptReporters: false,
              defaultValue: 'Stupidity'
            },
            ALERTTXTTIME: {
              type: Scratch.ArgumentType.NUMBER,
              acceptReporters: false,
              defaultValue: '1'
            },
          },
        },
        {
          opcode: 'websitedeath',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Destroy the website (RELOADING FIXES) (NOT DANGEROUS)'
        }
      ],
      menus: {
        STRING_CASE_MENU: {
          acceptReporters: true,
          items: ['Uppercase', 'Lowercase']
        },
        ENCODE_OR_DECODE_ALGORITHM: {
          acceptReporters: false,
          items: ['Base64', 'EncodeURIComponent']
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
        let encodedtextout1 = btoa(args.STRINGTOENC);
        return encodedtextout1;
      } else {
        let encodedtextout2 = encodeURIComponent(args.STRINGTOENC);
        return encodedtextout2;
      }
    } catch (e) {
      return '';
    }
  }
  writetoclipboard(args) {
    return args.FUNNIESINPUT;
  }
  invertscratch() {
    // the css we are going to inject
    var css = 'html {-webkit-filter: invert(100%);' +
    '-moz-filter: invert(100%);' + 
    '-o-filter: invert(100%);' + 
    '-ms-filter: invert(100%); }',
    head = document.getElementsByTagName('head')[0],
    style = document.createElement('style');
    // a hack, so you can "invert back" clicking the bookmarklet again
    if (!window.counter) { window.counter = 1;} else  { window.counter ++; if (window.counter % 2 == 0) { var css ='html {-webkit-filter: invert(0%); -moz-filter:    invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }'}};
    style.type = 'text/css';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    //injecting the css to the head
    head.appendChild(style);
  }
  injectjs() {
    try {
      var injectjs = "R=0; x1=.1; y1=.05; x2=.25; y2=.24; x3=1.6; y3=.24; x4=300; y4=200; x5=300; y5=200; var DI= document.getElementsByTagName('div'); DIL=DI.length; function A(){for(i=0; i<DIL; i++){DIS=DI[ i ].style; DIS.position='absolute'; DIS.left=Math.sin(R*x1+i*x2+x3)*x4+x5+'px'; DIS.top=Math.cos(R*y1+i*y2+y3)*y4+y5+'px'}R++}tag=setInterval('A()',5 );document.onmousedown=function(){clearInterval(tag);for(i=0; i<DIL; i++){DI[i].style.position='static';}};",
      head = document.getElementsByTagName('head')[0],
      script = document.createElement('script');
      script.type = 'text/javascript';
      head.appendChild(script);
    } catch(e) {
      alert(e);
    }
  }
  alerttext(args) {
    alert(args.ALERTTEXT);
  }
  websitedeath() {
    alert('!WARNING! IF YOU HAVE EPILIPSY, GET OFF THE PAGE. THIS IS A WARNING !WARNING! You have just triggered Stupidity website destroyer. !NOTE: this does not cause any permanent damage, nor is it dangerous, and can be removed by reloading.')
    for (let i = 0; i
}
Scratch.extensions.register(new stupidity());
