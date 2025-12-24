package aciccone.payloads;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record LoginRequestDTO(
        @NotBlank(message="L'email è obbligatorio")
        @Email(message="L'email non è valida")
        String email,

        @NotBlank(message="La password  è obbligatoria")
        String password
) {
}
