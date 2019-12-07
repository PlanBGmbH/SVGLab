import { Component, OnInit } from '@angular/core';
import { Rect, SVG } from "@svgdotjs/svg.js"

@Component({
  selector: 'app-barplot-clock',
  templateUrl: './barplot-clock.component.html',
  styleUrls: ['./barplot-clock.component.css']
})
export class BarplotClockComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Width and Height of the SVG Container Element
    let w = 450;
    let h = 450;
    let draw = SVG().addTo('svg').size(w, h);

    // Container Element
    let rec = draw.rect(w, h).fill('transparent').stroke('grey');

    // Outer Circle with r = 172.5px
    let outCir = draw.circle(335).fill('lightblue').stroke('black').move(50, 50);

    // Inner Circle with r = 152.5
    let innerCir = draw.circle(305).fill('white').stroke('black').move(65, 65);
    let mPoint = draw.circle(5).fill('black').move(220, 220);
    let lineT = draw.line(225, 45, 225, 75).stroke({ width: 1 }).stroke("black")
    let tineR = draw.line(365, 225, 395, 225).stroke('black')
    let lineB = draw.line(225, 365, 225, 390).stroke('black')
    let lineL = draw.line(35, 225, 65, 225).stroke("black")
    // Clock Numbers
    var topText = draw.text("0")
    topText.move(221, 20)
    var rightText = draw.text("6")
    rightText.move(405, 215)
    let bottomText = draw.text("12")
    bottomText.move(215, 400)
    var leftText = draw.text("18")
    leftText.move(15, 215)

    // Data array which defines how many px are colored between the circles
    var data = [1, 25, 35, 100, 167, 115, 15]
  }
  
 

}
