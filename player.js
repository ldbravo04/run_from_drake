var player = {
  x : 50,
  y :100,
  velX : 0,
  velY : 0,
  sprite: [document.getElementById('player1'),
           document.getElementById('player2'),
           document.getElementById('player3'),
           document.getElementById('player4')

],
  ticks: 0,
  spriteNum: 0,
  dir: "left",
  update: function(){
    this.ticks++;
    this.x = this.x + this.velX;
    this.y = this.y + this.velY;
    if (this.velX !=0 || this.velY != 0)
      if(this.ticks % 10 === 0)
      this.spriteNum = this.spriteNum +1
    if (this.spriteNum > 3) this.spriteNum = 0;
  },
  render: function(){
      //ctx.fillRect(this.x, this.y, 300, 85)
      if (this.dir == "right"){
        flipCtx(ctx, this);
      }
      ctx.drawImage(this.sprite[this.spriteNum], this.x, this.y,30,30);
      if (this.dir == "right"){
        ctx.restore();
      }
  }
}
function flipCtx(ctx, player){
  ctx.save();
  ctx.translate(player.x + 50,0);
  ctx.scale(-1,1)
  ctx.translate(-player.x-50,0);

}

function restoredCtx(ctx){
  ctx.restore();

}
