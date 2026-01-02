package aciccone.controller;


import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/proxy")
@CrossOrigin(origins = "*")
public class GameProxyController {

    @GetMapping("/games")
    public ResponseEntity<?> getGames(@RequestParam String category) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.add("User-Agent", "Mozilla/5.0");

            HttpEntity<String> entity = new HttpEntity<>(headers);

            RestTemplate rest = new RestTemplate();
            String url = "https://www.freetogame.com/api/games?category=" + category;

            ResponseEntity<String> response = rest.exchange(
                    url,
                    HttpMethod.GET,
                    entity,
                    String.class
            );

            return ResponseEntity.ok(response.getBody());

        } catch (Exception e) {
            return ResponseEntity.status(500).body("{\"error\":\"API error\"}");
        }
    }
}
