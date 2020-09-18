
import { dim } from "./constants";

const RGBcolor = (a, r, g, b) => `rgba(${r},${g},${b},${a || 1})`;

export function SetBrewConfigurationGradBG(ctx) {

    const black1 = ctx.createRadialGradient(200,400,30, 200, 400, 200);

    black1.addColorStop(0, `rgba(${53},${52},${58},1)`);
    black1.addColorStop(1, `rgba(${53},${52},${58},0)`);
    ctx.fillStyle = black1;
    ctx.fillRect(0,0, dim, dim);

    const pink = ctx.createRadialGradient(250,400,100, 250,350, 300);
    pink.addColorStop(0, `rgba(${194},${74},${116},1)`);
    pink.addColorStop(1, `rgba(${194},${74},${116},0)`);
    
    ctx.fillStyle = pink;
    ctx.fillRect(0,0, dim, dim);

    const black2 = ctx.createRadialGradient(500,500,50, 400,400, 200);
    black2.addColorStop(0, `rgba(${53},${52},${58},1)`);
    black2.addColorStop(1, `rgba(${53},${52},${58},0)`);
    ctx.fillStyle = black2;
    ctx.fillRect(0,0, dim, dim);

    const blue = ctx.createRadialGradient(400,100,30, 400,100, 300);
    blue.addColorStop(0, `rgba(${40},${52},${121},1)`);
    blue.addColorStop(1, `rgba(${40},${52},${121},0)`);
    ctx.fillStyle = blue;
    ctx.fillRect(0,0, dim, dim);
    
}