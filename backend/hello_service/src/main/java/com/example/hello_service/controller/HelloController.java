package com.example.hello_service.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.hello_service.entity.HelloEntity;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;




@RestController
public class HelloController {

    private HelloEntity Agente = new HelloEntity();

    @GetMapping("/saludar")
    public String saludar() {
        return  this.Agente.get_Saludo();
    }
    
    @PostMapping("/saludar")
    @ResponseBody
    public HttpStatus postMethodName(@RequestParam(defaultValue = "Hola!")  String Saludo) {
        this.Agente.set_Saludo(Saludo);
        return HttpStatus.OK;
    }
    
}
