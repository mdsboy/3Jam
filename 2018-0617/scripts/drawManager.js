export default class DrawManager{
    static Init(){
        this.canvas = document.getElementById("po");
        this.canvas.width = 800;
        this.canvas.height = 600;
        this.ctx = this.canvas.getContext("2d");
    }
    
    static Clear(){
        this.ctx.clearRect(0, 0, 800, 600);
    }

    static Rect(p, w, h, c, f = true, l = 1){
        this.ctx.beginPath();
        this.ctx.rect(p.x, p.y, w, h);
        this.Draw(c, f, l);
    }

    static Circle(p, r, c, f = true, l = 1){ 
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, r, 0, Math.PI * 2, false);
        this.Draw(c, f, l);
    }

    static Line(p1, p2, c, l = 1){
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.Draw(c, false, l);
    }

    static DashLine(d, p1, p2, c, l = 1){
        this.ctx.setLineDash(d);
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.Draw(c, false, l);
        this.ctx.setLineDash([0, 0]);
    }

    static Polygon(ps, c, f = true, l = 1) {
        this.ctx.beginPath();
        this.ctx.lineWidth = l;
        this.ctx.moveTo(ps[0].x, ps[0].y);
        for(let i = 1; i < ps.length; ++i){
            this.ctx.lineTo(ps[i].x, ps[i].y);
        }
        this.ctx.lineTo(ps[0].x, ps[0].y);
        this.Draw(c, f, l);
    }

    static String(p, s, color, size) {
        this.ctx.fillStyle = color;
        this.ctx.font = "" + size + "px 'メイリオ'";
        this.ctx.fillText(s, p.x, p.y);
    }

    static Draw(c, f, l){
        if(f){
            this.ctx.fillStyle = c;
            this.ctx.fill();
        } else {
            this.ctx.strokeStyle = c;
            this.ctx.lineWidth = l;
            this.ctx.stroke();
        }
    }
}