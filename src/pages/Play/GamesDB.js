import { v4 as uuid } from "uuid";

import TicTacToe from "./Games/TicTacToe/TicTacToe";
import Ludo from "./Games/Ludo/Ludo";

const data = [
  {
    name: "TicTacToe",
    component: TicTacToe,
    path: "tictactoe",
    id: uuid(),
  },
  {
    name: "Ludo",
    component: Ludo,
    path: "ludo",
    id: uuid(),
  },
];

export default data;
