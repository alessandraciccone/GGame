package aciccone.repositories;

import aciccone.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    // Aggiungi anche il metodo per email se ti serve
    Optional<User> findByEmail(String email);
}
