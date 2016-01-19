export class UserRepository {
    tokenName = 'token';
  storage = localStorage;

  setToken(value: string): void {
    this.storage.setItem(this.tokenName,value);
  }

  getToken(): string {
    let value = this.storage.getItem(this.tokenName);
    return value === null || typeof value === 'undefined' ? '' : value;
  }

  deleteToken(): void {
    this.storage.removeItem(this.tokenName);
  }

  isLogged(): boolean {
    console.log(this.getToken());
    return this.getToken() !== '';
  }
}

export function isLogged () {
    let userRepository = new UserRepository();
    return userRepository.isLogged();
}
