type TReduxState = import('store/index').ReduxState;

interface IAction {
  type: string;
  payload?: allAnyTypes;
}

type isTypeObject = Record<
  string,
  isTypeNumber,
  isTypeString,
  isTypeFunction,
  isTypeUndefined,
  isTypeBoolen
>;

type allAnyTypes =
  | isTypeObject
  | isTypeFunction
  | isTypeUndefined
  | isTypeString
  | isTypeNumber
  | isTypeArray
  | isTypeNull;
