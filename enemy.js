var enemy = {
    x: 500,
    y: 500,
    velX: 0,
    velY: 0,
    sprite: document.getElementById('enemy'),
    update: function(){
      var a = (this.x-player.x)*(this.x-player.x);
      var b = (this.y-player.y)*(this.y-player.y);
      var dist = Math.sqrt(a+b);
      if (dist < 10){
          player.dead = true;
      }
      if (this.x < player.x){
        this.x = this.x +1
      }
      if (this.x > player.x){
        this.x = this.x -1;
        }
      if (this.y < player.y){
        this.y = this.y +1;
      }
      if (this.y > player.y){
        this.y = this.y -1
      }
  },
    render: function(){
       ctx.drawImage(this.sprite, this.x, this.y);
   }
};
