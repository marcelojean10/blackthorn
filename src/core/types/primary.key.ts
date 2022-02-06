export type PrimaryKey = {
  value: number;
};

export function PrimaryKey(pk: number | bigint): PrimaryKey {
  return {
    value: Number(pk),
  };
}
