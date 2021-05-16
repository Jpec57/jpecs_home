package com.jpec.language_backend.controllers

import com.jpec.language_backend.models.dto.JwtResponse
import com.jpec.language_backend.models.dto.LoginRequest
import com.jpec.language_backend.repositories.UserRepository
import com.jpec.language_backend.services.CustomJwtUserDetailsService
import com.jpec.language_backend.services.JwtTokenUtil
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.BadCredentialsException
import org.springframework.security.authentication.DisabledException
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.web.bind.annotation.*


@RestController
@CrossOrigin
class AuthController(private val authenticationManager: AuthenticationManager,
                     private val userRepository: UserRepository,
                     private val userDetailsServiceCustom : CustomJwtUserDetailsService,
                     private val jwtTokenUtil: JwtTokenUtil) {


    fun authenticate(username: String, password: String) {
        val encoder = BCryptPasswordEncoder()
        val optionalUser = userRepository.findOneByUsername(username)
        if (!optionalUser.isPresent)
            throw UsernameNotFoundException("User not found with username: $username")
        if (!encoder.matches(password, optionalUser.get().password)){
            throw BadCredentialsException("Bad credentials.")
        }
    }

    @RequestMapping(value = ["/login"], method = [RequestMethod.POST])
    fun createAuthenticationToken(@RequestBody authenticationRequest: LoginRequest): ResponseEntity<*>? {
        authenticate(authenticationRequest.username, authenticationRequest.password)
        val userDetails = userDetailsServiceCustom.loadUserByUsername(authenticationRequest.username)
        val token: String = jwtTokenUtil.generateToken(userDetails).token
        return ResponseEntity.ok<Any>(JwtResponse(token))
    }


}