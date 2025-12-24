package aciccone.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class UnauthorizedExceptions extends RuntimeException{
    public UnauthorizedExceptions (String message){
        super(message);
    }
}
