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
