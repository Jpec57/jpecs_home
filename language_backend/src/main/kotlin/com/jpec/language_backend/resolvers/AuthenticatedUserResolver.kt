package com.jpec.language_backend.resolvers

import com.jpec.language_backend.models.User
import com.jpec.language_backend.repositories.UserRepository
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.stereotype.Service

@Service
class AuthenticatedUserResolver(private val userRepository : UserRepository) {

    fun getAuthenticatedUser(): User {
        val username = (SecurityContextHolder.getContext().authentication.principal as UserDetails).username
        return userRepository.findOneByUsername(username).get()
    }
}