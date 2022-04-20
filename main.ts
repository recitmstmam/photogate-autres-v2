/**
 * Dès que le Microbit reçoit une donnée (0 dans notre cas envoyé par le Microbit de départ) on prend note du temps du chronomètre, on place cette valeur dans la variable t0 (on arrondi pour avoir seulement 3 chiffres après la virgule)
 * 
 * On attend (tant que) que la valeur d'intensité change pour placer le temps du chronomètre dans la variable t1
 * 
 * On affiche un sourire quand on a le temps de passage
 */
radio.onReceivedNumber(function (receivedNumber) {
    t0 = Math.round(input.runningTime() * 1000) / 1000
    // Modifier la valeur de l'intensité lumineuse en fonction  de vos tests.
    while (input.lightLevel() > 120 && t1 == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    t1 = Math.round(input.runningTime() * 1000) / 1000
    basic.showIcon(IconNames.Happy)
})
/**
 * Pour tester trouver la valeur de l'intensité lumineuse ambiante (peut être différente d'un Microbit à l'autre)
 */
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
/**
 * On soustrait les 2 valeurs de temps pour avoir la durée entre le Microbit de départ et celui-ci
 * 
 * On affiche en pressant sur le bouton B cette durée en secondes (en divisant par 1000)
 */
input.onButtonPressed(Button.B, function () {
    Temps = (t1 - t0) / 1000
    for (let index = 0; index < 4; index++) {
        basic.showString("" + Temps + "s")
    }
})
/**
 * On ajuste le groupe avec le Microbit de départ
 * 
 * On allume la del pour signaler que ça fonctionne
 */
let Temps = 0
let t1 = 0
let t0 = 0
radio.setGroup(1)
t0 = 0
t1 = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
