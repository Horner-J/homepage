class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }
    init() {
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, 0,0)
        };
        image.src = "/images/maps/DemoLowerFish.png" //map


        const x = 5;
        const y = 3;


        const waterShadow = new Image();
        waterShadow.onload = () => {
         this.ctx.drawImage(
           waterShadow, 
           0, //left cut 
           0, //top cut,
           32, //width of cut
           32, //height of cut
           x * 16 - 8,
           y * 16 - 18,
           32,
           32
        )
        }
        waterShadow.src = "/images/characters/waterShadow.png";
     

        const hero = new Image();
        hero.onload = () => {
           this.ctx.drawImage(
            hero, 
            0,//left cut
            0,//top cut
            32,//width of cut
            32,//height of cut
            x * 16 - 8,
            y * 16 - 18,
            32,
            32,
           )  
        }

        hero.src = "/images/characters/people/fishHero.png";
    }


}
