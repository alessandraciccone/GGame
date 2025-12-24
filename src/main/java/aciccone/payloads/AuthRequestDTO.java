package aciccone.payloads;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record AuthRequestDTO(

        @NotBlank(message="Il nome è obbligatorio")
        String nome,

        @NotBlank(message="L'email è obbligatoria")
        @Email(message="L'email non è valida")
        String email,

        @NotBlank(message="La password è obbligatoria")
        @Size(min=6, message="La password deve avere almeno 6 caratteri")
        String password
) {


}
