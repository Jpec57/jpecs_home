package com.jpec.language_backend.repositories

import com.jpec.language_backend.models.VocabCard
import org.springframework.data.repository.CrudRepository
import java.util.*


interface VocabCardRepository : CrudRepository<VocabCard, Long?> {
//    fun findByLastName(lastName: String?): List<VocabCard>?
    override fun findById(id: Long): Optional<VocabCard>
}