package com.jpec.language_backend.controllers

import com.jpec.language_backend.annotations.Auth
import com.jpec.language_backend.models.AuthToken
import com.jpec.language_backend.models.User
import com.jpec.language_backend.models.dto.LoginDTO
import com.jpec.language_backend.repositories.AuthTokenRepository
import com.jpec.language_backend.repositories.UserRepository
import com.jpec.language_backend.services.JwtTokenUtil
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.ui.Model
import org.springframework.validation.BindingResult
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException
import javax.servlet.http.HttpServletResponse


@RestController
@RequestMapping("/users")
class UserController(val userRepository: UserRepository, val authTokenRepository: AuthTokenRepository, val jwtTokenUtil: JwtTokenUtil) {
    @GetMapping("/")
    fun findAll() = userRepository.findAll()

    @PostMapping("/")
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
    fun connectedOnly(@Auth user: User, response: HttpServletResponse): String {
        print(user.firstName)
        return "bravo";
    }

//    @PostMapping("/login")
//    fun loginUser(@RequestBody loginDTO: LoginDTO): ResponseEntity<String>{
//        val user = userRepository.findOneByUsername(loginDTO.username);
//        if (user.isPresent){
//            val token = jwtTokenUtil.generateToken(user.get())
//            authTokenRepository.save(token)
//            if (user.get().tokens != null ){
//                user.get().tokens!!.add(token)
//            } else {
//                user.get().tokens = mutableListOf(token)
//            }
//            return ResponseEntity.status(HttpStatus.OK)
//                .body(token.token)
//        }
//        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
//            .body("Bad credentials")
//    }
}