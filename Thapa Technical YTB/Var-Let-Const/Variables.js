function bioData() {
    let fName = "Suman";
    let lName = "yoyo";
    const midName = "no";
    if(true) {
        let lName = "Maji";
        console.log("inner " + fName);
        console.log("inner " + lName);
        fName = "Bubai";
    }
    console.log(fName);
    console.log(lName);
    console.log(midName);
}
bioData();