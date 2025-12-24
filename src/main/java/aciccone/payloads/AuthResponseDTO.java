package aciccone.payloads;

public record AuthResponseDTO(


       UserResponseDTO user, String token

) {
}
