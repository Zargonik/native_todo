export interface ICircleProps {
  start: number;
  range: number;
  backgroundColor: string;
  fillBarColor: string;
  title: string;
  titleColor: string;
  number: number;
  numberColor: string;
  animationDigitsAfterDot: number;
}

export interface IChart {
  firstCircleParams: ICircleProps;
  secondCircleParams: ICircleProps;
  animationDuration: number;
}
