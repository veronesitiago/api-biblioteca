export interface ApiConfig {
  readonly timezone: string;
  readonly formatDatetime: string;
  readonly port: number;
}
export interface JwtConfig {
  readonly jwtSecretKey: string;
}
