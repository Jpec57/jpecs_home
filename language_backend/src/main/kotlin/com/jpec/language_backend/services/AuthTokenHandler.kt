package com.jpec.language_backend.services

import com.jpec.language_backend.models.User
import com.jpec.language_backend.repositories.AuthTokenRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import org.springframework.transaction.annotation.Transactional
import javax.security.sasl.AuthenticationException


//@Component
//class AuthTokenHandler {
//
//    @Autowired
//    lateinit var tokenRepository: AuthTokenRepository
//
//    @Transactional(readOnly = true)
//    fun getUserFromToken(token : String?) : User {
//        if (token == null){
//            print("getUserFromToken with null token");
//            throw AuthenticationException()
//        }
//
//        val authTokenOptional = tokenRepository.findByTokenAndExpiredOnBefore(token, System.currentTimeMillis())
//
//        authTokenOptional.orElseThrow { AuthenticationException() }
//        print("authTokenOptional user " + authTokenOptional.get().user.username);
//
//        return authTokenOptional.get().user
//    }
//}