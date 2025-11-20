namespace SpriteKind {
    export const state = SpriteKind.create()
}
namespace StatusBarKind {
    export const message = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile1`)
    info.changeLifeBy(-1)
})
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    _ = 1
    tiles.placeOnRandomTile(sprite, assets.tile`myTile3`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dounl != 2) {
        animation.runImageAnimation(
        mySprite,
        [img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `,img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            . . . . . . . . . . . . . . . . 
            `,img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            . 9 . 9 . 9 . 9 . . 9 . . 9 . 9 
            . 9 . . . 9 . . . . 9 . . 9 . 9 
            . . . . . . . . . . . . . . . . 
            `,img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            . . . . . . . . . . . . . . . . 
            . . 9 . . . . 9 . 9 . . . . 9 . 
            . 9 . . . 9 . . . . 9 . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        false
        )
        mySprite.vy = -140
        dounl += 1
        animation.runImageAnimation(
        mySprite,
        [img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            . . . . . . . . . . . . . . . . 
            . . 9 . . . . 9 . 9 . . . . 9 . 
            . 9 . . . 9 . . . . 9 . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            . 9 . 9 . 9 . 9 . . 9 . . 9 . 9 
            . 9 . . . 9 . . . . 9 . . 9 . 9 
            . . . . . . . . . . . . . . . . 
            `,img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            . . . . . . . . . . . . . . . . 
            `,img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 f f f f 9 9 f f f f 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `],
        100,
        false
        )
        statusbar.value = 2 - dounl
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile17`)) {
        mapcount = 10
        tiles.setCurrentTilemap(Maps[randint(0, Maps.length - 1)])
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
        knifenotded = 0
    }
    if (mySprite.overlapsWith(projectile)) {
        sprites.destroy(projectile)
    }
})
function set_energy () {
    statusbar = statusbars.create(4, 15, StatusBarKind.Energy)
    statusbar.attachToSprite(mySprite)
    statusbar.setColor(5, 15, 4)
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.positionDirection(CollisionDirection.Left)
    statusbar.setOffsetPadding(0, 3)
    statusbar.max = 2
}
function set_knife () {
    statusbar2 = statusbars.create(4, 15, StatusBarKind.Energy)
    statusbar2.attachToSprite(mySprite)
    statusbar2.setColor(4, 15)
    statusbar2.positionDirection(CollisionDirection.Left)
    statusbar2.setOffsetPadding(0, 7)
    statusbar2.max = 1
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`dor`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`win screan`)
    tiles.setCurrentTilemap(tilemap`level13`)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (knifenotded == 0) {
        if (controller.dx() < 0 || facing_direction == -1) {
            shoot(-150, 0)
        } else if (controller.dx() > 0 || facing_direction == 1) {
            shoot(150, 0)
        }
        statusbar2.value = 1 - knifenotded
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    if (knifenotded == 0) {
        tiles.setCurrentTilemap(Maps[randint(0, Maps.length - 1)])
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
        spawn()
        mapcount += 1
        info.setScore(mapcount)
    } else {
        statusbar3.setLabel("I need my bat.")
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 f f f f 8 8 f f f f 8 8 8 
        8 8 8 f f f f 8 8 f f f f 8 8 8 
        8 8 8 f f f f 8 8 f f f f 8 8 8 
        8 8 8 f f f f 8 8 f f f f 8 8 8 
        8 8 8 f f f f 8 8 f f f f 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 f f f f 6 6 f f f f 6 6 6 
        6 6 6 f f f f 6 6 f f f f 6 6 6 
        6 6 6 f f f f 6 6 f f f f 6 6 6 
        6 6 6 f f f f 6 6 f f f f 6 6 6 
        6 6 6 f f f f 6 6 f f f f 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        . . . . . . . . . . . . . . . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `],
    100,
    false
    )
    mySprite.ay = 200
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 f f f f 9 9 f f f f 9 9 9 . 
        9 9 f f f f 9 9 f f f f 9 9 9 . 
        9 9 f f f f 9 9 f f f f 9 9 9 . 
        9 9 f f f f 9 9 f f f f 9 9 9 . 
        9 9 f f f f 9 9 f f f f 9 9 9 . 
        9 9 f f f f 9 9 f f f f 9 9 9 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        `,img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        `,img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        `],
    100,
    false
    )
    facing_direction = -1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    knifenotded = 0
    statusbar2.value = 1
    statusbar3.setLabel(" ")
})
function MAKEPLAYER () {
    mySprite = sprites.create(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 90, 0)
    mySprite.ay = 200
    mySprite.setStayInScreen(true)
    scene.cameraFollowSprite(mySprite)
    mySprite.startEffect(effects.fire, 200)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.x += 10
    sprite.y += 10
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.ashes, 200)
    otherSprite.follow(mySprite, 150)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 f f f f 9 9 f f f f 9 9 
        . 9 9 9 f f f f 9 9 f f f f 9 9 
        . 9 9 9 f f f f 9 9 f f f f 9 9 
        . 9 9 9 f f f f 9 9 f f f f 9 9 
        . 9 9 9 f f f f 9 9 f f f f 9 9 
        . 9 9 9 f f f f 9 9 f f f f 9 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `],
    100,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        `,img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 f f f f 9 9 f f f f 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        `,img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 f f f f 9 9 f f f f 9 9 9 . 
        9 9 f f f f 9 9 f f f f 9 9 9 . 
        9 9 f f f f 9 9 f f f f 9 9 9 . 
        9 9 f f f f 9 9 f f f f 9 9 9 . 
        9 9 f f f f 9 9 f f f f 9 9 9 . 
        9 9 f f f f 9 9 f f f f 9 9 9 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        `,img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `],
    100,
    false
    )
})
function bat_func () {
    statusbar3 = statusbars.create(0, 0, StatusBarKind.message)
    statusbar3.attachToSprite(mySprite)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 f f f f 9 9 f f f f 9 9 
        . 9 9 9 f f f f 9 9 f f f f 9 9 
        . 9 9 9 f f f f 9 9 f f f f 9 9 
        . 9 9 9 f f f f 9 9 f f f f 9 9 
        . 9 9 9 f f f f 9 9 f f f f 9 9 
        . 9 9 9 f f f f 9 9 f f f f 9 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 f f f f 9 9 f f f f 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        `],
    100,
    false
    )
    facing_direction = 1
})
function shoot (VXv: number, VYv: number) {
    projectile = sprites.createProjectileFromSprite(assets.image`bat`, mySprite, VXv, 0)
    if (controller.dx() < 0 || facing_direction == -1) {
        projectile.x += -10
    } else if (controller.dx() > 0 || facing_direction == 1) {
        projectile.x += 10
    }
    projectile.setFlag(SpriteFlag.BounceOnWall, true)
    projectile.setFlag(SpriteFlag.DestroyOnWall, false)
    projectile.lifespan = 1000
    projectile.setStayInScreen(true)
    projectile.ay = 50
    projectile.y += -5
    animation.runImageAnimation(
    projectile,
    [img`
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . . 4 b 4 4 4 4 4 . . . . 
        . . . . . 4 b b b 4 4 4 . . . . 
        . . . . . 4 4 4 b b 4 4 . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e e e e e . . . . . 
        `,img`
        . . . . . . . . . 4 4 4 4 4 4 4 
        . . . . . . . . . 4 b 4 4 4 4 4 
        . . . . . . . . 4 b b b 4 4 4 . 
        . . . . . . . 4 4 4 b b 4 4 . . 
        . . . . . . . 4 4 4 4 4 4 4 . . 
        . . . . . . 4 4 4 4 4 4 4 . . . 
        . . . . . . 4 4 4 4 4 4 . . . . 
        . . . . . . 4 4 4 4 4 4 . . . . 
        . . . . . . 4 4 4 4 4 4 4 . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . e e e e e . . . . . . . 
        . . . e e e e e . . . . . . . . 
        . . e e e e e . . . . . . . . . 
        . e e e e e . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 4 4 4 4 4 4 4 4 4 
        e e e e 4 4 4 4 4 4 4 4 4 b b 4 
        e e e e 4 4 4 4 4 4 4 4 4 b 4 4 
        e e e e 4 4 4 4 4 4 4 4 b b 4 4 
        e e e e 4 4 4 4 4 4 4 4 b 4 4 4 
        e e e e 4 4 4 4 4 4 4 4 4 4 4 4 
        . . . . 4 4 4 4 4 4 4 4 4 4 4 4 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        e e . . 4 . . . . . . . . . . . 
        e e e e 4 4 4 4 4 . . . . . . . 
        e e e e 4 4 4 4 4 4 4 4 . . . . 
        e e e e 4 4 4 4 4 4 4 4 4 4 4 4 
        e e e e 4 4 4 4 4 4 4 4 4 b b 4 
        . . e e 4 4 4 4 4 4 4 4 4 b 4 4 
        . . . . 4 4 4 4 4 4 4 4 b b 4 4 
        . . . . . 4 4 4 4 4 4 4 b 4 4 4 
        . . . . . . . . . 4 4 4 4 4 4 4 
        . . . . . . . . . . . . 4 4 4 4 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . e e e e e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 b b 4 4 4 . . . . . 
        . . . . 4 4 4 b b b 4 . . . . . 
        . . . . 4 4 4 4 4 b 4 . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        `,img`
        . . . . . . . e e e e e . . . . 
        . . . . . . . e e e e e . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . 4 4 4 4 4 4 4 . . . . . . . 
        . . 4 4 4 4 4 4 4 . . . . . . . 
        . . 4 4 b b 4 4 4 . . . . . . . 
        . 4 4 4 b b b 4 . . . . . . . . 
        . 4 4 4 4 4 b 4 . . . . . . . . 
        . 4 4 4 4 4 4 4 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
        4 4 4 4 4 4 4 4 4 4 4 4 e e e e 
        4 4 4 b 4 4 4 4 4 4 4 4 e e e e 
        4 4 b b 4 4 4 4 4 4 4 4 e e e e 
        4 4 b 4 4 4 4 4 4 4 4 4 e e e e 
        4 b b 4 4 4 4 4 4 4 4 4 e e e e 
        4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        4 4 4 4 4 4 4 . . . . . . . . . 
        4 4 4 b 4 4 4 4 4 4 4 . . . . . 
        4 4 b b 4 4 4 4 4 4 4 4 . . . . 
        4 4 b 4 4 4 4 4 4 4 4 4 e e . . 
        4 b b 4 4 4 4 4 4 4 4 4 e e e e 
        4 4 4 4 4 4 4 4 4 4 4 4 e e e e 
        . . . . 4 4 4 4 4 4 4 4 e e e e 
        . . . . . . . 4 4 4 4 4 e e e e 
        . . . . . . . . . . . 4 . . e e 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    knifenotded = 1
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        . . . . . . . . . . . . . . . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 f f f f 9 9 f f f f 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 f f f f 6 6 f f f f 6 6 6 
        6 6 6 f f f f 6 6 f f f f 6 6 6 
        6 6 6 f f f f 6 6 f f f f 6 6 6 
        6 6 6 f f f f 6 6 f f f f 6 6 6 
        6 6 6 f f f f 6 6 f f f f 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 f f f f 8 8 f f f f 8 8 8 
        8 8 8 f f f f 8 8 f f f f 8 8 8 
        8 8 8 f f f f 8 8 f f f f 8 8 8 
        8 8 8 f f f f 8 8 f f f f 8 8 8 
        8 8 8 f f f f 8 8 f f f f 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        `],
    100,
    false
    )
    mySprite.ay = 3000
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (ded == 1) {
        tiles.setCurrentTilemap(Maps[0])
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
        info.setLife(3)
        ded = 0
        _ = 1
        mapcount = 0
        knifenotded = 0
        info.setScore(mapcount)
        statusbar2.value = 1
        Maps = [
        tilemap`Bridge`,
        tilemap`Lavafilled`,
        tilemap`Mines`,
        tilemap`unexplodedplace`,
        tilemap`highrise`,
        tilemap`Da drop`
        ]
    } else {
        if (knifenotded == 0) {
            tiles.setCurrentTilemap(Maps[randint(0, Maps.length - 1)])
            tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
            spawn()
            mapcount += 1
            info.setScore(mapcount)
            if (mapcount >= 10) {
                Maps[Maps.length] = tilemap`the end`
            }
        } else {
            statusbar3.setLabel("I need my bat.")
        }
    }
})
function spawn () {
    for (let index = 0; index < mapcount / 2; index++) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 9 5 5 b . . . 
            . . . . . . 9 9 9 9 9 9 . . . . 
            . . . . . 9 9 7 7 7 7 7 b . . . 
            . 9 9 9 9 9 7 7 7 7 7 7 7 9 . . 
            . 9 6 7 9 7 7 7 7 7 7 7 7 9 . . 
            . . 9 7 7 9 7 d 1 f 7 d 4 7 . . 
            . . 9 6 7 7 9 1 f f 7 4 4 7 . . 
            8 8 6 9 7 7 7 d f 9 4 4 4 4 b . 
            8 6 6 8 6 7 7 9 7 4 4 4 4 4 4 b 
            8 6 6 6 8 8 9 7 7 7 7 7 7 7 b . 
            8 6 6 6 6 6 6 7 7 7 7 7 7 7 b . 
            . 8 6 6 6 6 6 6 7 7 7 7 7 6 b . 
            . . 8 6 6 6 6 6 6 7 7 7 8 8 . . 
            . . . 8 8 8 8 8 8 8 8 8 8 . . . 
            `, SpriteKind.Enemy)
        mySprite2.follow(mySprite, 40)
        mySprite2.ay = 300
        mySprite2.scale = 0.5 + mapcount / 50
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`donotthecube`, function (sprite, location) {
    tiles.placeOnRandomTile(when_theuhehren, assets.tile`donotthecube`)
    when_theuhehren.startEffect(effects.fire, 1000)
    tiles.setCurrentTilemap(tilemap`exploded map1`)
    Maps.removeAt(3)
    Maps.insertAt(3, tilemap`exploded map1`)
    knifenotded = 0
})
info.onLifeZero(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    ded = 1
    _ = 2
    music.stopAllSounds()
    tiles.setCurrentTilemap(tilemap`level10`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    if (tiles.tileAtLocationEquals(sprite.tilemapLocation(), assets.tile`transparency16`)) {
        tiles.setTileAt(sprite.tilemapLocation(), assets.tile`myTile9`)
    } else {
        knifenotded = 0
        statusbar2.value = 1
        statusbar3.setLabel("")
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
let mySprite2: Sprite = null
let statusbar3: StatusBarSprite = null
let facing_direction = 0
let statusbar2: StatusBarSprite = null
let projectile: Sprite = null
let knifenotded = 0
let mapcount = 0
let statusbar: StatusBarSprite = null
let dounl = 0
let _ = 0
let when_theuhehren: Sprite = null
let ded = 0
let mySprite: Sprite = null
let Maps: tiles.TileMapData[] = []
Maps = [
tilemap`Bridge`,
tilemap`Lavafilled`,
tilemap`Mines`,
tilemap`unexplodedplace`,
tilemap`highrise`,
tilemap`Da drop`
]
tiles.setCurrentTilemap(tilemap`Lavafilled`)
mySprite = sprites.create(img`
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 f f f f 9 9 f f f f 9 9 9 
    9 9 9 f f f f 9 9 f f f f 9 9 9 
    9 9 9 f f f f 9 9 f f f f 9 9 9 
    9 9 9 f f f f 9 9 f f f f 9 9 9 
    9 9 9 f f f f 9 9 f f f f 9 9 9 
    9 9 9 f f f f 9 9 f f f f 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    `, SpriteKind.Player)
mySprite.sayText("Time to find the \"DOOR\" to the way out!", 2000, true)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
controller.moveSprite(mySprite, 250, 0)
mySprite.ay = 200
mySprite.setStayInScreen(true)
scene.cameraFollowSprite(mySprite)
mySprite.setFlag(SpriteFlag.ShowPhysics, false)
effects.starField.endScreenEffect()
info.setLife(3)
ded = 0
music.setVolume(10)
set_energy()
set_knife()
bat_func()
when_theuhehren = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.state)
game.onUpdateInterval(5000, function () {
    let sad = 0
    console.logValue("dx", controller.dx())
    console.logValue("jumps", dounl)
    console.logValue("Map data", Maps)
    console.logValue("Times enter new map", mapcount)
    console.logValue("loc of knife", sad)
})
forever(function () {
    while (_ == 0) {
        music.play(music.createSong(hex`0078000408040103001c0001dc00690000045e0100040000000000000000000005640001040003180000001c00011d20003c00012040005c00012960007c000127`), music.PlaybackMode.UntilDone)
    }
    if (_ == 1) {
        music.play(music.createSong(hex`0078000408040203001c0001dc00690000045e0100040000000000000000000005640001040003180000001c00011d20003c00012040005c00012960007c00012708001c000e050046006603320000040a002d0000006400140001320002010002200000001c00030f121620003c00030d111440005c000311141860008000030c0f12`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`0078000408040303001c0001dc00690000045e0100040000000000000000000005640001040003180000001800011d20003800012040005c00012960007c00012704001c00100500640000041e000004000000000000000000000000000a0400042a000000180001251c00200001272000380001293c00400001244000580001225c006000012260008000011e08001c000e050046006603320000040a002d0000006400140001320002010002480000000c00010f0c001400011214002000011620002800010d28003000011130004000011440004800011148005000010d50006000010a60006800010c68007000010f700074000112`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`0078000408040204001c00100500640000041e000004000000000000000000000000000a0400047e0000000400012008000c00012410001400012718001c0001291c002000012a20002400012928002c00012a30003400012738003c0001253c004000012440004400012748004c00012950005400012954005800012758005c0001255c00600001246000640001226400680001296c00700001277400780001257c008000012208001c000e050046006603320000040a002d0000006400140001320002010002200000001c00030f121620003c00030d111440006000030c0f1260008000030a0d11`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(hex`0078000408040204001c00100500640000041e000004000000000000000000000000000a040004660000000400012008000c00012510001400012718001c00012520002400012928002c00012530003400012238003c00012440004400012748004c00012950005400012558005c0001276000640001276400680001256c00700001247400780001227c008000012408001c000e050046006603320000040a002d0000006400140001320002010002200000001c00030f121620003c00030d111440006000030c0f1260008000030a0d11`), music.PlaybackMode.UntilDone)
    }
})
game.onUpdateInterval(500, function () {
    statusbar2.value = 1 - knifenotded
})
game.onUpdateInterval(100, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        dounl = 0
        statusbar.value = 2 - dounl
    }
})
