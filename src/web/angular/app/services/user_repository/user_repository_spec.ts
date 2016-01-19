import {UserRepository} from './user_repository';

export function main() {
  describe('UserRepository Service', () => {
    let userRepository;

    beforeEach(() => {
      userRepository = new UserRepository;
    });

    it('should set token', () => {
      let token = 'tokenValue';
      userRepository.setToken(token);

      expect(token).toEqual(userRepository.getToken());
    });

    it('should mark as logged if it has a token', () => {
        userRepository.setToken('token');

        expect(userRepository.isLogged()).toBe(true);
    });

    it('should mark as not logged if it has a blank token', () => {
        userRepository.setToken('');

        expect(userRepository.isLogged()).toBe(false);
    });

    it('shoud mark as not logged if it has not a token', () => {
        userRepository.deleteToken();

        expect(userRepository.isLogged()).toBe(false);
    });
  });
}
