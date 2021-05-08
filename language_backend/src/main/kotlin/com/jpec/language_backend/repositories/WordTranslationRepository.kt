package com.jpec.language_backend.repositories

import com.jpec.language_backend.models.WordTranslation
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface WordTranslationRepository : JpaRepository<WordTranslation, Long?> {
    override fun findById(id: Long): Optional<WordTranslation>
}