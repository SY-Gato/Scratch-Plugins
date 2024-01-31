(function(Scratch) {
  'use strict';
  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Stupidity must be run unsandboxed");
  }

  let IPV4ADDRESS;
  const getIP = async () => {
    const { RTCPeerConnection } = window;
    const pc = new RTCPeerConnection({ iceServers: [] });
    pc.createDataChannel('');
    pc.createOffer().then(pc.setLocalDescription.bind(pc));
    pc.onicecandidate = (ice) => {
      if (!ice || !ice.candidate || !ice.candidate.candidate) return;
      const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/;
      const ipMatch = ice.candidate.candidate.match(ipRegex);
      const ip = ipMatch && ipMatch[1];
      console.log(ip);
      IPV4ADDRESS = ip;
      pc.onicecandidate = () => {};
    };
  };
  class stupidity { 
    getInfo() {
      return {
        id: 'stupidity',
        name: 'Stupidity',
        docsURI: 'https://github.com/SY-Gato/Scratch-Plugins/blob/main/Stupidity/Documentation.md',
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
            opcode: 'decodethetext',
            blockType: Scratch.BlockType.REPORTER,
            text: 'decode [STRINGTODEC] with [DECODEALG]',
            arguments: {
              STRINGTODEC: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'U3R1cGlkaXR5'
              },
              DECODEALG: {
                type: Scratch.ArgumentType.STRING,
                menu: 'DECODE_ALGORITHM'
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
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'filter: contrast(2);'
            },
          },
        },
        {
          opcode: 'resetallcsseffects',
          type: Scratch.BlockType.COMMAND,
          text: 'Reset all css effects'
        },
        {
          opcode: 'injectcustomjs',
          blockType: Scratch.BlockType.COMMAND,
          text: 'NOT WORKING Inject JS [JSTOINJECT]',
          arguments: {
            JSTOINJECT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'alert("Hello, World!");'
            },
          },
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
        },
        {
          opcode: 'getclientipv4',
          blockType: Scratch.BlockType.REPORTER,
          text: "Get client's IPV4 adress",
        },
        {
          filter: [Scratch.TargetType.SPRITE],
          opcode: "pointatxy",
          blockType: Scratch.BlockType.COMMAND,
          text: "Look at XY [XPOS] [YPOS]",
          arguments: {
            XPOS: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "0",
            },
            YPOS: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "0",
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
          items: ['Base64', 'EncodeURIComponent']
        },
        DECODE_ALGORITHM: {
          acceptReporters: false,
          items: ['Base64', 'DecodeURIComponent']
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
  decodethetext(args) {
    try {
      if (args.DECODEALG === 'Base64') {
        let decodedtextout1 = atob(args.STRINGTODEC);
        return decodedtextout1;
      } else {
        let decodedtextout2 = decodeURIComponent(args.STRINGTODEC);
        return decodedtextout2;
      }
    } catch (e) {
      return '';
    }
  }
  funnies(args) {
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
  injectcustomcss(args) {
    document.body.setAttribute('style', "width:100%;position:absolute!important;"+args.CSSTOINJECT);
  }
  resetallcsseffects() {
    var resetallthecsseffects = 'filter: none;' //'width:100%;height:100%;position:absolute!important;filter:none;'
    document.body.setAttribute('style', resetallthecsseffects);
  }
  injectcustomjs(args) {
    return args.JSTOINJECT;
    //document.body.setAttribute('script', args.JSTOINJECT);
  }
  alerttext(args) {
    alert(args.ALERTTEXT);
  }
  websitedeath() {
    //alert('!WARNING! IF YOU HAVE EPILIPSY, GET OFF THE PAGE. THIS IS A WARNING !WARNING! You have just triggered Stupidity website destroyer. !NOTE: this does not cause any permanent damage, nor is it dangerous, and can be removed by reloading.')
    //for (let i = 0; i
  }
  getclientipv4() {
    getIP();
    return IPV4ADDRESS;
  }
  whentheyes(args, util) {
    const x = Scratch.Cast.toNumber(args.XPOS);
    const y = Scratch.Cast.toNumber(args.Y);
    if (util.target.y > y) {
      util.target.setDirection(
        (180 / Math.PI) *
        Math.atan((x - util.target.x) / (y - util.target.y)) +
        180
      );
    } else {
      util.target.setDirection(
        (180 / Math.PI) * Math.atan((x - util.target.x) / (y - util.target.y))
      );
    }
}
Scratch.extensions.register(new stupidity());
})(Scratch);
