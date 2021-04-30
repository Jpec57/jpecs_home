package com.jpec.language_backend.controllers

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*
import com.jpec.language_backend.models.*;

import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.web.bind.annotation.GetMapping

@RestController
@RequestMapping("/cards/vocab")
class VocabCardController {

    @GetMapping("/")
    fun index(): String {
        return "vocab"
    }

  @GetMapping("/{id}")
  fun getVocabCard(@PathVariable id: Int): String {
    return "blog $id"
  }

}