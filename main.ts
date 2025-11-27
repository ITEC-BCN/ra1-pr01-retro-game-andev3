controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        animation.runImageAnimation(
        personaje,
        assets.animation`animado_arriba`,
        100,
        false
        )
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        animation.runImageAnimation(
        personaje,
        assets.animation`animado_izq`,
        100,
        false
        )
    }
})
function spawnear_npcs () {
    let enemigo: Sprite;
let x: number;
let y: number;
for (let index = 0; index < 40; index++) {
        enemigo = sprites.create(assets.image`enemigo1`, SpriteKind.Enemy)
        x = randint(0, 120)
        y = randint(0, 120)
        enemigo.setPosition(x, y)
        npcs_vivos + 1
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        animation.runImageAnimation(
        personaje,
        assets.animation`animado_der`,
        100,
        false
        )
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        animation.runImageAnimation(
        personaje,
        assets.animation`animado_abajo`,
        100,
        false
        )
    }
})
let personaje: Sprite = null
let kills = 0
let partida_activa = false
let npcs_vivos = 0
let arma_actual = 0
let vida_jugador = 100
let municion_actual = 30
let radio_tormenta = 200
let centro_tormenta_x = 160
let centro_tormenta_y = 120
let tiempo_siguiente_cierre = 30
let en_bus = true
personaje = sprites.create(assets.image`personaje`, SpriteKind.Player)
controller.moveSprite(personaje)
scene.setBackgroundImage(assets.image`mapita`)
spawnear_npcs()
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f e e 2 2 2 2 2 2 e f f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . e f f f f d d d 4 e f . . . 
    . . f d d d d f 2 2 2 f e f . . 
    . . f b b b b f 2 2 2 f 4 e . . 
    . . f b b b b f 5 4 4 f . . . . 
    . . . f c c f f f f f f . . . . 
    . . . . f f . . . f f f . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`m`)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
