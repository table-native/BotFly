import { v4 as uuid } from "uuid";

import TicTacToe from "./Games/TicTacToe";
import Ludo from "./Games/Ludo";

const data = [
  {
    name: "TicTacToe",
    component: TicTacToe,
    path: "tictactoe",
    img: "tictactoe.webp",
    id: uuid(),
  },
  {
    name: "Ludo",
    component: Ludo,
    path: "ludo",
    img: "",
    id: uuid(),
  },
];

export default data;
