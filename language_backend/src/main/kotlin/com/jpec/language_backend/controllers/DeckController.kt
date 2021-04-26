package com.jpec.language_backend.controllers
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*


@RestController
// @RequestMapping(path="/deck")
// @Controller // This means that this class is a Controller
// @RequestMapping(path="/demo") 
class DeckController {

  @GetMapping("/")
  fun index(): String{
    return "toto";
  }

  // @GetMapping("/test")
  // fun indexTest(): VocabCard{
  //   return VocabCard(57, "Jpec");
  // }
}