package com.jpec.language_backend.resolvers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.security.sasl.AuthenticationException;

@ControllerAdvice
/*
@ControllerAdvice is a specialization of the @Component annotation which allows to handle exceptions across the whole application in one global handling component. It can be viewed as an interceptor of exceptions thrown by methods annotated with @RequestMapping and similar.
 */
class CustomExceptionsHandler {

    @ExceptionHandler(AuthenticationException::class)
    fun authenticationExceptionHandler(e: Exception):ResponseEntity<String>
    {
        return ResponseEntity("authToken missing or not valid!", HttpStatus.UNAUTHORIZED)
    }

}