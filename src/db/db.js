import ipadImg from "../images/ipad.png"
import iphone14Img from "../images/iphone14.png"
import iphone14proImg from "../images/iphone14pro.png"
import iphone15Img from "../images/iphone15.png"
import iphone16Img from "../images/iphone16.png"

export function getData(){
    return[
        {title: "Apple iPad Pro (M4)", price: 1300, Image: ipadImg, id: 1},
        {title: "Apple iPhone 14", price: 700, Image: iphone14Img, id: 2},
        {title: "Apple iPhone 14 Pro", price: 900, Image: iphone14proImg, id: 3},
        {title: "Apple iPhone 15", price: 950, Image: iphone15Img, id: 4},
        {title: "Apple iPhone 16", price: 1100, Image: iphone16Img, id: 5},
    ];
}