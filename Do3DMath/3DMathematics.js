(function(Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) {
    throw new Error('3DMathematics must run unsandboxed');
  }
  // Required Variables
  //let Cam3DxPos;
  //let Cam3DyPos;
  //let Cam3DzPos;
  //let AllBlockRotX;
  //let AllBlockRotY;
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
            text: 'All Block RotX' //[HI]',
            //arguments: {
              //HI: {
                //type: Scratch.ArgumentType.STRING,
                //defaultValue: 'Hi'
              //},
            //},
          },
        ],
      };
    }
    allblockrotx() {
      return "Hello World!";
    }
  }
  Scratch.extensions.register(new Mathematics3D());
})(Scratch);
