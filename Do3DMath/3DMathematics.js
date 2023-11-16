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
            opcode: "__NOUSEOPCODE",
            blockType: Scratch.BlockType.LABEL,
            text: "Variables",
          },
          {
            opcode: 'camxposreturn',
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true,
            text: 'Cam XPos'
          },
          {
            opcode: 'camyposreturn',
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true,
            text: 'Cam YPos'
          },
          {
            opcode: 'allblockrotx',
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true,
            text: 'All Block RotX'
          },
        ],
      };
    }
    camxposreturn() {
      return Cam3DxPos;
    }
    camyposreturn() {
      return Cam3DyPos;
    }
    allblockrotx() {
      return AllBlockRotX;
    }
  }
  Scratch.extensions.register(new Mathematics3D());
})(Scratch);
