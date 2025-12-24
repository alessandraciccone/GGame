package aciccone.payloads;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record UserUpdateDTO(
        @NotBlank(message="Il nome è obbligatorio")
        String nome,

        @NotBlank(message="L'email è obbligatoria")
        @Email
        String email
) {
}
