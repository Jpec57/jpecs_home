package com.jpec.language_backend.controllers
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*
import com.jpec.language_backend.models.*;

import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.web.bind.annotation.GetMapping

@RestController
@RequestMapping("/deck")
class DeckController {

  @GetMapping("/")
  fun index(): String{
    return "toto";
  }

  @GetMapping("/test")
  fun indexTest(): VocabCard{
    return VocabCard(57, "Jpec");
  }

  //   @GetMapping("/blog")
  // fun blog(model: Model): String {
  //   model["title"] = "Blog"
  //   return "blog"
  // }
}