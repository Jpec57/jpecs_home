package com.jpec.language_backend.controllers

import org.springframework.web.bind.annotation.*


data class VocabCard(val id: Int, val value: String)

@RestController
//@RequestMapping("deck")
class DeckController {

  @GetMapping("/")
  fun index(): String{
    return "toto";
  }

  @GetMapping("/test")
  fun indexTest(): VocabCard{
    return VocabCard(57, "Jpec");
  }
}