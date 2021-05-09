package com.jpec.language_backend.controllers

import com.jpec.language_backend.models.User
import com.jpec.language_backend.repositories.AuthTokenRepository
import com.jpec.language_backend.repositories.UserRepository
import com.jpec.language_backend.services.JwtTokenUtil
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.web.bind.annotation.*
import javax.servlet.http.HttpServletResponse


@RestController
@RequestMapping("/users")
class UserController(val userRepository: UserRepository, val authTokenRepository: AuthTokenRepository, val jwtTokenUtil: JwtTokenUtil) {

    @PostMapping("/signup")
    fun createUser(@RequestBody user: User): User {
        val encoder = BCryptPasswordEncoder()
        user.password = encoder.encode(user.password)
        val savedUser = userRepository.save(user)
        val token = jwtTokenUtil.generateTokenFromUser(user)
        authTokenRepository.save(token)
        if (savedUser.tokens != null ){
            savedUser.tokens!!.add(token)
        } else {
            savedUser.tokens = mutableListOf(token)
        }
        return savedUser
    }

    @GetMapping("/")
    fun findAll() = userRepository.findAll()


    @GetMapping("/{id}")
    fun showOne(@PathVariable id: Long) = userRepository.findById(id)

    @DeleteMapping("/{id}")
    fun deleteUser(@PathVariable id: Long){
        return userRepository.deleteById(id)
    }

    @PostMapping("/redirect")
    fun redirectTest(response: HttpServletResponse) {
        val userId = 42
        return response.sendRedirect("/users/$userId")
    }

    @GetMapping("/connected")
    fun connectedOnly(response: HttpServletResponse): String {
        val userDetails = SecurityContextHolder.getContext().authentication
            .principal as UserDetails
        return userDetails.username;
    }
}