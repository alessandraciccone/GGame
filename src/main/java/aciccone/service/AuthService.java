package aciccone.service;


import aciccone.entities.User;
import aciccone.exception.BadRequestException;
import aciccone.exception.UnauthorizedExceptions;
import aciccone.payloads.AuthRequestDTO;
import aciccone.payloads.LoginRequestDTO;
import aciccone.payloads.UserResponseDTO;
import aciccone.repositories.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder){
        this.userRepository= userRepository;
        this.passwordEncoder= passwordEncoder;
    }

    //register
    public UserResponseDTO register(AuthRequestDTO dto) {
        if (userRepository.findByEmail(dto.email()).isPresent()) {
            throw new BadRequestException("Email già registrata");
        }

        User user = new User();
        user.setNome(dto.nome());
        user.setEmail(dto.email());
        user.setPassword(passwordEncoder.encode(dto.password()));
        userRepository.save(user);

        return new UserResponseDTO(
                user.getId(),
                user.getNome(),
                user.getEmail()
        );
    }
        //login
        public UserResponseDTO login(LoginRequestDTO dto){
            User user = userRepository.findByEmail(dto.email()).orElseThrow(()-> new UnauthorizedExceptions("Credenziali non valide"));
            if(!passwordEncoder.matches(dto.password(), user.getPassword())){
                throw  new UnauthorizedExceptions("Credenziali non valide");
        }
            return new UserResponseDTO(
                    user.getId(),
                    user.getNome(),
                    user.getEmail()
            );
    }
}
