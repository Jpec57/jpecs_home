package com.jpec.language_backend.controllers

import com.jpec.language_backend.models.AuthToken
import com.jpec.language_backend.models.User
import com.jpec.language_backend.models.dto.LoginDTO
import com.jpec.language_backend.repositories.AuthTokenRepository
import com.jpec.language_backend.repositories.UserRepository
import com.jpec.language_backend.services.AuthTokenHandler
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.ui.Model
import org.springframework.validation.BindingResult
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException
import javax.servlet.http.HttpServletResponse


@RestController
@RequestMapping("/users")
class UserController(val userRepository: UserRepository, val authTokenRepository: AuthTokenRepository, val authTokenHandler: AuthTokenHandler) {
//    @GetMapping("/")
//    fun index(): String{
//        return "index toto";
//    }



    @GetMapping("/")
    fun findAll() = userRepository.findAll()

    @PostMapping("/")
    fun createUser(@RequestBody user: User): User{
        val savedUser = userRepository.save(user)
        val token = authTokenHandler.generateToken(user)
        authTokenRepository.save(token)
        if (savedUser.tokens != null ){
            savedUser.tokens!!.add(token)
        } else {
            savedUser.tokens = mutableListOf(token)
        }
        return savedUser
    }

//    fun updateUser(updateRequest: UpdateCustomerDTO): CustomerDTO {
//        val entity: CustomerEntity = getEntityFromStorage(updateRequest.id)
//        if (updateRequest.name != null)
//            entity.name = updateRequest.name
//        //same drill for all the other fields
//    }

    @GetMapping("/{id}")
    fun showOne(@PathVariable id: Long) = userRepository.findById(id) ?: throw ResponseStatusException(HttpStatus.NOT_FOUND, "This user does not exist")

    @DeleteMapping("/{id}")
    fun deleteUser(@PathVariable id: Long){
        return userRepository.deleteById(id)
    }

    @PostMapping("/redirect")
    fun redirectTest(response: HttpServletResponse) {
        val userId = 42
        return response.sendRedirect("/users/$userId")
    }

    @PostMapping("/login")
    fun loginUser(@RequestBody loginDTO: LoginDTO): Boolean{
        val user = userRepository.findOneByUsername(loginDTO.username);
        if (user.isPresent){
            val token = authTokenHandler.generateToken(user.get())
            authTokenRepository.save(token)
            if (user.get().tokens != null ){
                user.get().tokens!!.add(token)
            } else {
                user.get().tokens = mutableListOf(token)
            }
        }
        return user.isPresent
    }
}