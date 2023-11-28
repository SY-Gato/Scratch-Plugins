(function(Scratch){
  "use strict";
  
  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Motion Testing must run unsandboxed");
  }
  const Rectangle = Scratch.vm.renderer.exports.rectangle;
  class testMovebreeeeh() {
    getInfo() {
      return {
        id: "motionthingyidk",
        name: "motion test",
        blocks: [
          {
            filter: [Scratch.TargetType.SPRITE],
            opcode: "whentheyes",
            blockType: Scratch.BlockType.COMMAND,
            text: "Move me to [XPOS] [YPOS]",
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
            },
          },
        ],
      };
    }
    whentheyes(args, util) {
      const x = Scratch.Cast.toNumber(args.X);
      const y = Scratch.Cast.toNumber(args.Y);
      util.target.SetXY(x, y);
    }
  }
  Scratch.extensions.register(new testMovebreeeeh());
})(Scratch);
