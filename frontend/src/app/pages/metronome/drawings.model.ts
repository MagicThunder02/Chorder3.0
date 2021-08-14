import { Platform } from "@ionic/angular";
import { MetroTrack } from "./metronome.model";


export interface Ball {
    color: string;
    diameter: number;
    cX: number;
    cY: number;
}

export interface Circle {
    color: string;
    radius: number;
    thickness: number;
    cX: number;
    cY: number;
}

export interface Line {
    color: string;
    thickness: number;
    cX: number;
    cY: number;
}

export interface Breakpoint {
    ballDiameter: number;
    canvas: number;
}


export class Drawings {

    public balls: Ball[];
    public circle: Circle;
    public line: Line;

    public circDiameter: number;

    private platform: Platform;
    private breakpoint: Breakpoint;

    constructor(
        track: MetroTrack,
        platform: Platform,
        numTracks: number,
        maxBeats: number,
        index: number,

    ) {
        this.platform = platform;


        this.createDrawings(track);
        this.calcBreakpoints(maxBeats);
        this.calcBallDiameter();
        this.calcCircRadius(numTracks, index);

        this.drawCircles(track, numTracks, maxBeats, index);
    }

    calcBreakpoints(maxBeats: number) {

        let dimension;

        if (this.platform.isPortrait()) {
            dimension = this.platform.width();
        } else {
            dimension = this.platform.height();
        }


        if (dimension >= 0 && dimension < 480) {
            this.breakpoint = { ballDiameter: 40 - (maxBeats * 1.5), canvas: dimension * 97 / 100 }
            console.log('x-small')
        }

        else if (dimension >= 480 && dimension < 768) {
            this.breakpoint = { ballDiameter: 50 - (maxBeats * 1.5), canvas: dimension * 95 / 100 }
            console.log('small')
        }

        else if (dimension >= 768 && dimension < 1024) {
            this.breakpoint = { ballDiameter: 60 - (maxBeats * 1.5), canvas: dimension * 95 / 100 }
            console.log('medium')
        }

        else if (dimension >= 1024 && dimension < 1200) {
            this.breakpoint = { ballDiameter: 80 - (maxBeats * 1.5), canvas: dimension * 80 / 100 }
            console.log('large')
        }

        else {
            this.breakpoint = { ballDiameter: 100 - (maxBeats * 1.5), canvas: dimension * 80 / 100 }
            console.log('x-large')
        }
    }

    private createDrawings(track: MetroTrack) {
        //generate the balls, 
        this.balls = [];
        for (let i = 0; i < track.beats; i++) {
            this.balls.push(({ color: '#9d9fa6', diameter: 0, cX: 0, cY: 0 }));
        }
        this.circle = { color: 'black', radius: 0, thickness: 2, cX: 0, cY: 0 };
        this.line = { color: 'black', thickness: 2, cX: 0, cY: 0 };
    }

    private calcBallDiameter() {
        //set diameteres of the balls depending on the beats of the greatest circle
        // console.log(this.canvas)

        this.balls.forEach(ball => {
            ball.diameter = this.breakpoint.ballDiameter;
        });

        console.log('ball diameter', this.balls[0].diameter)
    }

    private calcCircRadius(numTracks: number, trackIndex: number) {
        //set diameteres of each outern circumference

        if (this.platform.isPortrait()) {
            this.circDiameter = ((this.breakpoint.canvas / 2) / numTracks) * (trackIndex + 1) - this.breakpoint.ballDiameter / 2;

            this.circle.radius = this.circDiameter * 2;
        }
    }

    private drawCircles(track: MetroTrack, numTracks: number, maxBeats: number, trackIndex: number) {

        let x0 = this.platform.width() / 2 - this.breakpoint.ballDiameter / 2;
        let y0 = this.platform.height() / 2 - this.breakpoint.ballDiameter / 2;

        if (this.platform.isPortrait()) {

            this.balls.forEach((ball, i) => {

                let angle = 2 * Math.PI / track.beats * i;

                ball.cX = x0 + this.circDiameter * Math.cos(angle - Math.PI / 2);
                ball.cY = y0 + this.circDiameter * Math.sin(angle - Math.PI / 2);

                this.circle.cX = x0 + this.circDiameter * Math.cos(Math.PI) + this.breakpoint.ballDiameter / 2; + this.circle.thickness / 2;
                this.circle.cY = y0 + this.circDiameter * Math.sin(- Math.PI / 2) + this.breakpoint.ballDiameter / 2; + this.circle.thickness / 2;

                if (track.beats == 1) {
                    ball.cX = x0;
                    ball.cY = y0;
                }
            })
        }
        else {

            this.balls.forEach((ball, i) => {

                let startX = (this.platform.width() / maxBeats / 2);

                ball.cX = (this.platform.width() / track.beats * i) + startX - this.breakpoint.ballDiameter / 2;
                ball.cY = this.platform.height() * 90 / 100 / (numTracks + 1) * (trackIndex + 1);


                console.log('x:', ball.cX, 'y:', ball.cY, numTracks)
            })

            this.line.color = 'black';
            this.line.thickness = 2;
            this.line.cX = this.platform.width() * 2.5 / 100;
            this.line.cY = this.platform.height() * 90 / 100 / (numTracks + 1) * (trackIndex + 1) + this.breakpoint.ballDiameter / 2 - this.line.thickness;
        }
    }

    public lightBall(track, appRef, metro) {
        // console.log(metro)
        let time = 60 / metro.data.showBpm * metro.data.tracks[0].beats;
        time = time / track.beats;

        //if 1 beats the ball pulse slower
        if (track.beats == 1) {
            time = time * 500;
        } else {
            time = time * 750;
        }

        // switch off the ball
        setTimeout(() => {
            this.balls.forEach(ball => {
                ball.color = '#9d9fa6'; //grey
            })
        }, time)


        // switch on the ball
        if (track.idx == 0) {

            if (track.changeFirstBeat) {
                this.balls[track.idx].color = this.shadeColor(track.color, -80);
            } else {
                this.balls[track.idx].color = track.color;
            }
        }
        else {
            this.balls[track.idx].color = track.color;
        }
        appRef.tick();
    }

    private shadeColor(color: string, amount: number) {
        return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
    }
}

