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