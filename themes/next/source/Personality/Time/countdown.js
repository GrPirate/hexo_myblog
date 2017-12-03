const WINDOW_WIDTH = document.body.clientWidth;
const WINDOW_HEIGHT = 789;
const RADIUS = parseInt(document.body.clientWidth / 120);
const MARGIN_LEFT = 100;
const MARGIN_TOP = 20;
const COLOR = "#086B70";
const END_TIME = new Date(2017, 11, 4, 20, 20, 20);

const colors = ["#33B5E5", "#0099CC", "#AA66CC", "#9933CC", "#99CC00", "#669900", "#FFBB33", "#FF8800", "#FF4444", "#CC0000"];


var currentTimeSeconds = getCurrentShowTime();
var balls = [];
var canvas = document.querySelector("#canvas");

canvas.width = WINDOW_WIDTH;
canvas.height = WINDOW_HEIGHT;
var ctx = canvas.getContext('2d');


// 球类
class Ball {
    constructor(x, y, r, color, ctx) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.ctx = ctx;
        this.g = 2;
        this.vx = Math.pow(-1, Math.round(Math.random())) * (Math.ceil(Math.random() * 10) + 1);
        this.vy = -10;
    }

    update() {
        this.vy = this.vy + this.g;
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        if ((this.y + this.r) >= WINDOW_HEIGHT) {
            this.y = WINDOW_HEIGHT - this.r;
            this.vy = -this.vy * 0.75;
        }

        if (this.x + RADIUS > WINDOW_WIDTH) {
            this.x = WINDOW_WIDTH - RADIUS;
            this.vx = -this.vx;
        }
    }

    render() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}

function getCurrentShowTime() {
    let currentTime = new Date();
    let result = parseInt((END_TIME.getTime() - currentTime.getTime()) / 1000);
    return result >= 0 ? result : 0;
}

function render(ctx) {

    ctx.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);

    let nextTimeSeconds = getCurrentShowTime();
    let hours = Math.floor(nextTimeSeconds / 3600);
    let minites = Math.floor((nextTimeSeconds - hours * 3600) / 60);
    let seconds = nextTimeSeconds % 60;

    let startX = RADIUS + MARGIN_LEFT + 1;
    let startY = MARGIN_TOP + RADIUS + 1;
    renderDigit(startX, startY, Math.floor(hours / 10), ctx);
    renderDigit(startX + 15 * (RADIUS + 1), startY, hours % 10, ctx);
    renderDigit(startX + 30 * (RADIUS + 1), startY, 10, ctx);
    renderDigit(startX + 39 * (RADIUS + 1), startY, Math.floor(minites / 10), ctx);
    renderDigit(startX + 54 * (RADIUS + 1), startY, minites % 10, ctx);
    renderDigit(startX + 69 * (RADIUS + 1), startY, 10, ctx);
    renderDigit(startX + 78 * (RADIUS + 1), startY, Math.floor(seconds / 10), ctx);
    renderDigit(startX + 93 * (RADIUS + 1), startY, seconds % 10, ctx);
    if (currentTimeSeconds != nextTimeSeconds) {
        createBall(startX + 93 * (RADIUS + 1), startY, seconds % 10, ctx);
    }
    currentTimeSeconds = nextTimeSeconds;
}

function renderDigit(x, y, num, ctx) {
    ctx.fillStyle = COLOR;
    for (let i = 0, len = digit[num].length; i < len; i++)
        for (let j = 0, lenj = digit[num][i].length; j < lenj; j++)
            if (digit[num][i][j] == 1) {
                ctx.beginPath();
                ctx.arc((x + 2 * (RADIUS + 1) * j), (y + 2 * (RADIUS + 1) * i), RADIUS, 0, 2 * Math.PI);
                ctx.fill();
            }
}

function createBall(x, y, num, ctx) {
    for (let i = 0, len = digit[num].length; i < len; i++)
        for (let j = 0, lenj = digit[num][i].length; j < lenj; j++)
            if (digit[num][i][j] == 1) {
                let color = colors[Math.floor(Math.random() * 10)];
                let ball = new Ball((x + 2 * (RADIUS + 1) * j), (y + 2 * (RADIUS + 1) * i), RADIUS, color, ctx);
                balls.push(ball);
            }
}

function renderBall() {
    for (let ball of balls) {
        ball.render();
        ball.update();
    }

    // 性能优化：删除滚落屏幕外小球
    var cnt = 0
    for (var i = 0; i < balls.length; i++)
        if (balls[i].x + RADIUS > 0 && balls[i].x - RADIUS < WINDOW_WIDTH)
            balls[cnt++] = balls[i]

    while (balls.length > cnt) {
        balls.pop();
    }
}
setInterval(function () {
    render(ctx);
    renderBall();
    console.log(balls.length)
}, 50)