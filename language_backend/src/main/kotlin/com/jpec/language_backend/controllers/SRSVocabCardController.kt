package com.jpec.language_backend.controllers

import com.jpec.language_backend.models.SRSVocabCard
import com.jpec.language_backend.models.VocabCard
import com.jpec.language_backend.repositories.SRSVocabCardRepository
import com.jpec.language_backend.repositories.VocabCardRepository
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.servlet.support.ServletUriComponentsBuilder
import java.net.URI
import java.util.*
import javax.validation.Valid


@RestController
@RequestMapping("/srs/vocab")
class SRSVocabCardController(val srsVocabCardRepository: SRSVocabCardRepository) {

    @GetMapping("/")
    fun index(): Iterable<SRSVocabCard> {
        return srsVocabCardRepository.findAll()
    }

    @PostMapping("/")
    fun createSRSCard(@Valid @RequestBody card: SRSVocabCard): ResponseEntity<SRSVocabCard> {
        val vocabCard = srsVocabCardRepository.save(card)
        val location: URI = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
            .buildAndExpand(vocabCard.id).toUri()
        return ResponseEntity.created(location).body(vocabCard)
    }

    @GetMapping("/{id}")
    fun getSRSVocabCard(@PathVariable id: Long): Optional<SRSVocabCard> {
        return srsVocabCardRepository.findById(id)
    }


}