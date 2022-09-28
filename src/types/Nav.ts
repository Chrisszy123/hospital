export type NavType = {
  route?: string;
  icon?: string;
  text?: string;
};

export type NavTypeHolder<T extends string | number | symbol> = Record<
  T,
  NavType[] | NavType
>;

export interface _NavType<T extends string | number | symbol> {
  [key: string]: NavType | NavTypeHolder<T>;
}

export interface __NavType {
  [key: string]: NavType[] | NavType | Array<NavType[]> | [] | any;
}
