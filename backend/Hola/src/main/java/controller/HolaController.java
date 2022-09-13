package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaController {
    
    private models.entity.Hola saludo;
    
    @GetMapping("/saludar")
    public String saludar(){
        //this.saludo.setSaludo("Hola!!!");
        return "hola";//this.saludo.saludar();
    }


}
