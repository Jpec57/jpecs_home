package com.jpec.language_backend.controllers

import com.jpec.language_backend.models.VocabCard
import com.jpec.language_backend.repositories.VocabCardRepository
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.servlet.support.ServletUriComponentsBuilder
import java.net.URI
import java.util.*
import javax.validation.Valid


@RestController
@RequestMapping("/cards/vocab")
class VocabCardController(val vocabCardRepository: VocabCardRepository) {

    @GetMapping("/")
    fun index(): Iterable<VocabCard> {
        return vocabCardRepository.findAll()
    }

    @PostMapping("/")
    fun createCard(@Valid @RequestBody card: VocabCard): ResponseEntity<VocabCard> {
        val vocabCard = vocabCardRepository.save(card)
        val location: URI = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
            .buildAndExpand(vocabCard.id).toUri()
        return ResponseEntity.created(location).body(vocabCard)
    }

  @GetMapping("/{id}")
  fun getVocabCard(@PathVariable id: Long): Optional<VocabCard> {
    return vocabCardRepository.findById(id)
  }




}