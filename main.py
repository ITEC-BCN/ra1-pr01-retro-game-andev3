def on_up_pressed():
    if True:
        animation.run_image_animation(personaje,
            assets.animation("""
                animado_arriba
                """),
            100,
            False)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_left_pressed():
    if True:
        animation.run_image_animation(personaje,
            assets.animation("""
                animado_izq
                """),
            100,
            False)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def spawnear_npcs():
    for index in range(40):
        enemigo = sprites.create(assets.image("""
            enemigo1
            """), SpriteKind.enemy)
        x = randint(0, 120)
        y = randint(0, 120)
        enemigo.set_position(x, y)
        npcs_vivos + 1

def on_right_pressed():
    if True:
        animation.run_image_animation(personaje,
            assets.animation("""
                animado_der
                """),
            100,
            False)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    if True:
        animation.run_image_animation(personaje,
            assets.animation("""
                animado_abajo
                """),
            100,
            False)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

personaje: Sprite = None
kills = 0
partida_activa = False
npcs_vivos = 0
arma_actual = 0
vida_jugador = 100
municion_actual = 30
radio_tormenta = 200
centro_tormenta_x = 160
centro_tormenta_y = 120
tiempo_siguiente_cierre = 30
en_bus = True
personaje = sprites.create(assets.image("""
    personaje
    """), SpriteKind.player)
controller.move_sprite(personaje)
scene.set_background_image(assets.image("""
    mapita
    """))
spawnear_npcs()
mySprite = sprites.create(img("""
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
        """),
    SpriteKind.player)
tiles.set_current_tilemap(tilemap("""
    m
    """))
controller.move_sprite(mySprite)
