let MouseUp = 4
let MouseAcross = 0
let MouseCaught = false
let CatUp = 0
let CatAcross = 4
let CatSpeed = 300
let CatDirection = 0
let MouseScore = 0
while (MouseCaught == false) {
    led.plotBrightness(MouseAcross, MouseUp, 25)
    led.plot(CatAcross, CatUp)
    basic.pause(CatSpeed)
    led.unplot(MouseAcross, MouseUp)
    led.unplot(CatAcross, CatUp)
    CatDirection = randint(0, 3)
    if (MouseAcross > 0 && input.rotation(Rotation.Roll) < -10) {
        MouseAcross += -1
    }
    if (MouseAcross < 4 && input.rotation(Rotation.Roll) > 10) {
        MouseAcross += 1
    }
    if (MouseUp > 0 && input.rotation(Rotation.Pitch) < -10) {
        MouseUp += -1
    }
    if (MouseUp < 4 && input.rotation(Rotation.Pitch) > 10) {
        MouseUp += 1
    }
    if (CatAcross > 0 && CatDirection == 0) {
        CatAcross += -1
    }
    if (CatAcross < 4 && CatDirection == 2) {
        CatAcross += 1
    }
    if (CatUp > 0 && CatDirection == 1) {
        CatUp += -1
    }
    if (CatUp < 4 && CatDirection == 3) {
        CatUp += 1
    }
    if (CatSpeed > 20) {
        CatSpeed += -1
        MouseScore += 1
    }
    if (CatAcross == MouseAcross && CatUp == MouseUp) {
        MouseCaught = true
    }
}
basic.showString("Caught! Score")
basic.showNumber(MouseScore)
