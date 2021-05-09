package com.jpec.language_backend.controllers

import com.jpec.language_backend.models.dto.JwtRequest
import com.jpec.language_backend.models.dto.JwtResponse
import com.jpec.language_backend.services.JWTUserDetailsService
import com.jpec.language_backend.services.JwtTokenUtil
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.BadCredentialsException
import org.springframework.security.authentication.DisabledException
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.web.bind.annotation.*


@RestController
@CrossOrigin
class AuthController(private val authenticationManager: AuthenticationManager,
                     private val userDetailsService : JWTUserDetailsService,
                     private val jwtTokenUtil: JwtTokenUtil) {


    fun authenticate(username: String, password: String) {
        try {
            authenticationManager.authenticate(UsernamePasswordAuthenticationToken(username, password))
        } catch (e: DisabledException) {
            throw Exception("USER_DISABLED", e)
        } catch (e: BadCredentialsException) {
            throw Exception("INVALID_CREDENTIALS", e)
        }
    }

    @RequestMapping(value = ["/authenticate"], method = [RequestMethod.POST])
    fun createAuthenticationToken(@RequestBody authenticationRequest: JwtRequest): ResponseEntity<*>? {
        authenticate(authenticationRequest.username, authenticationRequest.password)
        val userDetails = userDetailsService.loadUserByUsername(authenticationRequest.username)
        val token: String = jwtTokenUtil.generateToken(userDetails).token
        return ResponseEntity.ok<Any>(JwtResponse(token))
    }


}