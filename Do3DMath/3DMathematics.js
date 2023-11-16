(function(Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) {
    throw new Error('3DMathematics must run unsandboxed');
  }
  // Required Variables
  let Cam3DxPos = 0;
  let Cam3DyPos = 0;
  let Cam3DzPos = 0;
  let AllBlockRotX = 0;
  let AllBlockRotY = 0;
  // Blocks
  class Mathematics3D {
    getInfo() {
      return {
        id: '3dmathematicssys',
        name: '3D Mathematics System',
        blocks: [
          {
            opcode: 'NOUSEOPCODE',
            blockType: Scratch.BlockType.Label,
            text: '3D Variables'
          },
          {
            opcode: 'camxposreturn',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Cam XPos'
          },
          {
            opcode: 'allblockrotx',
            blockType: Scratch.BlockType.REPORTER,
            text: 'All Block RotX'
          },
        ],
      };
    }
    camxposreturn() {
      return Cam3DxPos;
    }
    allblockrotx() {
      return AllBlockRotX;
    }
  }
  Scratch.extensions.register(new Mathematics3D());
})(Scratch);
