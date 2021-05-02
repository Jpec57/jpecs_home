package com.jpec.language_backend.repositories

import com.jpec.language_backend.models.AuthToken
import com.jpec.language_backend.models.User
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface UserRepository : CrudRepository<User, Long> {
    fun findOneByLastName(lastName: String): Optional<User>
    fun findOneByUsername(username: String): Optional<User>
    override fun findById(id: Long): Optional<User>
}