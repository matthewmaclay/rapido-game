// В случае совпадения 4-х чисел в первом поле или 3-х чисел и более в первом поле и 1-го числа втором, пользователь считается победителем лотереи и получает причитающиеся ему лавры (ничего не получает).
import { intersection } from "lodash";

type fields = {
  firstField: [number?];
  secondField: [number?];
};

export default function checkVictory(
  gamerFields: fields,
  correctFields: fields
): boolean {
  const sumPoints =
    intersection(gamerFields.firstField, correctFields.firstField).length +
    intersection(gamerFields.secondField, correctFields.secondField).length;

  return sumPoints >= 4;
}
