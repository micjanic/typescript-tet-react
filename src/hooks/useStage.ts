import React from 'react';
import { STAGE, STAGECELL } from '../components/Stage/Stage';
import { createStage } from '../gameHelpers';

//Types
import type { PLAYER } from './usePlayer';

export const useStage = (player: PLAYER, resetPlayer: () => void) => {
    const [stage, setStage] = React.useState(createStage());

    React.useEffect(() => {
        if (!player.pos) return;

        const updateStage = (prevStage: STAGE): STAGE => {
            // first flush the stage
            // if it says 'clear' but doesnt have a zero it means that it's the player's move and should be cleared
            const newStage = prevStage.map(
                (row) =>
                    row.map((cell) =>
                        cell[1] === 'clear' ? [0, 'clear'] : cell
                    ) as STAGECELL[]
            );

            //then draw the tetromino
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        //prettier-ignore
                        newStage[y + player.pos.y][x + player.pos.x] = [value, `${player.collided ? "merged" : "clear"}`];
                    }
                });
            });
        };
    }, []);
};
