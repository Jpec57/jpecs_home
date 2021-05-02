package com.jpec.language_backend.repositories

import com.jpec.language_backend.models.AuthToken
import com.jpec.language_backend.models.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface AuthTokenRepository : JpaRepository<AuthToken, Long> {
    fun findByTokenAndExpiredOnBefore(token: String, deadline: Long): Optional<AuthToken>
    fun findByUserAndExpiredOnBefore(user: User, deadline: Long): List<AuthToken>?
    override fun findById(id: Long): Optional<AuthToken>
}