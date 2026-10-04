input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 G B A F A C5 B ", 500), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (input.lightLevel() < 50) {
        music.play(music.stringPlayable("C D E F G A B C5 ", 500), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        music.play(music.stringPlayable("A F E F D G E F ", 500), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            # # . # #
            # # . # #
            # # . # #
            # # . # #
            # # . # #
            `)
    }
    basic.pause(5000)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("G F G A - F E D ", 500), music.PlaybackMode.UntilDone)
    basic.clearScreen()
    basic.pause(100)
    basic.showString("Hello!")
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("B A G A G F A C5 ", 500), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
    basic.clearScreen()
})
basic.showIcon(IconNames.Heart)
