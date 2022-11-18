package com.example.bye_service.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.example.bye_service.entity.ByeEntity;

@RestController
@RequestMapping("/adios")
public class ByeController {
    private ByeEntity Agente = new ByeEntity();

    @CrossOrigin(origins = "*")
    @GetMapping()
    public String Despedida(){
        return Agente.get_Despedida();
    }

    @CrossOrigin(origins = "*")
    @PostMapping()
    @ResponseBody
    public HttpStatus setDespedida(@RequestParam(defaultValue = "Adios!") String Despedida){
        Agente.set_Despedida(Despedida);
        return HttpStatus.OK;
    }

}
