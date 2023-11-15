(function(Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) {
    throw new Error('3DMathematics must run unsandboxed');
  }
  // Required Variables
  let Cam3DxPos;
  let Cam3DyPos;
  let Cam3DzPos;
  let AllBlockRotX;
  let AllBlockRotY;
  // Blocks
  class Mathematics3D {
    getInfo() {
      return {
        id: '3dmathematicssystem',
        name: '3D Mathematics System',
        blocks: [
          {
            opcode: 'allblockrotx',
            blockType: Scratch.BlockType.REPORTER,
            text: 'All Block RotX'
          {
            opcode: 'goto3dcord',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Draw point at [X] [Y] [Z] in 3D',
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              Z: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
            },
          },
        ],
      };
    },
  }
  allblockrotx() {
    return AllBlockRotX;
  }
  goto3dcord(args) {
    return args.X+args.Y+args.Z;
  }
  Scratch.extensions.register(new Mathematics3D());
})(Scratch);
