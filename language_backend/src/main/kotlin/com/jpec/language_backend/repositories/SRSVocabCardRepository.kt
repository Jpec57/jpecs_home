package com.jpec.language_backend.repositories

import com.jpec.language_backend.models.SRSVocabCard
import com.jpec.language_backend.models.VocabCard
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.query.Param
import java.util.*

//https://www.baeldung.com/spring-data-jpa-query
interface SRSVocabCardRepository : JpaRepository<SRSVocabCard, Long?> {
    override fun findById(id: Long): Optional<SRSVocabCard>
    @Query("SELECT c.* FROM srsvocab_card c LEFT JOIN user u ON u.id = c.user_id WHERE (c.next_available <= :now OR c.next_available IS NULL) AND c.is_active = true AND c.user_id = :userId", nativeQuery = true)
    fun findAvailableByUser(@Param("userId") userId: Long, @Param("now") startDate: Long): Optional<List<SRSVocabCard>>
}