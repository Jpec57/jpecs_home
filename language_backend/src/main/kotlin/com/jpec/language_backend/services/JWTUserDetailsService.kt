package com.jpec.language_backend.services

import com.jpec.language_backend.repositories.UserRepository
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service

@Service
class JWTUserDetailsService(private val userRepository: UserRepository) : UserDetailsService{
    @Throws(UsernameNotFoundException::class)
    override fun loadUserByUsername(username: String): UserDetails {
        val optionalUser = userRepository.findOneByUsername(username)
        if (!optionalUser.isPresent)
            throw UsernameNotFoundException("User not found with username: $username")

        val user = optionalUser.get()
        return User(
            user.username,
            user.password,
            ArrayList()
        )
    }
}