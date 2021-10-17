import { STAGE_WIDTH } from '../setup'
import { randomTetromino } from '../gameHelpers'

export type PLAYER = {
    pos: {
        x: number
        y: number
    }
    tetromino: (string | number)[][]
    collided: boolean
}
