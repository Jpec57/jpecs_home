package com.jpec.language_backend.repositories

import com.jpec.language_backend.models.SRSVocabCard
import com.jpec.language_backend.models.VocabCard
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.CrudRepository
import java.util.*


interface SRSVocabCardRepository : JpaRepository<SRSVocabCard, Long?> {
    override fun findById(id: Long): Optional<SRSVocabCard>
}