(function(Scratch) {
  "use strict";
  /*if (!Scratch.extensions.unsandboxed) {
    throw new Error('BinaryLogicGates must run unsandboxed');
  }*/
  // Required Variables
  let Cam3DxPos = 0;
  let Cam3DyPos = 0;
  let Cam3DzPos = 0;
  let AllBlockRotX = 0;
  let AllBlockRotY = 0;
  // Blocks
  class BinaryLogicGates{
    getInfo() {
      return {
        id: 'binarylogicgates',
        name: 'Binary Logic Gates',
        blocks: [
          {
            opcode: "__NOUSEOPCODE",
            blockType: Scratch.BlockType.LABEL,
            text: "Functions",
          },
          {
            opcode: 'nandgate',
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true,
            text: 'NAND [A] [B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                DefaultValue: 0
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                DefaultValue: 0
              },
            },
          },
          {
            opcode: 'camyposreturn',
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true,
            text: 'Cam YPos'
          },
          {
            opcode: 'camzposreturn',
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true,
            text: 'Cam ZPos'
          },
          {
            opcode: 'allblockrotx',
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true,
            text: 'All Block RotX'
          },
          {
            opcode: 'allblockroty',
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true,
            text: 'All Block RotY'
          },
        ],
      };
    }
    nandgate(args) {
      if ((not ( args.A == 1 && args.B == 1)) == true) {
        return 1;
      } else {
        return 0;
      }
    }
    camyposreturn() {
      return Cam3DyPos;
    }
    camzposreturn() {
      return Cam3DzPos;
    }
    allblockrotx() {
      return AllBlockRotX;
    }
    allblockroty() {
      return AllBlockRotY;
    }
  }
  Scratch.extensions.register(new BinaryLogicGates());
})(Scratch);
