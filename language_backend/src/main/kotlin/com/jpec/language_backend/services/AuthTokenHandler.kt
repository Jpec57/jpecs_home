package com.jpec.language_backend.services

import com.jpec.language_backend.models.AuthToken
import com.jpec.language_backend.models.User
import com.jpec.language_backend.repositories.AuthTokenRepository
import com.jpec.language_backend.repositories.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import org.springframework.transaction.annotation.Transactional
import javax.security.sasl.AuthenticationException


@Component
class AuthTokenHandler {

    @Autowired
    lateinit var userRepository: UserRepository

    @Autowired
    lateinit var tokenRepository: AuthTokenRepository

    @Transactional(readOnly = true)
    fun getUserFromToken(token : String?) : User {
        if (token == null)
            throw AuthenticationException()

        val authTokenOptional = tokenRepository.findByTokenAndExpiredOnBefore(token, System.currentTimeMillis())

        authTokenOptional.orElseThrow { AuthenticationException() }

        return authTokenOptional.get().user
    }

    fun generateToken(user: User): AuthToken {
        return AuthToken(expiredOn = System.currentTimeMillis() + 1000000, user = user, token = "Toto", id = null)
    }
}