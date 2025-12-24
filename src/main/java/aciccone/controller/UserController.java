package aciccone.controller;


import aciccone.payloads.*;
import aciccone.security.JwtTool;
import aciccone.service.AuthService;
import aciccone.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@RestController
@RequestMapping
public class UserController {

    private final AuthService authservice;
    private final UserService userService;
    private final JwtTool jwtTool;

    public UserController(AuthService authservice, UserService userService, JwtTool jwtTool){
        this.authservice=authservice;
        this.userService=userService;
        this.jwtTool=jwtTool;
    }


    @PostMapping("/auth/register")
    public ResponseEntity<AuthResponseDTO> register(@RequestBody AuthRequestDTO dto){
        UserResponseDTO userResponse = authservice.register(dto);
        String token= jwtTool.generateToken(userResponse.email());
        return ResponseEntity.ok(new AuthResponseDTO(userResponse, token));
    }

    @PostMapping("/auth/login")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody LoginRequestDTO dto){
        UserResponseDTO userResponse= authservice.login(dto);
        String token= jwtTool.generateToken(userResponse.email());
        return ResponseEntity.ok(new AuthResponseDTO(userResponse, token));
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<UserResponseDTO> update(
            @PathVariable Long id,
            @RequestBody UserUpdateDTO dto
            ){
        UserResponseDTO updated= userService.update(id, dto);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<String> deleted(@PathVariable Long id){
        userService.delete(id);
        return ResponseEntity.ok("Utente eliminato");
    }
}
